let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let BuisnessSchema= new Schema({
    name: String,
    number: Number,
    email: String,
},
{
    collection: 'buisness_contacts'
});

module.exports.Model = Model('Buisness_contacts', BuisnessSchema);