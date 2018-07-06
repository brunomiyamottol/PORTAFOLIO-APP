'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss';  

const Header = () =>(
	<div className="header">
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			<a className="navbar-brand" href="/">MIYAMOTTO</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon">_</span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsExample04">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">Home<span className="sr-only"></span></a>
						</li>
						<li className="nav-item active">
						<a className="nav-link" href="/whoAmI">Get into my brain<span className="sr-only"></span></a>
						</li>
						<li className="nav-item active">
						<a className="nav-link" href="/portafolio">Here's what I've done<span className="sr-only"></span></a>
						</li>
						<li className="nav-item active">
						<a className="nav-link" href="/beliefs">Beliefs<span className="sr-only"></span></a>
						</li>
					</ul>
				</div>
	</nav>
	</div>
); 

export default Header; 




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