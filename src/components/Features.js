import React, { Component } from 'react';
import { Container, Row, Col, Fa, Button } from 'mdbreact';
import '../styles/styles.scss'; 

export default class FeaturesPage extends Component {
  render() {
    return(
      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Currently Solera LATAM CTO</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5"></p>
          <Row>
            <Col lg="5" className="text-center text-lg-left">
              <img  className="img-fluid" src="/images/CTO_MILTIPLE_HATS.jpeg" alt="Sample image" />
            </Col>
            <Col lg="7">
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3"></h5>
                  <p className="grey-text">As Chief Technology Officer I'm focused on scientific and technical issues within the Solera LATAM organization. Essentially, responsible for the transformation of capital – be it monetary or intellectual – into technology in furtherance of the company’s regional and ultimately global objectives. I believe that as CTO I should be the ‘most technical business person’ and my goal is to build a great organization, not only a technology. It’s simple, my primary job as CTO is to make sure the company's technology strategy serves its business strategy. I strongly believe along with technology understanding every CTO needs great understating of the business itself.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3"></h5>
                  <p className="grey-text">My role and responsibilities have been changing depending on the Solera LATAM organization growth. Stating from setting up local infrastructure, the first advancements and designs of current integrated products, first SaaS product version coding, future product strategy main contributor, supporting, hiring, evangelism, teaming up, infrastructure management, capacity planning, risk mitigation plans, smoothly deployment of product to the end user, security precautions, system & infrastructure etc. The beauty, my main driver and source of my passion for the job is the need to wear multiple hats almost every day.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>
    );
  };
}