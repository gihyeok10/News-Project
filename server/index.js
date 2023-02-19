const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3001;
const cors =require('cors')

app.use(cors())
app.use(express.json())
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "zxcv123",
  database: "UserManger",
});

app.post("/adduser", (req, res) => {
  const {id,name,password,birth,phone_number,email} = req.body;
  db.query("INSERT INTO user (id,name,password,phone_number,email) VALUES (?,?,?,?,?)", [
    id,name,password,phone_number,email
  ], (err,result)=> {
    if(err){
        console.log(err)
    }else{
        res.send("Success")
    }
  });
});


app.post('/selectid',(req,res) => {
  const {id} = req.body;
  db.query("select count(*) as 'cnt' from user where id =?;",[id],(err,result) => {
    res.send(result);
  })
})

app.post('/checkLogin',(req,res) => {
  const {id,password} = req.body;
  db.query("select count(*) as 'cnt' from user where id =? and password = ?;",[id,password],(err,result) => {
    res.send(result);
    
  })
})

app.post('/userInfo',(req,res)=> {
  const {id,password} = req.body;
  db.query("SELECT* from user WHERE id =? and password =?;",[id,password],(err,result)=>{
    res.send(result)
  })
})


app.listen(PORT, () => {
    console.log("서버 돌리는중..");
  });
  