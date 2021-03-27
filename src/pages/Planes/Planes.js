import {
  CircularProgress,
  Container,
  Grid,
  makeStyles,
  styled,
  Typography,
} from '@material-ui/core';
import React, { useContext } from 'react';
import apiRoutes from '../../apiRoutes';
import PiggyAhorros from '../../assets/img/piggy-ahorros1.png';
import colors from '../../assets/styles/colors.enum';
import CityContext from '../../CityContext';
import useFetch from '../../services/useFetch';
import toQueryString from '../../shared/helpers/toQueryString';
import TarjetaPrecio from '../../shared/TarjetaPrecio/TarjetaPrecio';

const WhiteTitleTypography = styled(Typography)({
  fontWeight: 700,
  opacity: 1,
  color: '#fff',
});

const useStyles = makeStyles((theme) => ({
  banner: {
    height: '35vh',
    backgroundColor: colors.AZUL_ONE_DARK,
    backgroundBlendMode: 'color-burn',
    backgroundImage: `url('${PiggyAhorros}')`,
    backgroundSize: '8rem',
    [theme.breakpoints.up('md')]: {
      height: '30vh',
    },
  },
  floatingButton: {
    position: 'fixed',
    top: '40vh',
    left: '-45px',
  },
  floatingSmallButton: {
    position: 'fixed',
    bottom: '2rem',
    left: '.5rem',
  },
  pageTitle: {
    paddingTop: '2rem',
  },
  pageSubtitle: {
    paddingTop: '2.75rem',
  },
  gridContainer: {
    padding: '1rem 2rem',
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
}));

const Planes = () => {
  const classes = useStyles();
  const cityContext = useContext(CityContext);
  const plansUrl = `${apiRoutes.plans}${toQueryString({
    localidad: cityContext.selectedCity.id,
  })}`;
  const { data, loading, error } = useFetch(plansUrl, [
    cityContext.selectedCity.id,
  ]);

  if (loading) return <CircularProgress />;
  if (error) throw error;
  return (
    <>
      <Container maxWidth='xl' component='section' className={classes.banner}>
        <WhiteTitleTypography
          variant='h4'
          align='center'
          color='initial'
          className={classes.pageTitle}
          paragraph
          gutterBottom
        >
          Planes Vigentes
        </WhiteTitleTypography>
        <WhiteTitleTypography
          variant='body1'
          align='center'
          color='initial'
          className={classes.pageSubtitle}
          paragraph
          gutterBottom
        >
          Conocé los planes que tenemos en tu localidad
        </WhiteTitleTypography>
      </Container>
      <section className={classes.gridContainer}>
        <Container maxWidth='lg'>
          <Grid container spacing={data.length}>
            {data.map((abono, i) => (
              <TarjetaPrecio key={`destacado_${i}`} item={abono} />
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Planes;
