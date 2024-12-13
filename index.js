import express from 'express';
 const app = express();
 const port = 3002;

 app.get('/',(req,res)=>{

  console.log(req.ra);
  res.send("Mahshook");
 });
 app.listen(port,()=>{
  console.log('Server in running at Port: ' + port)
 });
