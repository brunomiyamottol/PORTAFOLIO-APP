import * as firebase from 'firebase'; 


const  config = {
    apiKey: "AIzaSyDbDScVrIP3kOSIvfp2P9Xx6oCLk6aC_e4",
    authDomain: "miyamotto-expensify.firebaseapp.com",
    databaseURL: "https://miyamotto-expensify.firebaseio.com",
    projectId: "miyamotto-expensify",
    storageBucket: "miyamotto-expensify.appspot.com",
    messagingSenderId: "1064349990361"
  };

firebase.initializeApp(config);

const database = firebase.database(); 
const googleAuthProvider = new firebase.auth.GoogleAuthProvider(); 

export  {firebase, googleAuthProvider, database as default}; 


// //child_removed
// database.ref('expenses').on('child_removed', (snapshot)=>{
// 		console.log(snapshot.key, snapshot.val()); 
// }); 
// //shild_updated
// database.ref('expenses').on('child_changed', (snapshot)=>{
// 	console.log(snapshot.key, snapshot.val()); 
// }); 
// //Child_added
// database.ref('expenses').on('child_added', (snapshot)=>{
// 	console.log(snapshot.key, snapshot.val()); 
// }); 


// //-----changes-----------
// // database.ref('expenses').on('value',(snapshot) =>{
// // 	const expenses = []; 
		
// // 			snapshot.forEach((childSnapshot) => {
// // 				expenses.push({
// // 					id: childSnapshot.key, 
// // 					...childSnapshot.val()
// // 				}); 
// // 			});
// // 			console.log(expenses);  
// // 		});  

// // database.ref('expenses')
// // 	.once('value')
// // 	.then((snapshot) => {
// // 	 const expenses = []; 
		
// // 		snapshot.forEach((childSnapshot) => {
// // 			expenses.push({
// // 				id: childSnapshot.key, 
// // 				...childSnapshot.val()
// // 			}); 
// // 		});
// // 		console.log(expenses);  
// // 	}); 

// // database.ref('expenses').push({
// // 	description:'Rent111',
// // 	note:'Expense 1',
// // 	amount:92837,  
// // 	createdAt: 183789138927
// // }).then(()=>{
// // 	console.log('Data is Saved Successfully!'); 
// // }).catch((e)=>{
// // 	console.log('This Data Update Failed', e); 
// // 	}); 

// // 	database.ref('expenses').push({
// // 	description:'Ga s Bill22222',
// // 	note:'Expense 2',
// // 	amount:82837,  
// // 	createdAt: 18378943097527
// // 	}).then(()=>{
// // 		console.log('Data is Saved Successfully!'); 
// // 	}).catch((e)=>{
// // 		console.log('This Data Update Failed', e); 
// // 		}); 

// // 		database.ref('expenses').push({
// // 	description:'Cable Bill333',
// // 	note:'Expense 3',
// // 	amount:62837,  
// // 	createdAt: 1837938712927
// // 		}).then(()=>{
// // 			console.log('Data is Saved Successfully!'); 
// // 		}).catch((e)=>{
// // 			console.log('This Data Update Failed', e); 
// // 			}); 



// 	//database.ref('notes/-LFeInlh08Cut-OaAgb3').remove(); 

// // const firebaseNotes = {
// // 	notes:{
// // 		aslhdaljd:{
// // 			title:'First Note',
// // 			body:'this is my notes'
// // 		}, 
// // 		pkahdosahd:{
// // 			title:'Another Note',
// // 			body:'this is my note'
// // 		}
// // 	}
// // }
// // 

// // const notes = [{
// // 	id:'12', 
// // 	title:'First Note',
// // 	body:'this is my notes' 
// // }, {
// // 	id:'761ase', 
// // 	title:'Another Note',
// // 	body:'this is my note'
// // }];

// // database.ref('notes').set(notes); 


// // const onValueChange = (snapshot) =>{
// // 	console.log(snapshot); 
// // }; 

// // database.ref().on('value', (snapshot)=>{
// // 	console.log(snapshot.val()); 
// // }); 

// // setTimeout((val)=>{
// // 	database.ref('age').set(29); 
// // }, 3500); 

// // setTimeout((val)=>{
// // 	database.ref().off();  
// // }, 7000); 

// // setTimeout((val)=>{
// // 	database.ref('age').set(30); 
// // }, 10500); 

// // database.ref('location/city')
// // 	.once('value')
// // 	.then((snapshot)=>{
// // 		const val = snapshot.val(); 
// // 		console.log(val); 
// // 	})
// // 	.catch((e)=>{
// // 		console.log('Could Not get Data', e);
// // 	}); 


// 	// database.ref().set({
// 	// 	name:'Bruno', 
// 	// 	lastName:'Miyamotto Luque', 
// 	// 	age:26, 
// 	// 	stressLevel: 6,
// 	// 	job:{
// 	// 		title:'software developer',
// 	// 		company:'Google'
// 	// }, 
// 	// 	location:{
// 	// 		city:'NYC', 
// 	// 		state:'NE', 
// 	// 		country:'United States'
// 	// 	}, 
// 	// 	pets:['dog', 'fish','cat']
// 	// }).then(()=>{
// 	// 	console.log('Data is Saved Successfully!'); 
// 	// }).catch((e)=>{
// 	// 	console.log('This Data Update Failed', e); 
// 	// })   

// 	// database.ref().update({
// 	// 	stressLevel:9,
// 	// 	'job/company':'Amazon',
// 	// 	'location/city':'Seattle',
// 	// 	'location/state':'Washington'
// 	// 	}).then(()=>{
// 	// 		console.log('Data is Updated Successfully!'); 
// 	// 	}).catch((e)=>{
// 	// 		console.log('This Data Update Failed', e); 
// 	// 	}); 

// 	//database.ref('isSingle').set(null); 

// // database.ref('isSingle')
// // 	.remove()
// // 	.then(()=>{
// // 		console.log('Removed Successfully!')
// // 	})
// // 	.catch((e)=>{
// // 		console.log('Could Not Remove', e)
// // 	}); 

// 	//database.ref().set('this is my data'); 
	
// 	// database.ref('age').set(27);
// 	// database.ref('location/city').set('LA');  

// 	// database.ref('attributes').set({
// 	// 	hight:1.80, 
// 	// 	weight:70
// 	// }).then(()=>{
// 	// 	console.log('Attributes Updated Corrctly!!!'); 
// 	// }).catch((e)=>{
// 	// 	console.log('Attibutes Could Not be Updated!', e); 
// 	// }); 

// 	// console.log('I made a rquest to change the data'); 

