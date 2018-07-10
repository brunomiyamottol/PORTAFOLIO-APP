'use strict'; 
import React, { Component } from 'react'; 
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import FixedNavTransBarWFull from '../components/FixedNavTransBarWFull'; 
import Home from '../components/Home'; 
import About from '../components/About'; 
import Portafolio from '../components/Portafolio';
import PortafolioItem from '../components/PortafolioItem';
import Resume from '../components/Resume'; 
import Blog from '../components/Blog'; 
import Press from '../components/Press'; 
import Contact from '../components/Contact'; 
import NotFoundPage from '../components/NotFoundPage'; 
import '../styles/styles.scss'; 


	export default class AppRouter extends Component {
	render() {
		return (
		<Router>
			<div>
				<FixedNavTransBarWFull />
					<Route path="/" component={Home} exact={true}/>
					<Route path="/resume" component={Resume}/>
					<Route path="/about" component={About} isAuthenticated={true}/>
					<Route path="/portafolio" component={Portafolio} exact={true} isAuthenticated={true}/>
					<Route path="/portafolio/:id" component={PortafolioItem} isAuthenticated={true}/>
					<Route path="/blog" component={Blog} />
					<Route path="/press" component={Press} />
					<Route path="/contact" component={Contact} />
					<Route path="/PageNotFound" component={NotFoundPage} />
			</div>
		</Router>
); 
}
}