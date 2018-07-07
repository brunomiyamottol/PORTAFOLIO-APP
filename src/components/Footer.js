'use strict'; 
import React, { Component } from 'react'; 
import { Jumbotron, Grid, Row, Col, Button } from 'react-bootstrap';  
import '../styles/styles.scss';  

class Footer extends Component {
	render() {
		return (
	<div className="footer">
		<nav className="navbar fixed-bottom navbar-expand-md">
      <a className="navbar-brand" href="/">MIYAMOTTO</a><span className="text-muted">     @brunomiyamotto &reg;  {new Date().getFullYear() }</span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">____________</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="navbar-nav ml-auto">
					<li className="nav-item active">
					<a className="nav-link" href="/whoAmI">Think<span className="sr-only"></span></a>
					</li>
					<li className="nav-item active">
					<a className="nav-link" href="/portafolio">Done<span className="sr-only"></span></a>
					</li>
					<li className="nav-item active">
					<a className="nav-link" href="/beliefs">Beliefs<span className="sr-only"></span></a>
					</li>
					<li className="nav-item active">
					<a className="nav-link" href="#">Blog<span className="sr-only"></span></a>
					</li>
          <li className="nav-item dropup show">
            <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Solutions</a>
            <div className="dropdown-menu" aria-labelledby="dropdown10">
              <a className="dropdown-item" href="../components/Portafolio.js">Action</a>
              <a className="dropdown-item" href="../components/WhoAmI.js">Another action</a>
              <a className="dropdown-item" href="../components/Dashboard.js">Something else here</a>
						</div>
					</li>
				</ul>
			<Button bsStyle="primary">Login</Button>
    </div>
	</nav>
</div>
		); 
	}
}

export default Footer; 
		


{
	/*
	className Footer extends Component {
	render() {
		return (
			<footer className="footer">
				<div className="container">
					<span className="text-muted">Powered by @brunomiyamotto &reg;  {new Date().getFullYear() }</span>
				</div>
			</footer>
		); 
	}
}
	*/
}