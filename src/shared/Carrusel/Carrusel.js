import React from 'react';
import './Carrusel.scss';
import Logo from '../../logo.svg';
import { styled, Typography } from '@material-ui/core';

const MyTypography = styled(Typography)({
  fontWeight: 700,
  opacity: 1,
  color: '#bab3b0',
});

const Carrusel = () => {
  return (
    <section className='landing-hero'>
      <div className='content'>
        <MyTypography variant='h2'>Estamos con vos, somos uno</MyTypography>
        <MyTypography variant='h1'>
          Somos <img src={Logo} alt='One Full' style={{ height: '15rem' }} />
        </MyTypography>
      </div>
    </section>
  );
};

export default Carrusel;
