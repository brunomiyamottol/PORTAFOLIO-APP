const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Country Schema
const ModelSchema = new Schema({
   manufacturer_id:{
   type: String,
   required:[true, 'Model Code is Required']
 },
   country_id:{
    type: String,
    required:[true, 'Model Code is Required']
 },
  modelcode:{
     type: String,
     required:[true, 'Model Code is Required']
   },
   meta_obj:{
     type:Object
     //required:[true, 'meta_obj is Required']
   },
   sm_obj:{
     type:Object
     //required:[true, 'sm_obj is Required']
   },
   vehicle_obj:{
     type:Object
     //required:[true, 'meta_obj is Required']
   }
});

//Model
const Model = mongoose.model('model', ModelSchema);
//Export the Schema so you can use it in other files in this project
module.exports = Model;
// body...
// Instance a model
