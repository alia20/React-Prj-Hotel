import React, { Component } from 'react';
import {ABOUTCARDS} from "../shared/Aboutcards";
import {  Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Jumbotron } from 'reactstrap';


class  About extends Component {
    constructor(props) {
        super(props)
        this.state = {
          aboutcards:ABOUTCARDS
        }
    }

    render() {
        const mycards = this.state.aboutcards.map(aboutcards => {
            return (
                <div key={aboutcards.id} className="col-lg-4">
                    <Card>
                        <CardImg className='rounded-circle ' src={aboutcards.image}alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{aboutcards.name}</CardTitle>
                             <CardSubtitle>{aboutcards.price}</CardSubtitle>

                             <CardText>{aboutcards.description}</CardText>
                            <Button className="btn-outline-info ">View details</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1 >Hello, Welcome to hawk Pines Hotel!</h1>
                                <p >We are awarding winning hotel that provides excellent service. Guests from around the country have come to know our quality hotel </p>
                                <hr />
                                <p>Read about our history , take a look at our gallery and sign up today !</p>
                                <Button className="btn-success text-white">Register</Button>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <div className="container">
                <div className="row">
                    {mycards}
                </div>
            </div>
            
            </React.Fragment>
        )
    }
}

export default About;