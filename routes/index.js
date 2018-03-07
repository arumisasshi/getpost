var express = require('express');
var router = express.Router();

const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database: 'testdatabase'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/add', (req, res) =>{
  let ans = 1*req.query.a + 1*req.query.b;
  res.json({
    "added":ans
  });
});


module.exports = router;
