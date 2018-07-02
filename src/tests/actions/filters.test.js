import {setStartDate, 
				setEndDate, 
				sortByAmount, 
				sortByDate, 
				setTextFilter } from '../../actions/filters'; 
import moment from 'moment'; 

test('should generate set start date action object', ()=>{
const action = setStartDate(moment(0)); 
expect(action).toEqual({
type:'SET_START_DATE', 
startDate:moment(0) 	
})
}); 

test('should generate set end date action object', ()=>{
const action = setEndDate(moment(-1000)); 
expect(action).toEqual({
	type:'SET_END_DATE', 
	endDate:moment(-1000)
	}); 
}); 

test('should generate set text filter object with text value', ()=>{
	const text= 'Something in';
	const action = setTextFilter(text);  
expect(action).toEqual({
	type:'SET_TEXT_FILTER', 
	text
	}); 
}); 

test('should generate set text filter actiob object for default values', ()=>{
const action = setTextFilter(''); 
expect(action).toEqual({
	type:'SET_TEXT_FILTER', 
	text:''
	}); 
}); 

//SORT_BY_DATE laout shorthand
test('should generate action object for sort by date', () =>{
	expect(sortByDate()).toEqual({type:'SORT_BY_DATE'}); 
}); 
//SORT_BY_DATE Old School 
test('should generate sort action object by Date' , () => {
const action = sortByDate(); 
expect(action).toEqual({
	type:'SORT_BY_DATE'
	}); 
}); 

//SORT_BY_AOMOUNT shorthand 
test('should generate action object for sort by amount', ()=>{
	expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
}); 

test('should generate sort action object by Amount', ()=>{
	const action = sortByAmount();
	expect(action).toEqual({
		type: 'SORT_BY_AMOUNT'
		}); 
	}); 
	