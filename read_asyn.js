var fs = require('fs');
fs.readFile('file1.txt','utf8',function(error,data){
    fs.writeFile('writeme_asyn.txt',data);
});
