import React from 'react';
import './Landing.scss';
import { Typography, Button, Container, makeStyles } from '@material-ui/core';
import Carrusel from '../Carrusel/Carrusel';
import { Carousel } from 'react-bootstrap';
import Planes from '../Planes/Planes';

const carruselItems = [
    {
        nombreImagen: 'carrusel1.png',
        texto: 'Nora GO, nuestro nuevo producto',
        boton: {
            texto: 'VER MAS'
        }
    }
];

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

function Landing() {
    
    const classes = useStyles();
    return (
        <div className="landing">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="landing__carousel-image d-block w-100 h-30"
                        src={require("../../assets/img/carrusel1.png")}
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
                        className="landing__carousel-image d-block w-100 h-30"
                        src={require("../../assets/img/carrusel1.png")}
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
                        className="landing__carousel-image d-block w-100 h-30"
                        src={require("../../assets/img/carrusel1.png")}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <Button variant="contained" color="primary">
                            Ver más
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="precios">
                <Planes></Planes>
            </div>
            <div className="packs">
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Packs
                </Typography>
                    <Typography variant="h5" color="textSecondary" component="p">
                        Mejorá tu experiencia One Full con nuestros packs de contenido.
                </Typography>
                <Carousel className="carrusel">
                    <Carousel.Item>
                        <img
                            className="landing__carousel-image d-block w-70 h-30"
                            src={require("../../assets/img/futbol.jpg")}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <Typography variant="h3">
                                PACK FÚTBOL
                        </Typography>
                            <Typography variant="h6">
                                TNT, FOX
                        </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="landing__carousel-image d-block w-70 h-30"
                            src="https://picsum.photos/2000/400"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <Typography variant="h3">
                                PACK ADULTO
                        </Typography>
                            <Typography variant="h6">
                                VENUS, PLAYBOY, BRAZZERS
                        </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="landing__carousel-image d-block w-70 h-30"
                            src="https://picsum.photos/2000/400"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <Typography variant="h3">
                                PACK MOVIE
                        </Typography>
                            <Typography variant="h6">
                                CINECANAL, CINEMAX, OnDemand
                        </Typography>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default Landing;