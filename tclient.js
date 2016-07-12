var Seneca = require("seneca")().client({host:"localhost",port:3000});


Seneca.ready(function(){
  Seneca.act({"test":"meow"},function(err,msg){
    console.log("client handler",err,msg);
    Seneca.close();
  });
})
