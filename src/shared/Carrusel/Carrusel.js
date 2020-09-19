import React from 'react';
import './Carrusel.scss';
import { Typography, Button } from '@material-ui/core';
import { Carousel } from "react-bootstrap";


function Carrusel(props) {
  return (
    <Carousel className="carrusel">
      {
        props.items.map((item, i) => (
          <Carousel.Item key={`item_${i}`} >
            <div className="carrusel-item" >
              <img
                className="carrusel-image d-block w-100"
                src={item.imageUrl}
                alt={item.altText}
              />
            </div>
            <Carousel.Caption>
              {
                item.type === 'button' ?
                  <>
                    <Typography variant="h3" color="secondary">{item.title}</Typography>
                    <Button variant="contained" color="primary">{item.buttonText}</Button>
                  </>
                  : <>
                    <Typography variant="h3" color="textPrimary">{item.title}</Typography>
                    <Typography variant="h6" color="secondary">{item.subtitle}</Typography>
                  </>

              }
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default Carrusel;
