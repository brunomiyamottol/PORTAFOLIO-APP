const mongoose = require('mongoose');
const Schema  = mongoose.Schema;


//#Create Schema and Model#
//Schema

const UserSchema = new Schema({
  created:{
    type: Date,
    default: Date.now,
    required:[true, 'Created Date is Mandatory']
    },
  name:{
    type:String,
    required:[true, 'Name is Mandatory']
  },
  lastname:{
    type:String,
    required:[true, 'Lastname is Mandatory']
  },
  middlename:{
    type:String,
  },
  sufix:String,
  dateofbirth:Date,
  loginname:{
    type:String,
    required:[true, 'Login Name is Mandatory']
  },
  countryofbirth: String,
  countryofresidence:String,
  email:{
    type:String,
    required:[true, 'Lastname is Mandatory']
  },
  living:{
  type:Boolean,
  default:true
  },
  maritalstatus:String,
  binary:  Buffer,
  doc: Buffer,
  lastupdated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 999},
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  array:      [],
  ofString:   [String],
  ofNumber:   [Number],
  ofDates:    [Date],
  ofBuffer:   [Buffer],
  ofBoolean:  [Boolean],
  ofMixed:    [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays:   [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
          stuff: { type: String, lowercase: true, trim: true }
          }
//Add in Geo Location

});

//Model
const User = mongoose.model('user', UserSchema);
//Export the Schema so you can use it in other files in this project
module.exports = User;
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
