const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


// Country Schema
const DrawsSchema = new Schema({
   model_id:{
   type: String
 },
    drawcode:{
    type: String
 },
   draw_obj:{
     type:Object
     //required:[true, 'meta_obj is Required']
   }
});

//Model
const Draws = mongoose.model('draws', DrawsSchema);
//Export the Schema so you can use it in other files in this project
module.exports = Draws;
// body...
// Instance a model
