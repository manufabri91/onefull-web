import {
  CircularProgress,
  Grid,
  makeStyles,
  styled,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Hero from '../../assets/img/hero.jpg';
import Logo from '../../logo.svg';
import useFetch from '../../services/useFetch';
import TarjetaPrecio from '../../shared/TarjetaPrecio/TarjetaPrecio';

const useStyles = makeStyles((theme) => ({
  hero: {
    maxHeight: '1080px',
    minHeight: '700px',
    height: '100vh',
    backgroundImage: `linear-gradient(#042af7e8, #000000ad), url(${Hero})`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
  },
  heroLogo: {
    height: '15rem',
    [theme.breakpoints.down('md')]: {
      height: '8rem',
    },
  },
  abonos: {
    paddingTop: '4rem',
    color: 'white',
    [theme.breakpoints.up('md')]: {
      paddingTop: '4rem',
    },
  },
  tarjetasPrecios: {
    display: 'flex',
    padding: '3rem 1rem',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      padding: '2rem',
    },
  },
  content: {
    padding: '87px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      padding: '87px 0',
    },
    [theme.breakpoints.up('lg')]: {
      padding: '145px 0',
    },
  },
}));

const Landing = () => {
  const styles = useStyles();
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
    <div>
      <section className={styles.hero}>
        <article className={styles.content}>
          <HeroTypography variant='h3'>Estamos con vos, </HeroTypography>
          <HeroTypography variant='h3'>somos uno</HeroTypography>
          <HeroTypography variant='h1' style={{ marginTop: '2rem' }}>
            Somos
          </HeroTypography>
          <img src={Logo} alt='One Full' className={styles.heroLogo} />
        </article>
      </section>
      <section className={styles.abonos}>
        <Typography
          component='h3'
          variant='h4'
          align='center'
          color='initial'
          gutterBottom
        >
          PROMOCIONES DESTACADAS
        </Typography>
        <div className={styles.tarjetasPrecios}>
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
