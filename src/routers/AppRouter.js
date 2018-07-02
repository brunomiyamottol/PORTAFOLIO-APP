'use strict'; 
import React from 'react'; 
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../components/Home'; 
import WhoAmI from '../components/WhoAmI'; 
import Beliefs from '../components/Beliefs';
import PortafolioItem from '../components/PortafolioItem';
import Portafolio from '../components/Portafolio';
import NotFoundPage from '../components/NotFoundPage'; 
import '../styles/styles.scss'; 

const AppRouter = () =>(
	<BrowserRouter>
		<div>
			<Route path="/" component={Home} exact={true}/>
			<Switch>
				<Route path="/whoami" component={WhoAmI} isAuthenticated={true}/>
				<Route path="/beliefs" component={Beliefs} isAuthenticated={false}/>
				<Route path="/portafolio/:id" component={PortafolioItem} isAuthenticated={true}/>
				<Route path="/portafolio/" component={Portafolio} exact={true} isAuthenticated={true}/>
				<Route path="/notfound" component={NotFoundPage} />
			</Switch>
		</div>
		</BrowserRouter>
); 

export default AppRouter; 