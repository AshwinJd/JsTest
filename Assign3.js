const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('g20.csv')
});

var c = 0;
var dataHeader = [];
var data= {};

rl.on('line', (line) => {
    c++;
    line = line.replace(/"/g, "");
    // console.log(line);
    var st = line.split(',');
    
    if(c==1){
        st.map(function(item){
            dataHeader.push(item);
            data[item] = [];
            //console.log(item);
        });
    }else{
        st.map(function(item,index){

           if(index!=0){
                temp[dataHeader[index]] = Number(item);
            }else{
            temp[dataHeader[index]] = item;
            }
        });
    }
    // console.log(data);

//   console.log(data['"Population (Millions) 2012"'][18]);
});




