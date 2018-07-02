'use strict'; 
import React from 'react'; 
import Header from '../components/Header'; 
import '../styles/styles.scss'; 


const PortafolioItem = (props) =>(
	<div className="portafolio">
	<Header />
	<h2 className="portafolio__item__title">Things I've done</h2>
	<p>Under Construction {props.match.params.id}</p>
	</div>
); 

export default PortafolioItem; 