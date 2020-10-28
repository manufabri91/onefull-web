import React from 'react';
import './Landing.scss';
import TarjetaPrecio from '../../shared/TarjetaPrecio/TarjetaPrecio';
import { CircularProgress, Grid, styled, Typography } from '@material-ui/core';
import Logo from '../../logo.svg';
import useFetch from '../../services/useFetch';

const Landing = () => {
  const { data, loading, error } = useFetch('abonos');
  const HeroTypography = styled(Typography)({
    fontWeight: 700,
    opacity: 1,
    color: '#fff',
    textTransform: 'uppercase',
  });

  if (loading) return <CircularProgress />;
  if (error) throw error;

  return (
    <div className='landing'>
      <section className='hero'>
        <article className='content'>
          <HeroTypography variant='h3'>
            Estamos con vos, somos uno
          </HeroTypography>
          <HeroTypography variant='h1'>Somos</HeroTypography>
          <img src={Logo} alt='One Full' style={{ height: '15rem' }} />
        </article>
      </section>
      <section className='abonos'>
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
          <Grid container spacing={data.length}>
            {data.map((abono, i) => (
              <TarjetaPrecio key={`destacado_${i}`} item={abono} />
            ))}
          </Grid>
        </div>
      </section>
    </div>
  );
};

export default Landing;
