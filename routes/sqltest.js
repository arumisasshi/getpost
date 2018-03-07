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
router.post('/tanks', function(req,res,next) {
  
/*  
  var param = {"値":"POSTメソッドのリクエストを受け付けました","bodyの値":req.body.card};
    res.header('Content-Type', 'application/json; charset=utf-8')
//      res.send(param);
*/

 // 接続
  connection.connect();
           
  // userdataの取得
  connection.query('SELECT * from tanks;', function (err, rows, fields) {
    if (err) { console.log('err: ' + err); } 
//    connection.query('SHOW COLUMNS FROM tanks;', function (err, rows, fields){
  //    if(err) { console.log('err: ' + err); }
      let p1=req.query.p1*1;
      let p2=req.query.p2*1;
      var output = ' ';
      output = 'hp: ' + rows[p1].hp + 'tankid: ' + rows[p2].tankid;
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
