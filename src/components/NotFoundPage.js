'use strict'; 
import React from 'react'; 
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss'; 

const NotFoundPage = () =>(
	<div>
    404!! - <Link to="/">Go Home </Link>
	</div>
); 

export default NotFoundPage; 