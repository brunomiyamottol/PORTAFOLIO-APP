'use strict'; 
import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotronn';  
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import '../styles/styles.scss'; 

const Home = () =>(
	<div>
		<Header className="header" />	
			<h2 className="header__title">Hey, I'm Bruno Miyamotto</h2>
			<p> </p>
		</div>
); 

export default Home; 