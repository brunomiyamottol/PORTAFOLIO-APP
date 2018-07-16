'use strict'
import mongoose from 'mongoose';
const keys = require('../services/keys');


//-------Specific-Log-------//
// function sLog(req,res,next){
//   console.log(new Date(), req.method, req.url);
//   next();
// };

//----Start--Connect to the Database-----//
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongodb.dbURI1, {
 useMongoClient: true
});


mongoose.connection.once('open', function(){
  console.log('Connected to mongodb from mcontroller to = ' + keys.mongodb.dbURI1);
}).on('error', function(error){
  console.log('Connection error:', error);
});

//mongodb://<dbuser>:<dbpassword>@ds133776.mlab.com:33776/solarisws-axmodel-dev1
/*
//---test-record-insertted//
var logItem = Log({item:'MogoDB Started', updated:new Date, age:'30', doc:new Buffer(0), living:true}).save(function(err){
  if (err) throw err;
  console.log('Log-Entry');
});
//---test-record-insertted-User//
var NewUser= User({name:'MogoDB-WasStarted', lastname:'NodeJS', age:'28', loginname:'MongoDB', living:false, email:'mongo@db.com'}).save(function(err){
  if (err) throw err;
  console.log('Test-User-Created');
});
*/

//Test Country Collection

// var countryItem = Country({countryname:'Mexico', countrycode:'MEX', isocode:'MX'}).save(function(err){
//   if (err) throw err;
//   console.log('Country-Test saved');
// });


// //Test Manufacturer Collection
// var manufacturerItem = Manufacturer({country_id:'5a2c2b60595e30f878cb5231', manufacturercode:'00', manufacturername:'Audi'}).save(function(err){
//   if (err) throw err;
//   console.log('Manufacturer-Test saved');
// });


// //Test Model Collection
// var manufacturerItem = Model({manufacturer_id:'5a2c3124c4974ff8cf92bd2c', country_id:'5a2c2b60595e30f878cb5231',  modelcode:'4A'}).save(function(err){
//   if (err) throw err;
//   console.log('Model-Test saved');
// });


// //Test Draws Collection
// var drawsItem = Draws({model_id:'5a2c33474b5d4ff8fed19b96', drawcode:'348471', draw_obj:''}).save(function(err){
//   if (err) throw err;
//   console.log('Draws-Test saved');
// });

// /*
// //Test IRE Collection
// var ireItem = Ire({model_id:'5a2c33474b5d4ff8fed19b96', irecode:'348471'}).save(function(err){
//   if (err) throw err;
//   console.log('IRE-Test saved');
// });
// */
// /*
// //Test Sheets Collection
// var sheetItem = Sheet({model_id:'5a2c33474b5d4ff8fed19b96', sheetscode:'0'}).save(function(err){
//   if (err) throw err;
//   console.log('Sheets-Test saved');
// });
// */
// /*
// //Test label Collection
// var labelItem = Label({model_id:'5a2c33474b5d4ff8fed19b96', labelcode:'MEX-es'}).save(function(err){
//   if (err) throw err;
//   console.log('Labels-Test saved');
// });
// */


// //Middleware
// module.exports =  function(app){

// app.get('/', sLog,function(req, res){
//   res.render('home');
// })

// /*
// app.get('/countries', sLog, function(req,res){
// //###Get Data From MongoDB and pass it to the view
// Country.find({}, function(err, data){
//  if(err) throw err;
//   res.render('country',{country:data});
//   });
//  });
// */
// /*
//  app.get('/manufacturers', sLog, function(req,res){
//  //###Get Data From MongoDB and pass it to the view
//  Manufacturer.find({}, function(err, data){
//   if(err) throw err;
//    res.render('manufacturers',{manufacturer:data});
//    });
//   });
// */
// /*
//   app.get('/models', sLog, function(req,res){
//   //###Get Data From MongoDB and pass it to the view
//   Model.find({}, function(err, data){
//    if(err) throw err;
//     res.render('models',{model:data});
//     });
//    });
// */
// /*
//    app.get('/models/country/:id/model/:id', sLog, function(request, response){
//      // Now we automatically get the story and element in the request object
//      //###Get Data From MongoDB and pass it to the view
//      Model.find({}, function(err, data){
//       if(err) throw err;
//        res.render('models',{countrycode:data});
//     });
//   });
// */

// /*
//   app.get('/countries/:countrycode/model/:modelcode/labels/:labelscode', sLog, function(req, res){
//     Label.find({}, function(err, data){
//       if(err) throw err;
//       res.render('labels',{
//         countrycode:data,
//         modelcode:data,
//         labelscode:data
//       });
//     });
//   });

// */
// /*
//    app.get('/log', sLog, function(req,res){
//    //###Get Data From MongoDB and pass it to the view
//    Log.find({}, function(err, data){
//     if(err) throw err;
//      res.render('log',{log:data});
//      });
//     });
// */
// /*
//  app.get('/list', function(req,res){
//  //Get Data From MongoDB and pass it to the view
//  List.find({}, function(err, data){
//   if(err) throw err;
//    res.render('list', {list: data});
//    });
//   });
// */
// //app.get('/lst', function(req,res){
// //###Get Data From MongoDB and pass it to the view
// //List.find({}, function(err, data){
// // if(err) throw err;
// //  res.render('list', {list: data});
// //  });
// // });

//  //app.post('/list', urlencodedParser, function(req, res){
//  // Get Data From the view and add it to mongodb
//  //var newlist = List(req.body).save(function(err, data){
// //  if (err) throw err;
// //  res.json(data);
// //  });
// // });

//  //app.delete('/list/:item', function(req,res){
//   // Delete the requested item from mongodb
// // List.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
// //   if (err) throw err;
// //   res.json(data);
// //   });
// //  });

// app.get('/*', sLog, function (req,res){
//   res.status(404).render('404');
// });
// }
