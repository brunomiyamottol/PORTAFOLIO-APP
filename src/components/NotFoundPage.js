'use strict'; 
import React from 'react'; 
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotronn';  
import '../styles/styles.scss'; 

const NotFoundPage = () =>(
	<div>
    404!! - <Link to="/">Go Home </Link>
	</div>
); 

export default NotFoundPage; 