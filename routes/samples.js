var express = require('express');
var router = express.Router();

/* サンプルAPI① 
 * http://localhost:3000/samples にGETメソッドのリクエストを投げると、
  * JSON形式で文字列を返す。
   */
   router.get('/', function(req, res, next) {
     var param = {"値":"これはサンプルAPIです"};
       res.header('Content-Type', 'application/json; charset=utf-8')
         res.send(param);
         });

         /* サンプルAPI② 
          * http://localhost:3000/samples/hello にGETメソッドのリクエストを投げると、
           * JSON形式で文字列を返す。
            */
           router.get('/hello/:place', function (req, res, next) {
            // var param = {"result":"Hello "+ req.params.place + " !"};      // レスポンスで返す値。JSON形式。
               var param = {"result":"Hello "+ req.params.place + " !","shop name":req.query.shop};  
               res.header('Content-Type', 'application/json; charset=utf-8')  // 「レスポンスはJSON形式で返すよ」の意味
                 res.send(param);                                               // 「レスポンス送るよ」の意味
                 });

                  module.exports = router;
