import React, { Component } from 'react';
import { ListGroup, Row, Col} from 'react-bootstrap';
import AdCard from '../../components/AdCard/AdCard'



class ToysAndGames extends Component {
    render() {

        const { ads } = this.props;
        const ToysAndGamesPage = 2
        const ToysAndGamesAds = ads.filter(ad => ad.CategoryId === ToysAndGamesPage)

        const clothingAdsUi = ToysAndGamesAds.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)
        return (
            <div>
                ToysAndGames
                <ListGroup variant="flush">
                <Row>{clothingAdsUi}</Row> 

                    <ListGroup.Item action>Dolls</ListGroup.Item>
                    <ListGroup.Item action>board games</ListGroup.Item>
                    <ListGroup.Item action>books</ListGroup.Item>
                    <ListGroup.Item action>Lego</ListGroup.Item>
                    <ListGroup.Item action>Other</ListGroup.Item>
                </ListGroup>
            </div>
        );
    }
}

export default ToysAndGames;

