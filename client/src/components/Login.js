'use strict'; 
import React, { Component } from 'react'; 
import CarouselPage from './CarouselPage'; 
import { Jumbotron, Grid, Media, Row, Col, Button } from 'react-bootstrap';  
import '../styles/styles.scss'; 

export default class Login extends Component {
render() {
	return (
		<div >
			<div className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Log In</h1>
							<p className="lead text-center">Sign in to your account</p>
							<form action="#">
								<div className="form-group">
									<input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
								</div>
								<div className="form-group">
									<input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
								</div>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
	</div>
   );
	}
}


