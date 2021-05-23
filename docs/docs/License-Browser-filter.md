The browse view uses the jQuery data tables element which already brings paging and other features such as column-sorting for free. This view got also extended and now, some more functionality is available:

* change between flat and hierarchical file view
* enter plain text filter terms
* enter filter terms with qualifiers (such as "ext:" for file extensions)
* filter by licenses when clicking the license name in the histogram
* and multiple filter terms at the same time ...

### Details

By default, you see the tree view, e.g., all files and directories which are immediately in the browsed path. The results are ordered by the adj2nest agent, hence directories come first and all files follow in alphabetically order. Directories are displayed in bold font. 

![tree view](/img/LicenseBrowser/browse_license_filter_tree.png)



You can switch to flat view to see all plain files that are anywhere in the browsed path, e.g., also the files in subpaths. The results are sorted alphabetically hiding the nested structure.
![flat view](/img/LicenseBrowser/browse_license_filter_flat.png)

Any unqualified search filters for files (or directories) starting with this search string. Note that this is case-insensitive.
![flat view](/img/LicenseBrowser/browse_license_filter_any.png)

This is equivalent to a search with the qualifier head, e.g., **foo** and **head:foo** yield the same selection.
![flat view](/img/LicenseBrowser/browse_license_filter_head.png)

You can use the qualifier **ext** to filter for file extensions. Note that the full extension must match, hence "ext:c" won't find class files.
![flat view](/img/LicenseBrowser/browse_license_filter_ext.png)

Click on the license name in the left table to insert a search term which filters for files where the license is found by scanners.
![flat view](/img/LicenseBrowser/browse_license_filter_scan.png)

The corresponding qualifier for filtering by concluded results is **con**.
![flat view](/img/LicenseBrowser/browse_license_filter_con.png)

Use **open:1** to look for files that still needs to be cleared.
![flat view](/img/LicenseBrowser/browse_license_filter_open.png)

It is also possible to combine filters by separating them with spaces.
![flat view](/img/LicenseBrowser/browse_license_filter_combi.png)