const express = require('express');
const { getUser,addUser,createUser } = require('../controllers/userController');
//routes router object
const router = express.Router();

//routes
router.get('/',getUser)
router.post('/add-user',addUser)

// New User Routes
router.post('/create-user',createUser)

//export routes
module.exports = router