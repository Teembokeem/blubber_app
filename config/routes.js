var express = require('express');
var router = express.Router();


//Controllers
var usersController = require('../controllers/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/users', usersController.index);


module.exports = router;

