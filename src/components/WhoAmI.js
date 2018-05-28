'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss'; 

const WhoAmI = () =>(
	<div className="whoami">
	<h2 className="whoami__title">Who Am I</h2>
	</div>
); 

export default WhoAmI; 