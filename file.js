const fs = require('fs');
var log4js = require('log4js');
const readline = require('readline');
log4js.loadAppender('file');
//log4js.addAppender(log4js.appenders.console()); 
log4js.addAppender(log4js.appenders.file('logs/Munging.log'), 'Munging');

var logger = log4js.getLogger('Munging');
var extract = require('./Assign7');
var file = 'g20.csv';

module.exports = function main(file,done){
    fs.access(file, fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if(err)
    logger.error('Cant access');
    else{
        logger.info('Its Readable');
        var rl = readline.createInterface({
            input: fs.createReadStream('g20.csv'),
        });
        
        extract(rl,(err,data)=>{
                done(null,data);
        });
            console.log("hi");
    //  setTimeout(()=> console.log("hi",extract(rl)), 2000);
       
}

    
    });
    
}

