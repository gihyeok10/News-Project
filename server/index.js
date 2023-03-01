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

app.post('/userInfo2',(req,res)=> {
  const {id} = req.body;
  db.query("SELECT* from user WHERE id =?;",[id],(err,result)=>{
    res.send(result)
  })
})

app.post('/changePassword',(req,res)=> {
  const {password,id} = req.body;
  db.query("UPDATE user SET password = ? WHERE id = ?;",[password,id],(err,result)=>{
    res.send(result)
  })
})

app.post('/changeEmail',(req,res)=> {
  const {email,id} = req.body;
  db.query("UPDATE user SET email = ? WHERE id = ?;",[email,id],(err,result)=>{
    res.send(result)
  })
})

app.post('/checkEmail2',(req,res)=> {
  const {email} = req.body;
  db.query("select count(*) as 'cnt' from user where email =? ",[email],(err,result) => {
    res.send(result);
  })
})

//글쓰기 테이블
app.post("/writeComment", (req, res) => {
  const {user_id,title,comment,date} = req.body;
  db.query("INSERT INTO comment (user_id,title,comment,date) VALUES (?,?,?,?)", [
    user_id,title,comment,date
  ], (err,result)=> {
    if(err){
        console.log(err)
    }else{
        res.send("Success")
    }
  });
});


app.post('/title',(req,res)=> {
  const {title} = req.body;
  db.query("SELECT* from comment WHERE title =?;",[title],(err,result)=>{
    res.send(result)
  })
})


app.post('/checkTitle',(req,res)=> {
  const {title} = req.body;
  db.query("select count(*) as 'cnt' from mood where title =? ",[title],(err,result) => {
    res.send(result);
  })
})

app.post("/createMood", (req, res) => {
  const {title,mood} = req.body;
  const go = 1
  db.query(`INSERT INTO mood (title,angry,great,notWant,fan) VALUES (?,0,0,0,0)`, [
    title,go
  ], (err,result)=> {
    if(err){
        console.log(err)
    }else{
        res.send("Success")
    }
  });
});


app.post('/countMood',(req,res)=> {
  const {title,mood} = req.body;
  db.query(`UPDATE mood SET ${mood} = ${mood}+1 WHERE title = ?;`,[title],(err,result)=>{
    res.send(result)
  })
})

app.post('/showMood',(req,res)=> {
  const {title} = req.body;
  db.query("SELECT* from mood WHERE title =?;",[title],(err,result)=>{
    res.send(result)
  })
})


app.post('/showWriteInfo',(req,res)=> {
  const {user_id} = req.body;
  console.log(user_id)
  db.query("SELECT* from comment WHERE user_id =?;",[user_id],(err,result)=>{
    res.send(result)
  })
})

app.post('/deleteComment',(req,res)=> {
  const {id} = req.body;
  db.query(`Delete from comment where id = ?;`,[id],(err,result)=>{
    res.send(result)
  })
})
app.listen(PORT, () => {
    console.log("서버 돌리는중..");
  });
  