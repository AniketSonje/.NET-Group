const { query } = require('express');
const express = require('express');
const mysql = require('mysql');

//create connection 
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "nodemysql"
});



//connect
db.connect((err) => {
    if(err){
        throw err;
//        console.log("");
        }
        console.log('MySQL connected');
})

const app = express();

//create DB
app.get('/createdb', (req,resp) => {
    let sql ='CREATE DATABASE nodemysql';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        console.log('Database Created');   
    });
        
});

//create table
app.get('/createpoststable',(req,resp) => {
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT,title VARCHAR(255),body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql,(err,result) =>{
        if(err) throw err;
        console.log(result);
        resp.send('Posts table created');
    });

});

//Insert post 1
app.get('/addpost1',(req,resp) => {
    let post = {title:'Post One',body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send('Post 1 added...');
    });
});

//Insert post 2
app.get('/addpost2',(req,resp) => {
    let post = {title:'Post Two',body:'This is post number Two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = db.query(sql, post, (err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send('Post 2 added...');
    });
});

//Select Posts
app.get('/getposts',(req,resp) => {
    let sql = 'Select * from posts';
    let query = db.query(sql,(err,results) => {
        if(err) throw err;
        console.log(results);
        resp.send('posts fetched');
    });
});

//Select single Post
app.get('/getpost/:id',(req,resp) => {
    let sql = `Select * from posts WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send('post fetched');
    });
});

// Update psot
app.get('/updatepost/:id',(req,resp) => {
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send('post Updated...');
    });
});

// Delete psot
app.get('/deletepost/:id',(req,resp) => {
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err,result) => {
        if(err) throw err;
        console.log(result);
        resp.send('post Deleted...');
    });
});



app.get('/',function(req,resp) {
    resp.send("Hello, This is Fucking Awesome");
})

app.listen(3000);
console.log('server is running on port 3000');

// npm install nodemon
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'