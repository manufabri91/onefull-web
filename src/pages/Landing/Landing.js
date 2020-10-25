import React, { useState } from 'react';
import './Landing.scss';
import Carrusel from '../../shared/Carrusel/Carrusel';
import TarjetaPrecio from '../../shared/TarjetaPrecio/TarjetaPrecio';
import { Grid, Typography } from '@material-ui/core';
import { Spinner } from 'react-bootstrap';
import useFetchAll from '../../services/useFetchAll';

function Landing() {
  const { data, loading, error } = useFetchAll(['abonos', 'promos']);

  if (loading) return <Spinner />;
  if (error) throw error;

  const [abonos, promoItems] = data;

  return (
    <div className='landing'>
      <div className='carrusel'>
        <Carrusel items={promoItems} />
      </div>
      <div className='abonos'>
        <Typography
          component='h3'
          variant='h4'
          align='center'
          color='initial'
          gutterBottom
        >
          PROMOCIONES DESTACADAS
        </Typography>
        <div className='tarjetas-precios'>
          <Grid container spacing={abonos.length}>
            {abonos.map((abono, i) => (
              <TarjetaPrecio key={`destacado_${i}`} item={abono} />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Landing;
