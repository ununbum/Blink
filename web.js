const express = require('express')
const app = express()
const fs = require('fs')
app.get('/', (req, res) => res.send('Hello World!'))

var seq = 0
var i=0
var contact="There is No Data in server"

app.get('/update',function(req,res){
	fs.appendFile('log.txt',JSON.stringify(req.query)+'\n',function(err){
		if(err) throw err
		//console.log("%j",req.query)
		res.end("Got "+String(seq++) + " " +JSON.stringify(req.query))
	});
})

var str
var cnt
app.get('/get',function(req,res){
	fs.readFile('log.txt','utf8',function(err,data){
		if(data!=="")
		{	
		contact=""
		cnt = req.query
		str=data.split('\n')
		/*
		if(Object.keys(cnt).length==0){
			cnt = str.length
		}*/
		if(JSON.stringify(cnt)==="{}")
		{
			cnt.count = str.length-1
		}
		for(i=0;i<Number(cnt.count);i++)
		{	
			contact = contact + JSON.parse(str[i]).api_key+","+JSON.parse(str[i]).field+'\n'
		}
		}
		res.end(contact)
});
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
