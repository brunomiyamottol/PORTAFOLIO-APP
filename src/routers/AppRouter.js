'use strict'; 
const React = require('react'); //import React from 'react'; 
const ReactDOM = require('react-dom'); //import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from '../components/Header'; 
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'; 
import AddExpensePage from '../components/AddExpensePage'; 
import EditExpensePage from '../components/EditExpensePage'; 
import HelpPage from '../components/HelpPage'; 
import '../styles/styles.scss'; 

const AppRouter = () =>(
	<BrowserRouter>
		<div>
		<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true}/>
				<Route path="/create" component={AddExpensePage} />
				<Route path="/edit/:id" component={EditExpensePage} />
				<Route path="/help" component={HelpPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
		</BrowserRouter>
); 

export default AppRouter; 