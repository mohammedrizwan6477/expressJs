const express = require('express');
const { getUser,addUser } = require('../controllers/userController');
//routes router object
const router = express.Router();

//routes
router.get('/',getUser)
router.post('/add-user',addUser)

//export routes
module.exports = router