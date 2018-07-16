// console.log('Runing Destructiring!!!'); 

// const person = { 
// 	name:'Bruno', 
// 	age:27, 
// 	location: {
// 	city:'NYC', 
// 	temp:88 
//  }
// }; 

// const {name:firstName = 'Anonymous', age} = person; 

// console.log(`${firstName} is ${age}`); 

// const {city, temp:temperature } = person.location; 

// if (city && temperature) {
// console.log(`its ${temperature} in ${city}`)
// }; 

// const book = {
// title:'Ego is the Enemy', 
// author:'Ryan Holiday', 
// publisher:{
// 	//name:'Penguin'
//  } 
// };

// const {name:publisherName = 'Self-Published'} = book.publisher; 


const address = [ '1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147']; 
const [,city, state = 'New York', zip] = address; 
//const [, , state = 'New York' ] = address;

//console.log(`You are in ${address[1]} ${address[2]}.`); 

console.log(`You are in ${city} ${state}`); 

const item = ['Coffee(hot)', '$2.00', '$2.51', '$2.75']; 

const [coffeeHot, ,medium] = item; 

console.log(`A medium ${coffeeHot} costs ${medium} `)
