import React, { Component } from 'react';
import { Container, Section, Row, Col, Fa, Media, Button } from 'mdbreact';
import { Link } from 'react-router-dom'; 
import Features from '../components/Features'; 
import '../styles/styles.scss'; 

export default class Portafolio extends Component {
  render() {
    return(
      <Container className="fluid-container" >
				<Features />
          <Row>
            <Col md="4">
              <Fa icon="area-chart" size="3x" className="red-text"/>
              <h5 className="font-weight-bold my-4">Infrastructure Manager</h5>
							<p className="grey-text mb-md-0 mb-5" >As Infrastructure manager I focused on 4 main categories: network management, systems management, security enforcement and storage. Throughout my experience in the infrastructure world I always operated with an automation mindset, where I polished my knowledge and skills over the course of the multiple projects I was lucky to be a part of been a part of. Main takeaways: I learned that the reduction of duplication of efforts takes understanding, I was thought hard lessons on the need to ensure adherence to standards and that at the core of all infrastructure services making the flow of information an efficient and secure process is elementary, I also understood that you must ensure interoperability among all information value chain entities as it is crucial to sustain a reliable business operation, finally; Change is a necessity and timing is the key to all successful changes, when implementing it always maintain an effective change management policies and practices. Successful businesses rely on dependable infrastructure period, hope for the best but prepare for the worst, constantly drill established processes and demand investments in infrastructure, fact is that the largest single impact on an organization's revenue is an infrastructure failure.</p>
							<Button color="success" size="md" className="waves-light ">Projects Portafolio</Button>
						</Col>
						<Col md="4">
						<Fa icon="book" size="3x" className="cyan-text"/>
						<h5 className="font-weight-bold my-4">Programmer</h5>
						<p className="grey-text mb-md-0 mb-5">Early implementations where on back-end developments to maintain and support applications, where I mainly focused on software productivity improvements for uptime, logging and performance monitoring. Expertise that proved to be a real asset when called to build the first versions of integrated systems where the evolution from off-line to on-line that required an in-depth understanding of the key components necessary to deliver the required flow of information in the most efficient manner and focused mainly on B2B integrations. As efficiency was achieved through online B2B and B2C I was called to a project to build a business model that allowed us to best deliver our product's value and a Web Application -  Software as a Service - solution was built, front and back-end architecturally designed for scalability and security. Currently delivering business requirements through micro services that service SPA and APP's to delivery business solutions and products.  Main professional developer takeaways is to always focus on incorporating user and business requirements into cost-effective, secure solutions that allow scalability and durability.</p>
						<Button color="success" size="md" className="waves-light ">Solutions Portafolio</Button>
					</Col>
				</Row>
    </Container>
    );
  };
}

{/*						<Fa icon="comments-o" size="3x" className="orange-text"/>
							<h5 className="font-weight-bold my-4">SEO Experts</h5>
								<p className="grey-text mb-md-0 mb-5">Over the course of my carrer inclouding now at Solera LATAM my responsabilities as IM can be disected into 3 distinct categories: systems management, network management, and storage management. I've operated with an aoutomation mindset, reduce duplication of effort, ensure adherence to standards, enhance the flow of information throughout an information system, promote adaptability necessary for a changeable environment, ensure interoperability among organizational and external entities, maintain effective change management policies and practices. All business activities depend upon the infrastructure, planning and projects to ensure its effective management, I always reinforce this message to garantee investments in infrastructure management as the largest single impact on an organization's revenue is an infrastructure failure.</p>
							<Button color="success" size="md" className="waves-light ">Read more</Button>
*/}