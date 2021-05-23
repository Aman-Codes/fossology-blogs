# The Monk bulk scan is a way to conclude licenses based on text snippets contained in a file

The license events are made if the entered text is matched to 100% (Some tokens like # // /* ... do not need to be matched). 
From these events a decision is made if it can be made without conflicts or the 'ignoreConflicts' option is checked.

A typical use case would be to remove a license finding hint like 'See file' and to replace it with the correct license.
The text used for that can just be copied out of the file into the bulk search box. 
If you wish to remove comments you can do it manually, as Monk does ignore them anyway.

We have made 2 Bulk scans already with a copy pasted text snippet on the left
![Before the scan](https://raw.githubusercontent.com/wiki/fossology/fossology/img/Bulk/BulkScan4.png)
To have a clean bulk scan history we have removed the '#' chars at the line start
![Scan again without comment characters](https://raw.githubusercontent.com/wiki/fossology/fossology/img/Bulk/BulkScan5.png)
... and it works just as well
![Result](https://raw.githubusercontent.com/wiki/fossology/fossology/img/Bulk/BulkScan6.png)
