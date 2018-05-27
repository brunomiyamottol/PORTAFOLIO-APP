'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import BMDashboardPage from '../components/BMDashboardPage'; 
import Header from '../components/Header'; 
import NotFoundPage from '../components/NotFoundPage';
import Portafolio from '../components/Portafolio'; 
import ContactPage from '../components/ContactPage'; 
import '../styles/styles.scss'; 

const AppRouter = () =>(
	<BrowserRouter>
		<div>
		<Header />
			<Switch>
				<Route path="/" component={BMDashboardPage} exact={true}/>
				<Route path="/portafolio" component={Portafolio} />
				<Route path="/contac" component={ContactPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
		</BrowserRouter>
); 

export default AppRouter; 