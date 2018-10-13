const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const showSchema = new Schema ({
title: String,
day: String,
month:String,
year: String,
hour: String,
user: {type : Schema.Types.ObjectId, ref: 'User'},
description: String,
genero:  {type: String,
    enum:['Clasica','Blues','Jazz', 'R&B', 'Rock and roll', 'Gospel', 'Soul', 'Rock','Metal','Country','Funk','Disco','House','Techno','Pop','Ska','Reggae','Hip Hop','Drum and Bass','Garage','Flamenco','Salsa','Reggaeton','Instrumental','Otros']},
location: { type: { type: String }, coordinates: [Number] },



},
{ 
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
})


//serviceSchema.set('timestamps', true);
const Show = mongoose.model('Show', showSchema)

module.exports = Show;