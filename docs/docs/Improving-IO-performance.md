# I/O scheduling in Linux
Linux supports following 3 I/O job scheduling algorithms:
1.  cfq
2.  deadline
3.  noop

## 1. cfq
The CFQ or Completely Fair Queuing algorithm divides processes into three classes, Real Time, Best Effort, and Idle.
Real Time processes are served before Best Effort processes, which in turn are served before Idle processes.
Within each class, the kernel attempts to give every thread the same number of time slices. Processes are assigned to the Best Effort class by default. The kernel uses recent I/O patterns to anticipate whether an application will issue more requests in the near future, and if more I/O is anticipated, the kernel will wait even though other processes have pending I/O.

CFQ can improve throughput but with worse latency. Users are sensitive to latency and will not like the result when their applications are bound by CFQ.

Reasons to use the CFQ scheduler:

People do not use your system interactively, at least not much. Throughput is more important than latency, but latency is still important enough that you don't want to use NOOP.

## 2. deadline
The deadline algorithm attempts to limit the maximum latency. Every I/O request is assigned its own deadline and it should be completed before that timer expires.

Two queues are maintained per device, one sorted by sector and the other by deadline. As long as no deadlines are expiring, the I/O requests are done in sector order to minimize head motion and provide best throughput.

Reasons to use the deadline scheduler include:

1.  People use your system interactively. Your work load is dominated by interactive applications, either users who otherwise may complain of sluggish performance or databases with many I/O operations.

2.  Read operations happen significantly more often than write operations, as applications are more likely to block waiting to read data.

3.  Your storage hardware is a SAN (Storage Area Network) or RAID array with deep I/O buffers.

## 3. noop
The NOOP scheduler does nothing to change the order or priority, it simply handles the requests in first come first server manner.

This can provide the best throughput, especially on storage subsystems that provide their own queuing such as solid-state drives, intelligent RAID controllers with their own buffer and cache, and Storage Area Networks.

This usually makes for the worst latency, so it would be a poor choice for interactive use.

Reasons to use the noop scheduler include:

1.  Throughput is your dominant concern, you don't care about latency. Users don't use the system interactively.

2.  Your work load is CPU-bound: most of the time we're waiting for the CPU to finish something, I/O events are relatively small and widely spaced.

## Checking current scheduling algorithm
Check the content of file `/sys/block/sda/queue/scheduler` (change `sda` with your device). The currently used algorithm is enclosed in block brackets (``[]``).

```
$ cat /sys/block/sda/queue/scheduler
noop deadline [cfq]
```

This can be changed for a given session (until the system is rebooted) by writing to the same file with the name of new algorithm.

```
# echo deadline > /sys/block/sda/queue/scheduler
$ cat /sys/block/sda/queue/scheduler
noop [deadline] cfq
```

## Tuning algorithms
Since FOSSology is used in an interactive mode and performs more read operations than write operations, the `deadline` algorithm fits the best for use.

Each algorithm have their their own attributes and can be tuned to further improve the performance. The attributes used by scheduling algorithm can be found in `/sys/block/sda/queue/iosched/`. Each attribute is stored as a file and can be modified by directly writing to it with root privileges.
### Deadline scheduler attributes
1.  `fifo_batch`: Number of r/w operations in one batch. Lower value gives less latency, higher value provides higher throughput.
2.  `read_expire`: Number of milliseconds within which a read request should be served. Should be near 100 since FOSSology performs more read operations during clearing.
3.  `write_expire`: Number of milliseconds within which a write request should be served. Can be left to default value. Only effects the performance during an agent run (new upload).
4.  `writes_starved`: Number read batches that can be processed before handling a write batch. Increase this from default of 2 to give higher priority to read operations.

Experiment with the values to find the best fit for your environment.
## Making changes permanent
Since the changes made by you are only for a system session, they are lost at next reboot. To make them permanent, you have to automate it to apply the changes at every system boot. Place the following script on your system's `rc.d` directory or in default `/etc/rc.local`.

```
## Added for disk tuning
for DISK in sda sdb sdc
do
	# Select deadline scheduler first
	echo deadline > /sys/block/${DISK}/queue/scheduler
	# Now set deadline scheduler parameters
	echo 100 > /sys/block/${DISK}/queue/iosched/read_expire
	echo 4 > /sys/block/${DISK}/queue/iosched/writes_starved
done
```

With the above script, whenever you system is booted up, the deadline scheduler will be chosen with attribute `read_expire` at `100ms` and `writes_starved` at `4`. Change the device list as per you requirements.

## Checking disk performance
The current disk performance can be checked using `hdparm`. Install dhparm and query the disk performance.
```
$ sudo apt-get install hdparm
$ sudo hdparm -tT /dev/sda

/dev/sda:
 Timing cached reads:   20482 MB in  1.99 seconds = 10288.89 MB/sec
 Timing buffered disk reads: 598 MB in  3.01 seconds = 198.69 MB/sec
```
`hdparm` can be used to query each disk partition as well.

[Further Reading](https://cromwell-intl.com/open-source/performance-tuning/disks.html)