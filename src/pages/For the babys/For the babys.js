import React, { Component } from 'react';
import { ListGroup,Col,Row } from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard';


class ForTheBabys extends Component {
    render() {

        const { ads } = this.props;
        const forthebabysPage = 3
        const forthebabysAds = ads.filter(ad => ad.CategoryId === forthebabysPage)

        const forthebabysUi = forthebabysAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)
        return (
            <div>
                ForTheBabys
                <Row>{forthebabysUi}</Row> 
                <ListGroup variant="flush">
                    <ListGroup.Item action >Furniture</ListGroup.Item>
                    <ListGroup.Item action >Safety</ListGroup.Item>
                    <ListGroup.Item action >carriage</ListGroup.Item>
                    <ListGroup.Item action >playpen cradle</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default ForTheBabys;

