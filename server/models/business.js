let mongoose = require('mongoose');
let Schema = mongoose.Schema; // alias
let Model = mongoose.model; // alias

let BusinessSchema= new Schema({
    name: String,
    number: Number,
    email: String,
},
{
    collection: 'business_contacts'
});

module.exports.Model = Model('Business_contacts', BusinessSchema);