import uuid from 'uuid'; 
import {addExpense, removeExpense, editExpense} from '../../actions/expenses'; 

//REMOVE_EXPENSE
test('should remove expense action object', ()=>{
	const action = removeExpense({id:'123abc'});
	expect(action).toEqual({
	type:'REMOVE_EXPENSE', 
	id:'123abc'
});  
}); 

test('should edit expense action object', ()=>{
const action = editExpense('123abc',{note:'new note value'});
expect(action).toEqual({
	type:'EDIT_EXPENSE', 
	id:'123abc', 
	updates: { note:'new note value'
		}
	}); 
}); 


//EDIT_EXPENSE
test('should edit expense action object ', ()=>{
const action = editExpense( '123abc', { note: 'new note value'}); 
	expect(action).toEqual({
		type: 'EDIT_EXPENSE', 
		id:'123abc', 
		updates:{
		note:'new note value'
		}
	}); 
}); 

//ADD_EXPENSE
test('should setup add expense action object with provided values', () =>{
	const expenseData = {
		description:'Rent', 
		amount: 10950, 
		createdAt: 1000, 
		note:'This is the rent for last month'
	}; 
	const action = addExpense(expenseData);
	expect(action).toEqual({
		type:'ADD_EXPENSE', 
		expense:{
			...expenseData, 
			id: expect.any(String)
		}
	}); 
}); 

test('should setup add expense action object with default values', () =>{
	const expenseData = {}; 
	const action = addExpense();
	expect(action).toEqual({
		type:'ADD_EXPENSE', 
		expense:{
			description:'', 
			amount:0, 
			createdAt:0, 
			id:expect.any(String),
			note:''
		}
	});  
}); 