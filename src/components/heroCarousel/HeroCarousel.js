import { Carousel } from 'react-bootstrap'
import textBg2 from '../asset/textBg2.jpg'
import pexelpassport from '../asset/pexelpassport.jpg'
import caro1 from '../asset/caro1.jpg'


function HeroCarousel() {
    return (
      <Carousel className='relative'>
        <Carousel.Item> 
          <img
            className='w-[1200px] h-[450px]'
            src={caro1}
            alt="First slide"
          />
          <Carousel.Caption className='absolute top-10'>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='w-[1200px] h-[450px]'
            src={textBg2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='w-[1200px] h-[450px]'
            src={pexelpassport}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  export default HeroCarousel;