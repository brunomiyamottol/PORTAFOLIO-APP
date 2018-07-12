'use strict'; 
import React, { Component } from 'react'; 
import CarouselPage from './CarouselPage'; 
import { Jumbotron, Grid, Media, Row, Col, Button } from 'react-bootstrap';  
import '../styles/styles.scss'; 

export default class Home extends Component {
render() {
	return (
		<div >
			<CarouselPage />
				<Jumbotron>
					<Grid>
					<div className="container">
					<p><strong>Continuously develop the passion for learning, understanding and processing information that influences how we perceive and interact with reality.</strong></p>
					</div>
						<Media>
							<Media left href="#" className="mr-3">
								<Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
							</Media>
							<Media body>
								<Media heading>
									Media heading
								</Media>
								Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
								<Media className="mt-3">
									<Media left href="#" className="pr-3">
										<Media object src="http://via.placeholder.com/64x64" alt="Generic placeholder image" />
									</Media>
									<Media body>
										<Media heading>
											Nested media heading
										</Media>
										Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
									</Media>
								</Media>
							</Media>
						</Media>
					</Grid>
				</Jumbotron>
			</div>
   );
	}
}
