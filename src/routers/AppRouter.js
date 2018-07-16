'use strict'; 
import React, { Component } from 'react'; 
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import FixedNavTransBarWFull from '../components/FixedNavTransBarWFull'; 
import Home from '../components/Home'; 
import About from '../components/About'; 
import Portafolio from '../components/Portafolio';
import PortafolioItem from '../components/PortafolioItem';
import Resume from '../components/Resume'; 
import Technology from '../components/Technology'; 
import Press from '../components/Press'; 
import Dashboard from '../components/Dashboard';
import CreateProfile from '../components/CreateProfile'; 
import AddEducation from '../components/AddEductation'; 
import AddExperience from '../components/AddExperience'; 
import Login from '../components/Login';
import SignUp from '../components/SignUp'; 
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
					<Route path="/portafolio" component={Portafolio} isAuthenticated={false}/>
					<Route path="/dashboard" component={ Dashboard } isAuthenticated={false}/>
					<Route path="/createprofile" component={ CreateProfile } isAuthenticated={false}/>
					<Route path="/addeducation" component={ AddEducation } isAuthenticated={false}/>
					<Route path="/addexperience" component={ AddExperience } isAuthenticated={false}/>
					<Route path="/contact" component={ Contact } isAuthenticated={false}/>
					<Route path="/login" component={ Login } isAuthenticated={false}/>
					<Route path="/signup" component={ SignUp }isAuthenticated={false}/>
					{/*<Route path="/resume" component={Resume}/>
					<Route path="/about" component={About} isAuthenticated={true}/>
					<Route path="/experience" component={Portafolio} exact={true} isAuthenticated={true}/>
					<Route path="/portafolio/:id" component={PortafolioItem} isAuthenticated={true}/>
					<Route path="/technology" component={Technology} />
					<Route path="/press" component={Press} />
					<Route path="/contact" component={Contact} />
		<Route path="/PageNotFound" component={NotFoundPage} />*/}
			</div>
		</Router>
); 
}
}