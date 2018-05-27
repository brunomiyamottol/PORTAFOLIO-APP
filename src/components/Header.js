'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss';  

const Header = () =>(
	<div>
	 <h1>Expensify</h1>
		 <div>
		  <NavLink to="/" activeClassName="is-active" exact={true}> || Dash Board</NavLink> 
			<NavLink to="/create" activeClassName="is-active"> || Create Expense</NavLink>
			<NavLink to="/help" activeClassName="is-active"> || Help</NavLink>
	 	</div>
	 </div>
); 

export default Header; 