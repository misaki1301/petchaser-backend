let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let personController = require('../controllers/personController');
let reportController = require('../controllers/reportController');
/* POST to Login Users*/
router.post('/login', userController.loginUser);

/* GET users list */
router.get('/user', userController.getUsers);
/* POST a new User. */
router.post('/user',userController.createUser);

/* GET person list */
router.get('/person', personController.getPersons);
/* POST a new Person */
router.post('/person', personController.createPerson);


/* GET report list */
router.get('/report', reportController.getReports);
/* POST a new REport */
router.post('/report', reportController.createReport);
module.exports = router;
