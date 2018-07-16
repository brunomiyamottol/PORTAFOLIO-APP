const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Country Schema
const ManufacturerSchema = new Schema({
   country_id:{
    type: String,
    required:[true, 'Manufacturer Code is Required']
  },
   manufacturercode:{
     type: String,
     required:[true, 'Manufacturer Code is Required']
   },
   manufacturername:{
     type:String,
     required:[true, 'manufacturername is Required']
   }
});

//Model
const Manufacturer = mongoose.model('manufacturer', ManufacturerSchema);
//Export the Schema so you can use it in other files in this project
module.exports = Manufacturer;
// body...
// Instance a model
