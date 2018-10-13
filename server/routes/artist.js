const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const passport = require('passport');
const uploadCloud = require('../config/cloudinary.js');
const { ensureAuthenticated } = require('../middlewares/authentication');
const Show = require('../models/Show');



router.get('/musicos', (req, res, next) => {
  User.find()
    .then(users => {
      res.status(200).json(users)
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

// router.get(`/profile`, (req, res, next) => {
//   res.status(200).json({user:req.user});

//   })


// router.post('/profile', uploadCloud.single('picture'), (req, res, next) => {
//     const picPath = req.file ? req.file.url : "http://res.cloudinary.com/dz4mjhdbf/image/upload/v1537961966/folder-name/placeholder.jpg.jpg"
//   const picName = req.file ? req.file.originalname : "placeholder"
//   const newShow = new Show({
//     picPath,
//     picName
//   })
//   newShow.save()
//   .then(() => {
//             res.json({
//               success: true,
//               pictureUrl: req.file.url
//             })
//           })

//   });



router.get("/profile/:id", (req, res, next) => {
  console.log(req.session, 'entra')
  User.findById({ _id: req.params.id })
    .then(users => {
      res.status(200).json(users)
    })
})



  router.post('/profile/:id/edit',ensureAuthenticated, (req, res, next) => {
    console.log("entroooooooo123453");
    let {id} =req.user;
    console.log({id})
    const { name, email, username, genero} = req.body;
    // const picProfilePath = req.file ? req.file.url : "http://res.cloudinary.com/dz4mjhdbf/image/upload/v1537961966/folder-name/placeholder.jpg.jpg"
    // const picProfileName = req.file ? req.file.originalname : "placeholder"
    User.findByIdAndUpdate ( id, { $set: { name, email, username, genero}})
    .then((data) => {
      res.status(200).json(data)
    })
   
    .catch(next)
  });


  

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
  
    const picProfilePath = req.file ? req.file.url : "http://res.cloudinary.com/dz4mjhdbf/image/upload/v1537961966/folder-name/placeholder.jpg.jpg"
    const picProfileName = req.file ? req.file.originalname : "placeholder"
  
    const newShow = new Show({
      title,
      user,
      day,
      month,
      hour,
      picProfilePath,
      picProfileName,
      description,
      genero,
      
    //   location: { 
    //     type: "Point",
    //     coordinates: [Number(latitude), Number(longitude)]
    //   }
    })
    newShow.save()
    .then(show =>{
        res.status(200).json(show)
    })
});

router.post(("/newvideo", (res, req, next) => {
  User.findByIdAndUpdate(req.user._id, { $push: { addVideo: req.body.newUrl } }, { new: true })
    .then(user => res.json({ videos: user.addVideo }))
}))

module.exports = router;