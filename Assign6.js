const fs = require('fs');
const readline = require('readline');


fs.access('g20.csv', fs.constants.R_OK | fs.constants.W_OK, (err) => {
  if(err)
  console.log('Cant access');
  else{
    console.log('Its Readable');
    var rl = readline.createInterface({
        input: fs.createReadStream('g20.csv'),
    });
    extract(rl);
  }
  
});
var file = "data.json";


function extract(rl){
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
        fs.writeFile('data.json',JSON.stringify(data) , (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
        
    });
}









