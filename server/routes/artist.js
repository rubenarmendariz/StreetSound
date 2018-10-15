const express = require('express');
const router = express.Router();
const User = require('../models/User');
const uploadCloud = require('../config/cloudinary.js');
const { ensureAuthenticated } = require('../middlewares/authentication');
const Show = require('../models/Show');


//BUSCADOR DE MUSICOS

// router.get('/musicos', (req, res, next) => {
//   User.find({isArtist:true})
//     .then(users => {
//       res.status(200).json(users)
//     })

// })

// router.get('/musicos', (req, res, next) => {
//   User.find()
//   //Service.find()
//   .then( users =>{
//     Show.find()
//     .then(shows => {
  
//     res.status(200).json(users, shows)
//     //console.log(services)
//     })
//   })
// })

router.get('/musicos', (req, res, next) => {
  Show.find()
  .populate("user", "username")
    .then(shows => {
      console.log(show)
      res.status(200).json(shows)
    })

})


router.post('/profile', uploadCloud.single('photo'), (req, res, next) => {
  console.log(req.file)
  User.findOneAndUpdate({}, { pictureUrl: req.file.url })

    .then(() => {
      res.json({
        success: true,
        pictureUrl: req.file.url
      })
    })
});



//EDICION DE PERFIL

router.get("/profile/:id", (req, res, next) => {
  console.log(req.session, 'entra')

  console.log(req.params.id, 'entra')
  User.findById({ _id: req.params.id })
    .then(users => {
      res.status(200).json(users)
    })
})

router.post('/profile/:id/edit', ensureAuthenticated, (req, res, next) => {
  console.log("entroooooooo123453");
  let { id } = req.user;
  console.log({ id })
  const { name, email, username, genero } = req.body;
  // const picProfilePath = req.file ? req.file.url : "http://res.cloudinary.com/dz4mjhdbf/image/upload/v1537961966/folder-name/placeholder.jpg.jpg"
  // const picProfileName = req.file ? req.file.originalname : "placeholder"
  User.findByIdAndUpdate(id, { $set: { name, email, username, genero } })
    .then((data) => {
      res.status(200).json(data)
    })

    .catch(next)
});



//CREAR SHOWS

router.post('/show-creation', uploadCloud.single('photo'), (req, res, next) => {
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

  const user = req.user.id;
  const PicProfilePath = req.file ? req.file.url : "http://res.cloudinary.com/dz4mjhdbf/image/upload/v1537961966/folder-name/placeholder.jpg.jpg"
  const PicProfileName = req.file ? req.file.originalname : "placeholder"

  const newShow = new Show({
    title,
    user,
    day,
    month,
    hour,
    PicProfilePath,
    PicProfileName,
    description,
    genero,
    location: {
      type: "Point",
      coordinates: [Number(latitude), Number(longitude)]
    }
  })
  newShow.save()
    .then(show => {
      res.status(200).json(show)
    })
});



//AÑADIR FOTO A BASE DE DATOS

router.post('/first-user/pictures/edit', uploadCloud.single('PicProfilePath'), (req, res, next) => {
  console.log("entraaaaaa");
  console.log(req.user._id);
  console.log(req.file.url);
  let id = req.user._id
  User.findByIdAndUpdate(id, { PicProfilePath: req.file.url })
  // console.log(user)
    .then(() => 
    {
      res.json({
        success: true,
        PicProfilePath: req.file.url
      })
    })
});


module.exports = router;