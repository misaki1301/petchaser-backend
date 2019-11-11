var express = require('express');
var router = express.Router();
var petController = require('../controllers/petController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pets', petController.getPets);

router.post('/pet', petController.createPet);

module.exports = router;
