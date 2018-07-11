'use strict'; 
import React, { Component } from 'react'; 
import CarouselPage from './CarouselPage'; 
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';  
import '../styles/styles.scss'; 

export default class Home extends Component {
render() {
	return (
		<div >
			<CarouselPage />
				<Jumbotron>
					<Grid>
					<p>Continuously develop the passion for learning, understanding and processing information that influences how we perceive and interact with reality.</p>
					</Grid>
					</Jumbotron>
				</div>
   );
	}
}
