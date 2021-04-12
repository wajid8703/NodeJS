var http = require('http');
var url = require('url');
var fs = require('fs');
var formidable = require('formidable');
var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

http.createServer(function (req, res) {
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
  }
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