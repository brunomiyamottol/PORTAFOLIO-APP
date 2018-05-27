'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss'; 

const EditExpensePage = (props) => {
	console.log(props); 
	return (
			<div>
			Editing the Expense with id of {props.match.params.id} 
			</div>
		); 
}

export default EditExpensePage; 