import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src:'assets/images/bg_1.jpg',
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src:'assets/images/bg_2.jpg',
    altText: '',
    caption: '',
    header: '',
    key: '2'
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;