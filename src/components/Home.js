'use strict'; 
import React, { Component } from 'react'; 
import CarouselPage from './CarouselPage'; 
import { Jumbotron, Grid, Media, Row, Col, Button } from 'react-bootstrap';  
import '../styles/styles.scss'; 

export default class Home extends Component {
render() {
	return (
		<div >
			<div className="container">
				<CarouselPage />
					<Jumbotron>
						<Grid>
						<div className="container">
						<p><strong>Continuously develop the passion for learning, understanding and processing information that influences how we perceive and interact with reality.</strong></p>
						</div>
						</Grid>
				</Jumbotron>
			</div>
		</div>
   	);
	}
}
