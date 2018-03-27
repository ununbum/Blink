var express = require('express');
var app = express();
json2csv = require('json2csv').parse;
mysql = require('mysql');
var fs = require('fs');
var connection = mysql.createConnection({
    host: 'localhost',
    user: '20131532',
    password: 'q4246228',
    database: 'mydb'
})
connection.connect();


app.get("/data", function(req, res) {
  console.log("param=" + req.query);

  var qstr = 'select * from sensors ';
  connection.query(qstr, function(err, rows, cols) {
    if (err) {
      throw err;
      res.send('query error: '+ qstr);
      return;
    }

    console.log("Got "+ rows.length +" records");
    html = ""
    for (var i=0; i< rows.length; i++) {
       html += JSON.stringify(rows[i]);
    }
    res.send(html);
  });

});
app.get("/download",function(req,res){
	var qstr = 'select * from sensors ';
	var field = ['id','seq','device','unit','type','value','ip','time'];
	var fields = {field};
	
  connection.query(qstr, function(err, rows, cols) {
    if (err) {
      throw err;
      res.send('query error: '+ qstr);
      return;
    }
	var csv;
	csv=json2csv(rows,fields);	
	fs.writeFileSync('data.csv',csv,function(err){if(err) cosole.log(err);});
  });	
	res.download('data.csv');

});
var server = app.listen(8083, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('listening at http://%s:%s', host, port)
});

