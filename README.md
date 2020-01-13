CLI based scripts to automate formatting of lists of SKUS, info, etc

Istallation:
After installing dependencies, in root dir run 'npm install -g ./' (may have to run as sudo)

Examples:
Once installed, run 'sku test' or 'sku -tst' from any variable and the terminal will run the script assocaited with that CLI command.

Help:
By default, commander auto generates a --help option based off the names/descriptions, etc. run 'sku help'

Current Commands:
'sku ssp': Takes a long string of SKUS (like '11 22 33 44 55 66 77 88 99') and will break them into lines of N-length, and can add a prefix like 'medi add' to each line. Useful to break a long list of SKUs into easily copied lines. NOTE: Line breaks mess this up so ensure that you SKU string is all one line!

Primary controller for commands is ./bin/index.js which will pull funcs from files within ./lib