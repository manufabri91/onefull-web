import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Link,
  makeStyles,
  styled,
  Typography,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import AOS from 'aos';
import React, { useEffect } from 'react';
import Hero from '../../assets/img/hero.jpg';
import Saving from '../../assets/img/saving.svg';
import NoraGOApp from '../../assets/img/nora.svg';
import Logo from '../../logo.svg';
import useFetch from '../../services/useFetch';
import TarjetaPrecio from '../../shared/TarjetaPrecio/TarjetaPrecio';

const useStyles = makeStyles((theme) => ({
  hero: {
    maxHeight: '1080px',
    minHeight: '700px',
    height: '95vh',
    fontWeight: '700',
    backgroundImage: `linear-gradient(#fff0, #0000005e, #0000006e, #d6d6d6cf, #0000, #0000), url(${Hero})`,
    backgroundPosition: '50%',
    backgroundSize: 'cover',
  },
  heroLogo: {
    height: '15rem',
    [theme.breakpoints.down('md')]: {
      height: '8rem',
    },
  },
  bannerSvg: {
    width: '85vw',
    [theme.breakpoints.up('md')]: {
      width: '33vw',
      height: '20rem',
    },
  },
  bannerHeader: {
    fontWeight: '500',
    marginTop: '2rem',
    marginBottom: '1rem',
  },
  bannerTitle: {
    fontWeight: '700',
  },
  banner: {
    minHeight: '100vh',
    paddingTop: '1rem',
    paddingLeft: '2rem',
    [theme.breakpoints.up('md')]: {
      minHeight: '65vh',
      paddingTop: '2rem',
    },
  },
  abonos: {
    paddingTop: '4rem',
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
  footerItem: {
    display: 'flex',
    alignItems: 'center',
  },
  footerItemDescription: {
    marginLeft: '.5rem',
  },
}));

const Landing = () => {
  const styles = useStyles();
  const { data, loading, error } = useFetch('abonos');
  useEffect(() => {
    AOS.init();
  }, []);
  const HeroTypography = styled(Typography)({
    fontWeight: 700,
    opacity: 1,
    color: '#fff',
  });

  if (loading) return <CircularProgress />;
  if (error) throw error;

  return (
    <div>
      <Container maxWidth='xl' component='section' className={styles.hero}>
        <article className={styles.content}>
          <HeroTypography variant='h3'>Estamos con vos</HeroTypography>
          <HeroTypography variant='h3'>Somos uno</HeroTypography>
          <HeroTypography variant='h1' style={{ marginTop: '2rem' }}>
            SOMOS
          </HeroTypography>
          <img
            data-aos='fade-up'
            data-aos-delay='500'
            src={Logo}
            alt='One Full'
            className={styles.heroLogo}
          />
        </article>
      </Container>
      <Container
        data-aos='zoom-in'
        maxWidth='xl'
        component='section'
        className={styles.banner}
      >
        <Typography
          variant='h4'
          align='center'
          color='initial'
          className={styles.bannerTitle}
          paragraph
          gutterBottom
        >
          Toda la tecnología, para vos
        </Typography>
        <Grid container spacing={4} justify='space-evenly' alignItems='center'>
          <Grid item xs={12} md={7}>
            <Typography
              className={styles.bannerHeader}
              variant='h5'
              color='primary'
              gutterBottom
              paragraph
            >
              DiBox Play + WiFi + NoraGO = Entretenimiento donde quieras
            </Typography>
            <ul>
              <li>
                <Typography variant='h6' color='inherit' paragraph>
                  Televisión HD
                </Typography>
              </li>
              <li>
                <Typography variant='h6' color='inherit' paragraph>
                  WiFi de alta velocidad
                </Typography>
              </li>
              <li>
                <Typography variant='h6' color='inherit' paragraph>
                  App para ver tele donde quieras
                </Typography>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={NoraGOApp} alt='One Full' className={styles.bannerSvg} />
          </Grid>
        </Grid>
      </Container>{' '}
      <Container
        maxWidth='xl'
        component='section'
        className={styles.banner}
        data-aos='fade-right'
      >
        <Typography
          variant='h4'
          align='left'
          color='initial'
          className={styles.bannerTitle}
          paragraph
          gutterBottom
        >
          Te conviene desde el primer día
        </Typography>
        <Grid container spacing={4} justify='space-evenly' alignItems='center'>
          <Grid item xs={12} md={4}>
            <img src={Saving} alt='One Full' className={styles.bannerSvg} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              className={styles.bannerHeader}
              variant='h5'
              color='primary'
              gutterBottom
              paragraph
            >
              Beneficios exclusivos
            </Typography>
            <ul>
              <li>
                <Typography variant='h6' color='inherit' paragraph>
                  Descuentos en locales de cercanía con nuestra tarjeta de
                  descuentos
                </Typography>
              </li>
              <li>
                <Typography variant='h6' color='inherit' paragraph>
                  Sorteos con tu cuota al día
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='section' className={styles.abonos}>
        <Typography
          className={styles.bannerTitle}
          variant='h4'
          align='center'
          color='initial'
          gutterBottom
        >
          Promociones destacadas
        </Typography>
        <Container maxWidth='lg' className={styles.tarjetasPrecios}>
          <Grid container spacing={data.length}>
            {data.map((abono, i) => (
              <TarjetaPrecio key={`destacado_${i}`} item={abono} />
            ))}
          </Grid>
        </Container>
      </Container>
      <Container maxWidth='md' component='footer' className={styles.footer}>
        <Grid container spacing={4} justify='space-evenly'>
          <Grid item xs={12} md={6}>
            <Typography
              align='center'
              variant='h6'
              color='secondary'
              gutterBottom
            >
              CONTACTANOS
            </Typography>
            <ul>
              <li className={styles.footerItem}>
                <PhoneIcon color='primary' />
                <Typography variant='h6' color='primary'>
                  At. al Cliente
                </Typography>
                <Link
                  href='tel:08002667005'
                  target='_blank'
                  onClick={(e) => e.preventDefault}
                  className={styles.footerItemDescription}
                  variant='subtitle2'
                  color='textPrimary'
                >
                  0800-266-7005
                </Link>
              </li>
              <li className={styles.footerItem}>
                <PhoneIcon color='primary' />
                <Typography variant='h6' color='primary'>
                  Guardia
                </Typography>
                <Link
                  href='tel:+5493413612671'
                  target='_blank'
                  onClick={(e) => e.preventDefault}
                  className={styles.footerItemDescription}
                  variant='subtitle2'
                  color='textPrimary'
                >
                  0341 - 153612671
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              align='center'
              variant='h6'
              color='secondary'
              gutterBottom
            >
              NUESTRAS REDES
            </Typography>
            <ul>
              <li
                className={styles.footerItem}
                style={{ marginBottom: '.5rem' }}
              >
                <InstagramIcon color='primary' />
                <Link
                  href='https://www.instagram.com/onefull_ok'
                  target='_blank'
                  onClick={(e) => e.preventDefault}
                  className={styles.footerItemDescription}
                  variant='subtitle2'
                  color='textPrimary'
                >
                  @onefull_ok
                </Link>
              </li>
              <li className={styles.footerItem}>
                <FacebookIcon color='primary' />

                <Link
                  href='https://www.facebook.com/villeneuvegroupsa'
                  target='_blank'
                  onClick={(e) => e.preventDefault}
                  className={styles.footerItemDescription}
                  variant='subtitle2'
                  color='textPrimary'
                >
                  ONE FULL
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography
            variant='body2'
            color='textSecondary'
            align='center'
            paragraph
          >
            Los servicios que presta ONEFull están sujetos a disponibilidad
            técnica y geográfica.
          </Typography>
          <Typography variant='body2' color='textSecondary' align='center'>
            {'OneFull - '}
            {new Date().getFullYear()}
            {' - Todos los derechos reservados. '}
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default Landing;
