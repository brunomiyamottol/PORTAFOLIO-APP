const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Country Schema
const IreSchema = new Schema({
  model_id:{
   type: String
   },
  modelcode:{
   type: String
   },
  manufacturer_id:{
   type: String
   },
  manufacturercode:{
   type: String
   },
  country_id:{
   type: String
   },
  countrycode:{
   type: String
   },
    irecode:{
    type: String
 }
 /*
   IRE_obj:{
     type:Object,
       IREData:{
         type:Array,
           PartId:{
             type:String
            },
            AccessCoefficient:{
            type:String
           },
             GeoCoefficient: {
               type:String
             },
             SurfaceSqm:{
               type:String
             },
            PartItems:{
              type:Array,
              GuideNumber:{
                type:String
              },
              PartName:{
                type:String
              },
              Material:{
                type:String
              },
              Side:{
                type:Number
                  }
                },
              PartLines:{
                  type:Array,
                  Points:{
                    type:Array,
                    x:{
                      type:Number
                    },
                    y:{
                      type:Number
                    },
                    type:{
                      type:String
                     }
                    }
                   }
                 },
                }
               }
             }
*/
          });

//Model
const Ire = mongoose.model('ire', IreSchema);
//Export the Schema so you can use it in other files in this project
module.exports = Ire;
// body...
// Instance a model
