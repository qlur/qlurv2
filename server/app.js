const express = require('express');
const mysql = require('mysql');


var connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'laravel'
    }
);


connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("dB connected.")
    }
});

const app = express(); 



app.get('/api/publishers',(req,res)=>{
    let sql = 'SELECT * FROM publishers';
    connection.query(sql,(err,result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.listen('3001', () => {
    console.log("Server running on port 3001.")
});
