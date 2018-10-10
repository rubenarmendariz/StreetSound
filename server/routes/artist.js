const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');



router.get('/musicos', (req, res, next) => {
User.find()
.then(users =>{
    res.status(200).json(users)
})

})



module.exports = router;