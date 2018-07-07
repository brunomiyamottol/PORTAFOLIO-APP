'use strict'; 
import React from 'react'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotronn';  
import '../styles/styles.scss'; 


const PortafolioItem = (props) =>(
<div className="portafolio">
	<div className="container">
		<Header />
			<h2 className="portafolio__item__title">Things I've done</h2>
			<p>Under Construction {props.match.params.id}</p>
	 	</div>
	<Footer className="footer" />
</div>
); 

export default PortafolioItem; 

