let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let personController = require('../controllers/personController');

/* POST to Login Users*/
router.post('/login', userController.loginUser);

/* GET users listing. */
router.get('/user', userController.getUsers);
/* POST a new User. */
router.post('/user',userController.createUser);

/* GET person listing */
router.get('/person', personController.getPersons);
/* POST a new Person */

router.post('/person', personController.createPerson);

module.exports = router;
