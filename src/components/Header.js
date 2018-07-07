'use strict'; 
import React, { Component  } from 'react'; 
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
//import '../styles/styles.scss';  

export default class Header extends Component {
	render() {
		return (
				<Navbar default collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">MIYAMOTTO</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					<Navbar.Collapse>
							<Nav pullRight>
								<NavItem eventKey={1} componentClass={Link} to="/whoAmI">
								Think
								</NavItem>
								<NavItem eventKey={2} componentClass={Link} to="/portafolio">
								Done
								</NavItem>
								<NavItem eventKey={3} componentClass={Link} to="/beliefs">
								Beliefs
								</NavItem>
								<NavItem eventKey={4} componentClass={Link} to="#">
								Blog
								</NavItem>
							</Nav> 
					</Navbar.Collapse>
			</Navbar>			
		);
	}
}