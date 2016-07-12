var Vorpal = require("vorpal")();
var Seneca = require("seneca")();

var Client = false;

Vorpal.delimiter("seneca explorer > ").show();

Vorpal.command("act <action>","send out an action string and get the return result printed out.").action(function(args,callback){
  Vorpal.log("sending out",args.action);
  if (Client) {
    Client.act(args.action,function(err,response){
      Vorpal.log("...");
      callback(JSON.stringify(response));
    })
  }
  else {
    callback("Not connected. Use 'connect'");
  }
});

Vorpal.command("connect [host] [port]","connect to a seneca instance").action(function (args,callback) {

  var options = {
    host: args.host || "localhost",
    port: args.port || 3000
  }

  Client = Seneca.client( options );
  callback();
});

Seneca.ready(function(){
  Vorpal.log("Seneca is ready.");
});
