import React, { Component } from 'react';
import {
    Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { useContext } from 'react';
import { CartContext } from '../../../CartContext';

function RowProduct() {

    const { value, setValue } = useContext(CartContext)

    return (
        <Col>
            <Card>
                <CardImg top width="100%" src="https://cf.shopee.co.id/file/fb4f1f1ab0c6bb8754dc4884d0b36dfa" alt="logo2" />
               
                <CardBody>
                    <CardTitle> T-shirt </CardTitle>
                    <CardSubtitle>Rp.110.000</CardSubtitle>
                    <CardText>LALALAND T-shirt WS </CardText>
                    <Button onClick={() => setValue(value + 1)}>Tambahkan Keranjang</Button>
                </CardBody>
            </Card>
        </Col>
    );
}


export default RowProduct;