'use strict'; 
import React, { Component  } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, handleSelect } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../styles/styles.scss';  

export default class NavBar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">MIYAMOTTO</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/resume">RESUME</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/about">ABOUT</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/portafolio">PORTAFOLIO</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/blog">BLOG</a>
					</li>
					<li className="nav-item">
					<a className="nav-link " href="/press">PRESS</a>
					</li>
					<li className="nav-item">
					<a className="nav-link " href="/contact">CONTACT</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
					);
				}
		}

{
	/*
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<Link className="navbar-brand" to="/">MIYAMOTTO</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/dashboard">Dashboard</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/whoami">Profile</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/portafolio">Done</a>
					</li>
					<li className="nav-item dropdown">
						<a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							TechStack
						</a>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="/front-end">FrontEnd</a>
							<a className="dropdown-item" href="/back-end">BackEnd</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="/Machine-Learning">MachineLearning</a>
							<a className="dropdown-item" href="/Digital-Marketing">DigitalMarketing</a>
						</div>
					</li>
					<li className="nav-item">
						<a className="nav-link disabled" href="/">AI</a>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	*/
}