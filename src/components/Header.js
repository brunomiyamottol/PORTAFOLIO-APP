'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss';  

const Header = () =>(
	<div>
	 <h1>Bruno Miyamotto</h1>
		 <div>
		  <NavLink to="/" activeClassName="is-active" exact={true}> || @brunomiyamotto</NavLink> 
			<NavLink to="/portafolio" activeClassName="is-active"> || Portafolio</NavLink>
			<NavLink to="/contact" activeClassName="is-active"> || contact</NavLink>
	 	</div>
	 </div>
); 

export default Header; 