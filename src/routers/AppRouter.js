'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header'; 
import Home from '../components/Home'; 
import Dashboart from '../components/Dashboard'; 
import WhoAmI from '../components/WhoAmI'; 
import Beliefs from '../components/Beliefs';
import PortafolioItem from '../components/PortafolioItem';
import Portafolio from '../components/Portafolio';
import NotFoundPage from '../components/NotFoundPage'; 
import '../styles/styles.scss'; 

const AppRouter = () =>(
	<BrowserRouter>
		<div>
		<Header />
			<Switch>
				<Route path="/" component={Home} exact={true}/>
				<Route path="/whoami" component={WhoAmI} />
				<Route path="/beliefs" component={Beliefs} />
				<Route path="/portafolio/:id" component={PortafolioItem} />
				<Route path="/portafolio/" component={Portafolio} exact={true}/>
				<Route component={NotFoundPage} />
			</Switch>
		</div>
		</BrowserRouter>
); 

export default AppRouter; 