const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  password: String,
  email: String,
  genero: {type: String,
              enum:['Clasica','Blues','Jazz', 'R&B', 'Rock and roll', 'Gospel', 'Soul', 'Rock','Metal','Country','Funk','Disco','House','Techno','Pop','Ska','Reggae','Hip Hop','Drum and Bass','Garage','Flamenco','Salsa','Reggaeton','Instrumental','Otros']},
  profilePicture: String,
  isArtist: {type: Boolean, default: false},
  addPhoto: String,
  addVideo: String            
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
