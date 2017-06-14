var assert = require('chai').assert;
var main = require('../file');

describe('extract',function(done){
    it('Should return data of json type',function(done){
        var result;
        main('g20.csv',(err,data)=>{
            result = data
            // console.log(result);
            assert.typeOf(result,'Array');
            done();
        });

        
    })
});