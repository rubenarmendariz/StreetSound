const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const uploadCloud = require('../config/cloudinary.js');



router.get('/musicos', (req, res, next) => {
User.find()
.then(users =>{
    res.status(200).json(users)
})

})

router.post('/musicos', uploadCloud.single('picture'), (req, res, next) => {
    User.findOneAndUpdate({}, { pictureUrl: req.file.url })
      .then(() => {
        res.json({
          success: true,
          pictureUrl: req.file.url
        })
      })
  });
  



module.exports = router;