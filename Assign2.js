var fs = require('fs');

fs.readFile('g20.csv','utf8',function(err,file){
    if(err) throw err;
    var st = String(file).split('\n');
    st.map(function(item){
        console.log(item);
    });
    
});