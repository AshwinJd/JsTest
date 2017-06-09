const readline = require('readline');
const fs = require('fs');
// var jsonfile = require('jsonfile');
const rl = readline.createInterface({
  input: fs.createReadStream('g20.csv'),
//   output: process.stdout
});
var file = "data.json";

extract(rl);
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
                
                //console.log(item);
            });
        }else{
            temp = new Object();
            st.map(function(item,index){
                if(index!=0){
                    temp[dataHeader[index]] = Number(item);
                    // console.log(item);
                }else{
                    temp[dataHeader[index]] = item
                    // console.log(item);
                }
                
                        
            });
        data.push(temp);

        //    console.log(temp);
        // fs.write(fd, temp);
        }


    //   console.log(data[0]);
    }).on('close',function(){
        // var final = {}
        // data.map(function(item){
        //   final[obj[index]] = item;  
        // })
        // console.log(JSON.stringify(data));
        fs.writeFile('data.json',JSON.stringify(data) , (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        });
        
    });
        // rl.close(writeData(data))
    
    

}









