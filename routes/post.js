var express = require('express');
var router = express.Router();
 
 /* GET helo page. */

router.get('/post', function(req, res, next) {
  var p1 = req.query.p1;
  var p2 = req.query.p2;
  var msg = p1 == undefined ? "" : p1 + "," + p2;
  res.send('post', 
  {
    title: 'HELO Page',
    msg: msg,
    input: ''
  }
  );
  });
             
/* POST helo page. */
router.post('/post', function(req, res, next) {
  var str = req.body['input1'];
  res.send('post', 
  {
    title: 'HELO Page',
    msg: "you typed: " + str,
    input: str
  }
  );
  });
     
module.exports = router;
