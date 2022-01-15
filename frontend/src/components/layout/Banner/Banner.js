import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {
    return (
        <div>
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/cheerful-happy-woman-enjoying-shopping-260nw-1417347668.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
    )
}

export default Banner;
