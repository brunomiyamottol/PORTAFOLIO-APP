'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss'; 


const PortafolioItem = (props) =>(
	<div className="portafolio">
	<h2 className="portafolio__item__title">Things I've done</h2>
	<p>Under Construction {props.match.params.id}</p>
	</div>
); 

export default PortafolioItem; 