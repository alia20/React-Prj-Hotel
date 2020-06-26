import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
const items = [
    {
      src:'assets/images/img3.jpg',
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src:'assets/images/img11.jpg',
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
        src:'assets/images/img6.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1',
        header: 'Slide 1 Header',
        key: '1'
      },
      {
        src:'assets/images/head-img.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
      },
      {
        src:'assets/images/img23.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: '2'
      },
  ];
  
  const Gallerycarousel = () => <UncontrolledCarousel items={items} />;
  
  export default Gallerycarousel;