'use strict'; 
import React, { Component } from 'react'; ; 
import '../styles/styles.scss'; 


export default class About extends Component {
	render() {
		return (
<div className="portafolio">
	<div className="container">
			<h2 className="portafolio__item__title">Things I've done</h2>
			<p>Under Construction {props.match.params.id}</p>
	 	</div>
	<Footer className="footer" />
</div>
);
}
}
