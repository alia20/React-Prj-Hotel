import React from 'react';
import Carousel from '../shared/caroussel';
import Carding from './Carding';
import Testimonial from '../shared/testimonial';
function Home(props) {
    return (
        <React.Fragment>
            <div className="container">
                <Carousel />
                <Testimonial />
                <div className="row mb-5 pt-5 justify-content-center">
                    <div className="col-md-7 text-center section-heading">
                        <h2 className="heading">Rooms Selection </h2>
                        <hr className="room-hr" />
                        <p>We provide various amount of rooms at Hawk pines each with unique interior design . Each  room is diffrent but luxurious, depending on the size of the rooms the cost of each room is diffrent. You have the choice to select from our single room,family and Presidential Room. </p>
                    </div>
                </div>
                <Carding />
            </div>
        </React.Fragment>
    );
}

export default Home;   