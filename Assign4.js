const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: fs.createReadStream('g20.csv')
});

var data = [];

var c = 0;
// var k = 0;
var temp;
var dataHeader = [];

rl.on('line', (line) => {
    c++;
    line = line.replace(/"/g, "");
    var st = line.split(',');
    if(c==1){
        st.map(function(item){
            dataHeader.push(item);
            
            //console.log(item);
        });
    }else{
        temp = new Object();
        st.map(function(item,index){
            // console.log(item);
            if(index!=0){
                temp[dataHeader[index]] = Number(item);
            }else{
            temp[dataHeader[index]] = item;
            }
                       
        });
        data.push(temp);
    }

     console.log(data[0]);
});


