'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss'; 


const Beliefs = () =>(
	<div className="beliefs">
	<h2 className="beliefs__title">My Beliefs</h2>
	<h4>Be Crafty, Lovable, Systematic, and Relentless</h4>
	<h4>Pursue you're Passions, Not the Money</h4>
	<h4>Don't Take Yourself Too Seriously</h4>
	<h4>Believe in Change</h4>
	</div>
); 

export default Beliefs; 