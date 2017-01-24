var server = require("ws").Server;
var wss = new server({port:3000})
wss.on("connection",function(ws){
	ws.on("message",function(message){
			if(message == exit)
	}else
	{
		wss.clients.forEach(function(client){
			client.send()
		})
	}
})
	ws.send("welcome to cyber chat")
})
