import React from 'react'
import {Link} from 'react-router-dom'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://cf.shopee.co.id/file/fb4f1f1ab0c6bb8754dc4884d0b36dfa" alt="furnitur-miniblok-serba-hemat" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>Through your imagination with our arts</CardText>
                    <Button>
                        <Link to = {
                            {
                                pathname : '/detail/${props.id}',
                                state : {
                                    judul : props.judul,
                                    tanggal: props.tanggal
                                }
                            }
                        }>Detail</Link>
                        </Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default CardComp;