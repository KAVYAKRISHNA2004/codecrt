var express=require('express');
var app=express();
app.use(express.static('public'));
app.get('/index.html',function (req,res){
  res.sendFile(__dirname+"/"+"index.html");
})
app.get('/get_example2',function (req,res){
  res.send('<p>FirstName: '+ req.query['firstname']+'</p> <p>LastName:'+req.query['lastname']+'</p><p>Password:'+req.query['password']+'</p><p>About You: '+req.query['aboutyou']+ '</p>'); })
  var server=app.listen(8000,function(){
    var host=server.address().address
    var port=server.address().port
    console.log("Example app listening at http://%s:%s",host,port)
})


