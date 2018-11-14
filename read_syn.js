var fs = require('fs');
var readme  = fs.readFileSync('file1.txt','utf8');
fs.writeFileSync('writeme_syn.txt',readme);