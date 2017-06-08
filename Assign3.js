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
    var st = line.split(',');
    if(c==1){
        st.map(function(item){
            dataHeader.push(item);
            data[item] = [];
            //console.log(item);
        });
    }else{
        st.map(function(item,index){

            data[dataHeader[index]].push(item);
           
        });
    }

  console.log(data);
});




