let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');
let personController = require('../controllers/personController');
let reportController = require('../controllers/reportController');
let rewardController = require('../controllers/rewardController');
let categoryController = require('../controllers/categoryController');

/* POST to Login Users*/
router.post('/login', userController.loginUser);

/* GET users list */
router.get('/user', userController.getUsers);
/* POST a new User + Person. */
router.post('/user',userController.createUser);

/* GET person list */
router.get('/person', personController.getPersons);
/* POST a new Person */
//router.post('/person', personController.createPerson);


/* GET report list */
router.get('/report', reportController.getReports);
/* POST a new REport */
router.post('/report', reportController.createReport);

/* GET reward list */
router.get('/reward', rewardController.getRewards);
router.post('/reward', rewardController.createReward);

/*GET Category list */
router.get('/reward/category', categoryController.getCategories);
/* POST a new category*/
router.post('/reward/category', categoryController.createCategory);

module.exports = router;

