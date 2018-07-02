'use strict'; 
import React from 'react'; 
import {Link} from 'react-router-dom';
import Header from '../components/Header'; 
import '../styles/styles.scss'; 


const Portafolio = () =>(
	<div className="portafolio">
	<Header /> 
	<h2 className="portafolio__title">Here's what I've done so far</h2>
	 <p><Link className="portafolio__subtitle" to="/portafolio/1">Web Applications Created Implemented</Link></p> 
	 <p><Link className="portafolio__subtitle" to="/portafolio/2">Architecture Designs</Link></p>
	 <p><Link className="portafolio__subtitle" to="/portafolio/3">Data Insights Implementations</Link></p>
	 <p><Link className="portafolio__subtitle" to="/portafolio/4">Machine Learning Implementations</Link></p>
	 <p><Link className="portafolio__subtitle" to="/portafolio/5">APP's</Link></p>
	</div>
); 

export default Portafolio; 