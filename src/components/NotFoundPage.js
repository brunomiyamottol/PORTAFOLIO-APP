'use strict'; 
import React from 'react'; 
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss'; 

const NotFoundPage = () =>(
	<div>
    404!! - <Link to="/">Go Home </Link>
	<h1>404! what are you doing</h1>
	<p>You must have done something wrong</p>
	  <a href='./'>go back and try again</a>
	
	</div>
); 

export default NotFoundPage; 