var Seneca = require("seneca")();

Seneca.add({"test":"meow"},function(msg,respond){
  console.log("msg",msg);
  respond(null,{message:"moo"});
})

Seneca.listen({port:3000});
