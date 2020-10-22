let mongoose = require('mongoose');

//create a model class
let user_collectionModel = mongoose.Schema({
    name: String,
    password: String,
    email: String
},
{
    collection: "user_collection"
});

module.exports = mongoose.model('User_collection', user_collectionModel)