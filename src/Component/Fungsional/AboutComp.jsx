import React from 'react';
import { Jumbotron, Button, Row, Col, Container } from 'reactstrap';
import CardComp from './CardComp';


function AboutComp () {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Hello About!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p> 
      </Jumbotron>
      <Container>
        <Row>
          <Col><CardComp id="1" judul = "Belajar React"tanggal ="22/08/2020"/></Col>
          <Col><CardComp id="2" judul = "Main Layangan"tanggal ="22/08/2020"/></Col>
          <Col><CardComp id="3" judul = "Main Cewe"tanggal ="22/08/2020"/></Col>          
          </Row>
      </Container>
    </div>
  );
};

export default AboutComp;