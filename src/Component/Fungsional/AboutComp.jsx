import React, { useContext } from 'react'
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { CartContext } from '../../CartContext';

function AboutComp () {

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">ABOUT US </h1>
                <p className="lead">Tergabung dalam dalam komunitas LGN PURWOKERTO</p>
                <hr className="my-2" />
                <p>Throuht your imagination with our arts</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col><CardComp id="1" judul="NWO Bahan tebal dan nyaman" tanggal="27/07/2020"/></Col>
                    <Col><CardComp id="2" judul="Sablon plastisol" tanggal="27/07/202"/></Col>
                    <Col><CardComp id="3" judul="Bahan Cotton COmbed 24 s" tanggal="27/07/202"/></Col>
                </Row>
            </Container>
        </div>
    )
}
export default AboutComp