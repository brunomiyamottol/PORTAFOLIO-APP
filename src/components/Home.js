'use strict'; 
import React from 'react'; 
import Header from '../components/Header';
import Footer from '../components/Footer'; 
import '../styles/styles.scss'; 
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,Container,Row,Col,Jumbotron,Button} from 'reactstrap';

const Home = () =>(
	<div>
		<Header className="header" />	
			<div className="box-layout">
				<h2 className="header__title">Hey, I'm Bruno Miyamotto</h2>
				<p> </p>	 
			</div>
		<Footer className="header" />
	</div>
); 

export default Home; 
