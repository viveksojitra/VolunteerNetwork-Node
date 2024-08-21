const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controller');

router.get('/',controllers.defaultController);
router.post('/addVolunteer', controllers.addVolunteerController);
router.get('/editVolunteer/:id', controllers.editVolunteerController);
router.post('/updateVolunteer/:id', controllers.updateVolunteerController);
router.get('/deleteVolunteer/:id', controllers.deleteVolunteerController);

module.exports = router;