var express = require('express');
var router = express.Router();

// requireの設定
const mysql = require('mysql');

// MySQLとのコネクションの作成
const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : 'rgte3325',
  database: 'tanks'
});
router.get('/tanks/', function(req,res) {
  // 接続
  connection.connect();
           
  // userdataの取得
  connection.query('SELECT * from tanks;', function (err, rows, fields) {
    if (err) { console.log('err: ' + err); } 
//    connection.query('SHOW COLUMNS FROM tanks;', function (err, rows, fields){
  //    if(err) { console.log('err: ' + err); }
      var output = ' ';
      output = 'name: ' + rows[0].name + 'tankid: ' + rows[0].tankid;
      res.send(output);
//    });
  });
/*
  // userdataのカラムを取得
  connection.query('SHOW COLUMNS FROM tanks;', function (err, rows, fields) {
    if (err) { console.log('err: ' + err); }
      
    res.send(rows[0].Field);
    res.send(rows[1].Field);
  });
  */
  
  // 接続終了
  connection.end();
});

module.exports = router;
