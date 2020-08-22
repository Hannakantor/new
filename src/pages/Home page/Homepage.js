import React, { Component } from 'react';
import { Container, Button, Card, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homepage.css';
import Help from '../Help/Help';
import AdCard from '../../components/AdCard/AdCard'




class homepage extends Component {

    constructor(props) {
        super(props);

    }


    render() {

        const { activeUser, handleLogout, allUsers, ads } = this.props;
        console.log(ads);


        const LogOutUser = activeUser ? <Button onClick={() => handleLogout()} href="#" variant="secondary">LogOut</Button> : null
        const signupUser = !activeUser ? <Button href="#/signup" variant="secondary">signup</Button> : null
        const LogInUser = !activeUser ? <Button href="#/login" variant="secondary">LogIn</Button> : null

        const allAds = ads.map(ad => <Col lg={3} md={4} sm={6}><AdCard ad={ad}/></Col>)
        console.log(ads);

        return (
            <div className="p-homepage">
                <Container>
                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Tellus in hac habitasse platea. Commodo elit at
                        imperdiet dui accumsan sit amet nulla.
                    </p>

                    {LogOutUser}
                    {signupUser}
                    {LogInUser}
                    <Row>{allAds}</Row>

                </Container>
                <Card.Footer>
                    <Help />
                </Card.Footer>
            </div>
        );
    }
}

export default homepage;
