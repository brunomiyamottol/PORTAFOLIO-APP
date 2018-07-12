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
          <Row>
            <Col md="4">
              <Fa icon="area-chart" size="3x" className="red-text"/>
              <h5 className="font-weight-bold my-4">Infrastructure Manager</h5>
              <p className="grey-text mb-md-0 mb-5">Over the course of my carrer inclouding now at Solera LATAM my responsabilities as IM can be disected into 3 distinct categories: systems management, network management, and storage management. I've operated with an aoutomation mindset, reduce duplication of effort, ensure adherence to standards, enhance the flow of information throughout an information system, promote adaptability necessary for a changeable environment, ensure interoperability among organizational and external entities, maintain effective change management policies and practices. All business activities depend upon the infrastructure, planning and projects to ensure its effective management, I always reinforce this message to garantee investments in infrastructure management as the largest single impact on an organization's revenue is an infrastructure failure.</p>
							<Button color="success" size="md" className="waves-light ">Read more</Button>
						</Col>
            <Col md="4">
              <Fa icon="book" size="3x" className="cyan-text"/>
              <h5 className="font-weight-bold my-4">Programer</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
							<Button color="success" size="md" className="waves-light ">Read more</Button>
						</Col>
            <Col md="4">
              <Fa icon="comments-o" size="3x" className="orange-text"/>
              <h5 className="font-weight-bold my-4">Product Manager</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
							<Button color="success" size="md" className="waves-light ">Read more</Button>
						</Col>
						<Col md="4">
						<Fa icon="area-chart" size="3x" className="red-text"/>
						<h5 className="font-weight-bold my-4">Data Scientist</h5>
						<p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
						<Button color="success" size="md" className="waves-light ">Read more</Button>
					</Col>
					<Col md="4">
						<Fa icon="book" size="3x" className="cyan-text"/>
						<h5 className="font-weight-bold my-4">Team Builder</h5>
						<p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
						<Button color="success" size="md" className="waves-light ">Read more</Button>
					</Col>
					<Col md="4">
						<Fa icon="comments-o" size="3x" className="orange-text"/>
						<h5 className="font-weight-bold my-4">Business Understanding</h5>
						<p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
						<Button color="success" size="md" className="waves-light ">Read more</Button>
					</Col>
					<Col md="4">
					<Fa icon="book" size="3x" className="cyan-text"/>
					<h5 className="font-weight-bold my-4">Thinker</h5>
					<p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
					<Button color="success" size="md" className="waves-light ">Read more</Button>
					</Col>
					<Col md="4">
						<Fa icon="comments-o" size="3x" className="orange-text"/>
						<h5 className="font-weight-bold my-4">SEO Experts</h5>
						<p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
						<Button color="success" size="md" className="waves-light ">Read more</Button>
					</Col>
					<Col md="4">
					<Fa icon="comments-o" size="3x" className="orange-text"/>
					<h5 className="font-weight-bold my-4">Mobile</h5>
					<p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
					<Button color="success" size="md" className="waves-light ">Read more</Button>
					</Col>
					</Row>
        </section>
      </Container>
    );
  };
}



{
/*
import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import '../styles/styles.scss'; 

export default class FeaturesPage extends Component {
  render() {
    return(
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Row>
            <Col md="4">
              <Fa icon="area-chart" size="3x" className="red-text"/>
              <h5 className="font-weight-bold my-4">Analytics</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
            <Col md="4">
              <Fa icon="book" size="3x" className="cyan-text"/>
              <h5 className="font-weight-bold my-4">Tutorials</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
            <Col md="4">
              <Fa icon="comments-o" size="3x" className="orange-text"/>
              <h5 className="font-weight-bold my-4">Support</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}

export default FeaturesPage;
*/

}


{

	/*
	export default class Portafolio extends Component {
	render() {
		return (
		<Grid>
			<h2>PORTAFOLIO</h2>
				<div className="portafolio">
						<div className="container">
								<h2 className="portafolio__title">Here's what I've done so far</h2>
									<p><Link className="portafolio__subtitle" to="/portafolio/1">Web Applications Created Implemented</Link></p> 
									<p><Link className="portafolio__subtitle" to="/portafolio/2">Architecture Designs</Link></p>
									<p><Link className="portafolio__subtitle" to="/portafolio/3">Data Insights Implementations</Link></p>
									<p><Link className="portafolio__subtitle" to="/portafolio/4">Machine Learning Implementations</Link></p>
									<p><Link className="portafolio__subtitle" to="/portafolio/5">APP's</Link></p>
							</div>
				</div>
</Grid>
);
}
}
	*/

}