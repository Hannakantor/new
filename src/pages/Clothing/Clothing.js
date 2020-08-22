import React, { Component } from 'react';
import { ListGroup, Row , Col} from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'


class Clothing extends Component {
    render() {
        const { ads } = this.props;

        const ClothingPage = 1
        const clothingAds = ads.filter(ad => ad.CategoryId === ClothingPage)

        const clothingAdsUi = clothingAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)

        return (
            <div>
                Clothing
               <Row>{clothingAdsUi}</Row> 
                <ListGroup variant="flush">
                {/* <Form.Label className="mr-2">Category</Form.Label> */}
                    <ListGroup.Item action >Size</ListGroup.Item>
                    <ListGroup.Item action >Season</ListGroup.Item>
                    <ListGroup.Item action >Special Events</ListGroup.Item>
                    <ListGroup.Item action >Shoes</ListGroup.Item>
                    <ListGroup.Item action >Other</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default Clothing;

