const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const Show = require('../models/Show')
const uploadCloud = require('../config/cloudinary.js');


const login = (req, user) => {
  return new Promise((resolve,reject) => {
    req.login(user, err => {
      console.log('req.login ')
      console.log(user)

      
      if(err) {
        reject(new Error('Something went wrong'))
      }else{
        resolve(user);
      }
    })
  })
}

router.post('/show-creation', uploadCloud.single('photo'), (req, res, next) => {
  console.log(req.body)

  const {
    title,
    day,
    month,
    hour,
    latitude,
    longitude,
    description,
    genero,
  } = req.body;
  console.log(latitude, longitude)
  const user = req.user.id;

  const picPath = req.file ? req.file.url : "http://res.cloudinary.com/dz4mjhdbf/image/upload/v1537961966/folder-name/placeholder.jpg.jpg"
  const picName = req.file ? req.file.originalname : "placeholder"

  const newShow = new Show({
    title,
    user,
    day,
    month,
    hour,
    picPath,
    picName,
    description,
    genero,
    
    location: { 
      type: "Point",
      coordinates: [Number(latitude), Number(longitude)]
    }
  })
  newShow.save()
  .then(show =>{
      res.status(200).json(users)
  })
    .catch(error => {
      console.log(error)
    })
});



// SIGNUP
router.post('/signup', (req, res, next) => {

  const {username, password, email, isArtist } = req.body;
  console.log(isArtist, 'pepeeeee')
  // console.log('username', username)
  // console.log('password', password)

  // Check for non empty user or password
  if (!username || !password || !email){
    next(new Error('You must provide valid credentials'));
  }

  // Check if user exists in DB
  User.findOne({ username })
  .then( foundUser => {
    if (foundUser) throw new Error('Username already exists');

    const salt     = bcrypt.genSaltSync(10);
    const hashPass = bcrypt.hashSync(password, salt);

    return new User({
      username,
      email,
      password: hashPass,
      isArtist
    }).save();
  })
  .then( savedUser => login(req, savedUser)) // Login the user using passport
  .then( user => res.json({status: 'signup & login successfully', user})) // Answer JSON
  .catch(e => next(e));
});


router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, theUser, failureDetails) => {
    
    // Check for errors
    if (err) next(new Error('Something went wrong')); 
    if (!theUser) next(failureDetails)

    // Return user and logged in
    login(req, theUser).then(user => res.status(200).json(req.user));

  })(req, res, next);
});


router.get('/currentuser', (req,res,next) => {
  console.log(req.user)
  if(req.user){
    res.status(200).json(req.user);
  }else{
    next(new Error('Not logged in'))
  }
})


router.get('/logout', (req,res) => {
  req.logout();
  res.status(200).json({message:'logged out'})
});


router.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
})

module.exports = router;