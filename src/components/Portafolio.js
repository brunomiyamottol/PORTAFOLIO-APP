'use strict'; 
import React, { Component } from 'react'; 
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';  
import {Link} from 'react-router-dom';
import '../styles/styles.scss'; 


export default class Portafolio extends Component {
	render() {
		return (
		<Grid>
			<h2>PORTAFOLIO</h2>
				<div className="portafolio">
						<div className="container">
								<h2 className="portafolio__title">Here's what I've done so far</h2>
									<p><Link className="portafolio__subtitle" to="/portafolio/1">Web Applications Created Implemented</Link></p> 
									<p><Link className="portafolio__subtitle" to="/portafolio/2">Architecture Designs</Link></p>
									<p><Link className="portafolio__subtitle" to="/portafolio/3">Data Insights Implementations</Link></p>
									<p><Link className="portafolio__subtitle" to="/portafolio/4">Machine Learning Implementations</Link></p>
									<p><Link className="portafolio__subtitle" to="/portafolio/5">APP's</Link></p>
							</div>
				</div>
</Grid>
);
}
}