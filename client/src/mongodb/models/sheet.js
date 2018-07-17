const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

// Country Schema
const SheetSchema = new Schema(
{
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
  sheetcode_obj:{
     type:Object,
       v:{
        type:Object,
          i:{
            type:String
          },
          w:{
            type:Number
            },
          h:{
            type:Number
            }
          },
       p:{
        type:Array,
         i:{
          type:String
           },
         d:{
          type:String
           },
         x:{
          type:Number
           },
         y:{
          type:Number
           },
         has3D:{
            type:Boolean
           },
          pos3D:{
            type:Object,
            x:{
              type:Number
            },
            y:{
              type:Number
            },
            z:{
              type:Number
            }
           }
          },
  groups3D:{
    type:Array,
           type:{
             type:Number
           },
           count:{
           Type:Number
           },
            ids:{
            type:Array,
          }
        },
    sheetcode:{
      type: String
         },
    sheetId:{
    type: String
           },
    subsheetId:{
    type: String
      }
    }
});

//Model
const Sheet = mongoose.model('sheet', SheetSchema);
//Export the Schema so you can use it in other files in this project
module.exports = Sheet;
// body...
// Instance a model
