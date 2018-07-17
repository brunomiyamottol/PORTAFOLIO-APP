const add = (a, b) => a + b; 
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`; 


test('Should add 2 numbers', () =>{
	const result = add(3, 4); 

	// if (result !== 7 ) {
	// 	throw new Error(`You added 4 and 3. the rusult was ${result} expected 7`)
	// }
	expect(result).toBe(7 ); 
}); 

test('Should Greet', () =>{
	const result = generateGreeting('Mike'); 
	expect(result).toBe('Hello Mike');  
}); 

test('Should Generate greting for no name', ()=>{
const result = generateGreeting(); 
expect(result).toBe('Hello Anonymous'); 
}); 