const promise = new Promise((resolve, reject) => {
	setTimeout(() =>{
		// resolve({
		// 	name:'Bruno', 
		// 	age:27
		// });
		reject('Something went wrong')
	}, 5500); 
}); 

console.log('Before'); 

promise.then((data)=>{
	console.log(1, data); 
}).catch((error) =>{
	console.log('error:', error); 
}); 



console.log('After'); 