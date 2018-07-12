import React, { Component } from 'react';
import { Container, Row, Col, Fa, Media, Button } from 'mdbreact';
import Features from '../components/Features'; 
import '../styles/styles.scss'; 

export default class Portafolio extends Component {
  render() {
    return(
      <Container className="fluid-container">
				<section className="text-center my-5">
				<Features />
          
        </section>
      </Container>
    );
  };
}