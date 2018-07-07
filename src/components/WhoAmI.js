'use strict'; 
import React from 'react'; 
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import Jumbotron from '../components/Jumbotronn';  
import '../styles/styles.scss'; 

const WhoAmI = () =>(
<div className="whoami">

		<div className="container">
			<Header /> 
			<h2 className="whoami__title">Who Am I</h2>
		</div>
	<Footer className="footer" />
</div>
); 

export default WhoAmI; 