'use strict'; 
import React, { Component } from 'react'; 
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';  
import '../styles/styles.scss'; 

export default class About extends Component {
	render() {
		return (
			<Grid>
					<Jumbotron>
						<h2>ABOUT</h2>
							<div className="beliefs">	
							<div className="container">
								<h2 className="beliefs__title">ABOUT</h2>
								<h4>Be Crafty, Lovable, Systematic, and Relentless</h4>
								<h4>Pursue you're Passions, Not the Money</h4>
								<h4>Don't Take Yourself Too Seriously</h4>
								<h4>Believe in Change</h4>
							</div>
					</div>
					</Jumbotron>
			</Grid>
		);
	}
}