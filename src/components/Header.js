'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss';  

const Header = () =>(
	<div className="header">
	 <h1>Bruno Miyamotto</h1>
		 <div>
		  <NavLink className="header__nav" to="/" activeClassName="is-active" exact={true}> |+| Hey, I'm Bruno Miyamotto</NavLink> 
			<NavLink className="header__nav" to="/whoAmI" activeClassName="is-active"> |-| Get into my brain</NavLink>
      <NavLink className="header__nav" to="/portafolio" activeClassName="is-active"> |+| Here's what I've done</NavLink>
			<NavLink className="header__nav" to="/beliefs" activeClassName="is-active"> |-| Beliefs</NavLink>
	 	</div>
	 </div>
); 

export default Header; 