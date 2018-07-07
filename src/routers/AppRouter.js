'use strict'; 
import React from 'react'; 
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header'; 
import Home from '../components/Home'; 
import WhoAmI from '../components/WhoAmI'; 
import Beliefs from '../components/Beliefs';
import PortafolioItem from '../components/PortafolioItem';
import Portafolio from '../components/Portafolio';
import Dashboard from '../components/Dashboard'; 
import NotFoundPage from '../components/NotFoundPage'; 
import '../styles/styles.scss'; 

const AppRouter = () =>(
	<BrowserRouter>
		<div>
			<Header />
				<Route path="/" component={Home} exact={true}/>
				<Route path="/whoami" component={WhoAmI} isAuthenticated={true}/>
				<Route path="/beliefs" component={Beliefs} isAuthenticated={false}/>
				<Route path="/portafolio/:id" component={PortafolioItem} isAuthenticated={true}/>
				<Route path="/portafolio/" component={Portafolio} exact={true} isAuthenticated={true}/>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/PageNotFound" component={NotFoundPage} />
		</div>
	</BrowserRouter>
); 

export default AppRouter; 