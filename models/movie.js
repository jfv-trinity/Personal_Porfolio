/* 
File name: movie.js
Student Name: Joseph Volpe
StudentID: 301118010
Date: 10/8/2020
*/

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let Model = mongoose.model;

let MovieSchema = new Schema({
    title:  String,
    description: String,
    genre: String,
    year: String,
    rating: String
},
{
    collection: "movies"
});

module.exports.Model = Model("Movie", MovieSchema);

