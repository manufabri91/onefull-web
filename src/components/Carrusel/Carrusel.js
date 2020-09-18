import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Button } from '@material-ui/core';

function Carrusel() {
    return (
        <Carousel>
                <Carousel.Item>
                    <img
                        className="landing__carousel-image d-block h-30"
                        src="https://picsum.photos/2000/400"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Button variant="contained" color="primary">
                            Ver más
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="landing__carousel-image d-block h-30"
                        src="https://picsum.photos/2000/400"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Button variant="contained" color="primary">
                            Ver más
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="landing__carousel-image d-block h-30"
                        src="https://picsum.photos/2000/400"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Button variant="contained" color="primary">
                            Ver más
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
}

export default Carrusel();