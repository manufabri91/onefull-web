import React from 'react';
import './Landing.scss';
import Carrusel from '../../shared/Carrusel/Carrusel';
import TarjetaPrecio from '../../shared/TarjetaPrecio/TarjetaPrecio';
import { Grid, Typography } from '@material-ui/core';

function Landing() {
  const promoItems = [
    {
      type: 'button',
      imageUrl: require('../../assets/img/familia-online.jpg'),
      altText: 'Beneficios',
      title: '#QuedateEnCasa disfrutando nuestros servicios',
      buttonText: 'Conocé nuestros planes'
    },
    {
      type: 'button',
      imageUrl: require('../../assets/img/OneVentas.jpg'),
      altText: 'Ventas',
      buttonText: 'Contactanos'
    },
    {
      type: 'text',
      imageUrl: require('../../assets/img/IR.png'),
      altText: 'Informe Regional',
      title: '',
      subtitle: ''
    },
    {
      type: 'text',
      imageUrl: require('../../assets/img/covid.png'),
      altText: 'COVID-19',
      title: '',
      subtitle: ''
    },
  ];
  const abonos = [
    {
      title: 'Abono Básico',
      subtitle: 'Accedé a nuestros servicios básicos',
      price: 900,
      description: [
        '85 canales',
        'Atención personalizada',
        'Soporte técnico 24/7'
      ],
      buttonText: '¡Pedilo!'
    },
    {
      title: 'Abono HD',
      subtitle: 'La mejor calidad de imagen, al mejor precio',
      price: 1100,
      description: [
        '420 canales',
        '100 canales HD',
        'Atención personalizada',
        'Soporte técnico 24/7'
      ],
      buttonText: '¡Pedilo!'
    },
    {
      title: 'Abono ONEFull',
      subtitle: 'La experiencia OneFull Completa',
      price: 1600,
      description: [
        '420 canales',
        '100 canales HD',
        'Internet 50Mbps Wi-Fi',
        'App NoraGO para ver TV en donde quieras',
        'Atención personalizada',
        'Soporte técnico 24/7'
      ],
      buttonText: '¡Pedilo!'
    }
  ]
  return (
    <div className="landing">
      <div className="carrusel" >
        <Carrusel items={promoItems}/>
      </div>
      <div className="abonos">
        <Typography
          component="h3"
          variant="h4"
          align="center"
          color="initial"
          gutterBottom>
            PROMOCIONES DESTACADAS
        </Typography>
        <div className="tarjetas-precios">
          <Grid container spacing={2}>
            {
              abonos.map((abono, i) => (
                <TarjetaPrecio
                  key={`destacado_${i}`}
                  item={abono}
                />
              ))
            }
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Landing;