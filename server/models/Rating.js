const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ratingSchema = new Schema({
title : String, 
description : String,
authorId : {type: Schema.Types.ObjectId, ref: 'User'},
destinationComment : {type: Schema.Types.ObjectId, ref: 'User'},
rating: Number

})


const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating