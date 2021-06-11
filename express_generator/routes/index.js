var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const values=["dilshad","abhinand","ziyaf","Achyuth"]

  const person={name:"achyuth",comments:{comment:"sample comment",date:"07-09-2020"}}
  res.render('index', {person});
});

module.exports = router;
