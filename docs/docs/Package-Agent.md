```
./pkgagent -h

Usage: ./pkgagent [options] [file [file [...]]

-i :: initialize the database, then exit.

-v :: verbose (-vv = more verbose)

-c :: Specify the directory for the system configuration.

-C :: run from command line.

file :: if files are rpm package listed, display their package information.

no file :: process data from the scheduler.
```

<!-- <table>
  <tr>
    <td>Purpose</td>
    <td>Cli Tests for Package Agent</td>
  </tr>
  <tr>
    <td>Dependencies</td>
    <td>need debs and rpms available on the system for analysis</td>
  </tr>
</table> -->


| Purpose  | Cli Tests for Package Agent  |
| Dependencies  | need debs and rpms available on the system for analysis |

<!-- <table>
  <tr>
    <td>Step</td>
    <td>Action</td>
    <td>Expected Results</td>
  </tr>
  <tr>
    <td>1.</td>
    <td>./pkgagent -h</td>
    <td>should print useage 1233</td>
  </tr>
  <tr>
    <td>2.</td>
    <td>./pkgagent -C 'file'</td>
    <td>print details of package on stdout 1239</td>
  </tr>
  <tr>
    <td>3.</td>
    <td>./pkgagent -c /tmp/fossology/ -C -v ~markd/public_html/CUnit-2.1.2-7.fc15.src.rpm</td>
    <td>had to use -v, works fine</td>
  </tr>
  <tr>
    <td>4.</td>
    <td>./pkgagent -C <no such file></td>
    <td>indicates file can't be found.</td>
  </tr>
  <tr>
    <td>5.</td>
    <td>./pkgagent -i</td>
    <td>exit code should be 0</td>
  </tr>
  <tr>
    <td>6.</td>
    <td>./pkgagent <no file></td>
    <td>can't test with cli</td>
  </tr>
  <tr>
    <td>7.</td>
    <td>./pkgagent -v and -vv</td>
    <td>compare output, there should be more details. 1251</td>
  </tr>
</table> -->

| Step | Action | Expected Results |
| ---- |------- | ---------------- |
| 1. | ./pkgagent -h | should print useage 1233 |
| 2. | ./pkgagent -C 'file' | print details of package on stdout 1239 |
| 3. | ./pkgagent -c /tmp/fossology/ -C -v ~markd/public_html/CUnit-2.1.2-7.fc15.src.rpm | had to use -v, works fine |
| 4. | `./pkgagent -C <no such file>` | indicates file can't be found. |
| 5. | ./pkgagent -i | exit code should be 0 |
| 6. | `./pkgagent <no file>` | can't test with cli |
| 7. | ./pkgagent -v and -vv | compare output, there should be more details. 1251 |

