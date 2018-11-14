var fs = require('fs');
//reading from the file
 var getData = new Promise(function(response,reject)
 {        
      fs.readFile('file1.txt','utf8',function(err,contents){response(contents);});
 });
//writting into new file
 getData.then((readme)=>{fs.writeFile('write_file1.txt',readme ,(err,data)=>{console.log('write_ile1 is created');})});

 //reading from another file
 var getData2 = new Promise(function(response,reject)
 {        
      fs.readFile('t1.txt','utf8',function(err,contents){response(contents);});
 });
//writting into a new file
 getData2.then((readme)=>{fs.writeFile('write_t2.txt',readme ,(err,data)=>{console.log('write_t2 is created');})});



 