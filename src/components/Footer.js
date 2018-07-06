'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss';  

const Footer = () =>(
	<div className="header">
		<footer className="footer">
			<div className="container">
				<span className="text-muted">Powered by @brunomiyamotto</span>
			</div>
		</footer>
	</div>
); 

export default Footer; 




{
/*
const Header = () =>(
	<div classNameNameName="header">
		 <div>
		  <NavLink classNameNameName="header__nav" to="/" activeclassNameNameName="is-active" exact={true}> |+| Hey, I'm Bruno Miyamotto</NavLink> 
			<NavLink classNameNameName="header__nav" to="/whoAmI" activeclassNameNameName="is-active"> |-| Get into my brain</NavLink>
      <NavLink classNameNameName="header__nav" to="/portafolio" activeclassNameNameName="is-active"> |+| Here's what I've done</NavLink>
			<NavLink classNameNameName="header__nav" to="/beliefs" activeclassNameNameName="is-active"> |-| Beliefs</NavLink>
	 	</div>
	 </div>
); 

export default Header; 
*/
}