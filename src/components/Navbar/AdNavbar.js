import React, { Component } from 'react';
import { Navbar, Nav, Form, FormControl, Button, } from 'react-bootstrap';
import './adNavbar.css'


class adNavbar extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {

    const { activeUser, } = this.props;

    const SmartAgentIn = activeUser ? <Nav.Link className="mr-5" href="/#SmartAgent">SmartAgent</Nav.Link>: null

    return (
      <div className="c-adNavbar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand className="mr-5" href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto cat">
              {SmartAgentIn}
              <Nav.Link className="mr-5" href="/#Clothing">Clothing</Nav.Link>
              <Nav.Link className="mr-5" href="/#ToysAndGames">Toys and games</Nav.Link>
              <Nav.Link className="mr-5" href="/#ForTheBabys">For the baby's</Nav.Link>
              <Nav.Link className="mr-5" href="/#ForMoms">For Mom's</Nav.Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default adNavbar;