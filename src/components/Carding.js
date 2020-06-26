import React, { Component } from 'react';
import {ROOMS} from "../shared/Rooms";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Carding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: ROOMS
        };
    }

    render() {
        const directory = this.state.rooms.map(rooms => {
            return (
                <div key={rooms.id} className="col-lg-4">
                    <Card>
                        <CardImg src={rooms.image}alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{rooms.name}</CardTitle>
                             <CardSubtitle>{rooms.price}</CardSubtitle>

                             <CardText>{rooms.description}</CardText>
                            <Button className="btn-info text-white">Book Room</Button>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Carding;