import React, { Component } from 'react';
import { Form, FormControl, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class smartAgent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Clothing",
            itemcondition:"New",
            userArea:"Center"

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeItem = this.handleChangeItem.bind(this);
        this.handleChangeArea = this.handleChangeArea.bind(this);


    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    handleChangeItem(event) {
        this.setState({
            itemcondition: event.target.value
        });
    }
    handleChangeArea(event) {
        this.setState({
            userArea: event.target.value
        });
    }


    render() {

        const { ads } = this.props;

        const categories = {
            Clothing: ["size", "season", "special occasions", "Shoes", "Other"],
            "Toys And Games": ["Dolls", "board games", "books", "lego", "Other"],
            "For Your Baby": ["Safety", "carriage", "playpen cradle", "Other"],
            "For Moms": ["pregnancy clothes", " Breast pumps", "books", "Supplements", "Other"],
        }
        const itemcondition = {
            "Item condition": ["New", "Good", "used-in a good condition"]

        }
        const userArea = {
            area: ["Center", "North", "Jerusalem", "South", "West"]

        }

        const mainCategory = Object.keys(categories).map((key, i) => <option key={i} value={key}>{key}</option>)
        const subCategory = categories[this.state.value].map((sub, i) => <option key={i} value={sub}>{sub}</option>)

        // const mainCondition = Object.keys(itemcondition).map((key, i) => <option key={i} itemcondition={key}>{key}</option>)
        // const subCondition = itemcondition[this.state.value].map((cond, i) => <option key={i} itemcondition={cond}>{cond}</option>)

        // const mainArea = Object.keys(userArea).map((key, i) => <option key={i} userArea={key}>{key}</option>)
        // const subArea = userArea[this.state.value].map((area, i) => <option key={i} userArea={area}>{area}</option>)

        // const smartSearch = ads.filter(ad => ad.CategoryId === Object.keys(categories))


        return (
            <div>
                
                <Form inline className="m-4" >
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label className="mr-2">Category</Form.Label>
                        <Form.Control className="m-3" as="select" value={this.state.value} onChange={this.handleChange}>
                            {mainCategory}
                        </Form.Control>


                        <Form.Label className="m-3">Sub-Category</Form.Label>
                        <Form.Control className="mr-2" as="select" >
                            {subCategory}
                        </Form.Control>

                        {/* <Form.Label className="mr-2">{mainCondition}</Form.Label>
                        <Form.Control className="m-2" as="select"  itemcondition={this.state.value} onChange={this.handleChangeItem}>
                            {subCondition}
                        </Form.Control>

                        <Form.Label className="mr-2">{mainArea}</Form.Label>
                        <Form.Control className="m-2 " as="select"  userArea={this.state.value} onChange={this.handleChangeArea}>
                            {subArea}
                        </Form.Control>  */}


                    </Form.Group >
                    <FormControl className="mr-2" type="text" placeholder="Search for item" className="mr-sm-2" />
                    <Button className="mr-2" variant="outline-success">Search</Button>
                </Form>
            </div>
        );
    }
}

export default smartAgent;
