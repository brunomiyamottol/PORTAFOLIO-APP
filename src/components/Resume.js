'use strict'; 
import React, { Component  } from 'react'; 
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../styles/styles.scss';  



export default class Beliefs extends Component {
	render() {
		return (
	<Grid>
		<div className="beliefs">	
				<div className="container">
					<h2 className="beliefs__title">RESUME</h2>
					<h4>Be Crafty, Lovable, Systematic, and Relentless</h4>
					<h4>Pursue you're Passions, Not the Money</h4>
					<h4>Don't Take Yourself Too Seriously</h4>
					<h4>Believe in Change</h4>
				</div>
		</div>
	</Grid>
 );
}
}