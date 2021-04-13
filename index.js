var http = require('http');
var url = require('url');
var fs = require('fs');
// var formidable = require('formidable');
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

http.createServer(function (req, res) {

var connectHandler =  function connected(){
	console.log("connection successful");

	eventEmitter.emit('data_received');
}
var listener2 = function(){
	console.log('listener2');
}
eventEmitter.on('connection', connectHandler);
eventEmitter.addListener('connection', listener2);
eventEmitter.on('data_received', function(){
	console.log('data data_received');
});

//eventEmitter.emit('connection');
console.log( __dirname );
console.log( __filename );
// Now call above function after 2 seconds
// setTimeout(myEventHandler, 6000);
// Now call above function after 2 seconds and it will repeat after each 2 sec
// setInterval(myEventHandler, 2000);
console.log("program end");
/*
	fs.readFile('test.html', function(err, data){
		if(err){
			return console.error(err);
		}
		console.log(data.toString());
		console.log("Program End");
	});
	*/
/*	
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.uploadDir="G:/NodeJS/";
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      var newpath = "G:/NodeJS/"+files.filetoupload.name;
      // fs.renameSync(oldpath, newpath);
      // fs.rename(oldpath, newpath, function (err) {
      //   if (err) throw err;
         res.write('File uploaded and moved!');
         res.end();
      // });
  });
  } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }*/
}).listen(8080);
/*
http.createServer(function (req, res) {
 var q  =  url.parse(req.url, true);
 var filename = "." + q.pathname;
 //Assign the event handler to an event:
eventEmitter.on('testing', myEventHandler);
//Fire the 'scream' event:
eventEmitter.emit('testing');

 // fs.readFile(filename, function(err, data){
 // 	if(err){
 // 		res.writeHead(404, {'Content-Type': 'text/html'});
 // 		return res.end('404 error');
 // 	}
 // 	res.writeHead(200, {'Content-Type': 'text/html'});
 // 	res.write(data);
 // 	return res.end();
 // });

}).listen(8080);
*/
