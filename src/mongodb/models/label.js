const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Country Schema
const LabelSchema = new Schema({
   model_id:{
   type: String
 },
    labelcode:{
    type: String
 }
});

//Model
const Label = mongoose.model('label', LabelSchema);
//Export the Schema so you can use it in other files in this project
module.exports = Label;
// body...
// Instance a model
