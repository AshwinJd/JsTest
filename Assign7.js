var log4js = require('log4js');
const fs = require('fs');
const readline = require('readline');
//console log is loaded by default, so you won't normally need to do this 
//log4js.loadAppender('console'); 
log4js.loadAppender('file');
//log4js.addAppender(log4js.appenders.console()); 
log4js.addAppender(log4js.appenders.file('logs/Munging.log'), 'Munging');
 

 
var logger = log4js.getLogger('Munging');


var file = "data.json";

// extract(rl);
module.exports = function extract(rl,done){
    var data = [];

    var c = 0;
    var temp;
    var dataHeader = [];

    rl.on('line', (line) => {
        c++;
        line = line.replace(/"/g, "");
        var st = line.split(',');
        if(c==1){
            st.map(function(item){
                dataHeader.push(item);
                
            });
        }else{
            temp = new Object();
            st.map(function(item,index){
                if(index!=0){
                    temp[dataHeader[index]] = Number(item);
                }else{
                    temp[dataHeader[index]] = item
                }
            });
        data.push(temp);
        }


    }).on('close',function(){
        logger.info(typeof(data));
        // console.log("hee;o")
        fs.writeFile('data.json',JSON.stringify(data) , (err) => {
        if (err) throw err;
        logger.info('The File has been written.');
        // console.log("sdfsd",data);
    }); 

    // return data;
      done(null,data);  
        
});
return "hellowworld";

}
