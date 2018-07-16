const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


//#Create Schema and Model#
//Schema

const LogSchema = new Schema({
  creationDate:Date,
  method:String,
  url: String,
  reqParams:String  
});

//Model
const Log = mongoose.model('log', LogSchema);
//Export the Schema so you can use it in other files in this project
module.exports = Log;
// body...
// Instance a model

/*
var m = new Thing;
m.name = 'Statue of Liberty';
m.age = 125;
m.updated = new Date;
m.binary = new Buffer(0);
m.living = false;
m.mixed = { any: { thing: 'i want' } };
m.markModified('mixed');
m._someId = new mongoose.Types.ObjectId;
m.array.push(1);
m.ofString.push("strings!");
m.ofNumber.unshift(1,2,3,4);
m.ofDates.addToSet(new Date);
m.ofBuffer.pop();
m.ofMixed = [1, [], 'three', { four: 5 }];
m.nested.stuff = 'good';
m.save(callback);

*/
