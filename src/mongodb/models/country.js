const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Country Schema
const CountrySchema = new Schema({
   countryname:{
    type: String,
    required:[true, 'Country is Required']
  },
   countrycode:{
     type: String,
     required:[true, 'Country Code is Required']
   },
   isocode:{
     type:String,
     required:[true, 'isocode is Required']
   }
});

//Model
const Country = mongoose.model('country', CountrySchema);
//Export the Schema so you can use it in other files in this project
module.exports = Country;
// body...
// Instance a model
