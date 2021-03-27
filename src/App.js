import {
  AppBar,
  Box,
  CircularProgress,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  Link as MaterialLink,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PhoneIcon from '@material-ui/icons/Phone';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import apiRoutes from './apiRoutes';
import CityContext from './CityContext';
import logo from './logo.svg';
import Beneficios from './pages/Beneficios/Beneficios';
import Landing from './pages/Landing/Landing';
import Planes from './pages/Planes/Planes';
import useFetch from './services/useFetch';
import theme from './theme';

const useStyles = makeStyles((muiTheme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    marginRight: muiTheme.spacing(5),
    cursor: 'pointer',
  },
  menuButton: {
    marginRight: muiTheme.spacing(2),
    outline: 0,
  },
  title: {
    flexGrow: 1,
  },
  localityDiv: {
    marginLeft: 'auto',
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

const App = () => {
  const { data: cities, loading, error } = useFetch(apiRoutes.cities);
  const [selectedCity, setSelectedCity] = useState();
  useEffect(() => {
    if (cities) {
      setSelectedCity(cities[0].id);
    }
  }, [cities]);
  const classes = useStyles();

  if (loading) return <CircularProgress />;
  if (error) throw error;

  return (
    <CityContext.Provider value={{ selectedCity, cities }}>
      <Router>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <AppBar color='inherit' position='sticky' className={classes.appBar}>
            <Toolbar>
              <Link to='/' className={classes.logo}>
                <img src={logo} width='120' height='50' alt='ONE Full logo' />
              </Link>
              <Button
                className={classes.menuButton}
                color='primary'
                component={Link}
                to='/beneficios'
              >
                Beneficios
              </Button>
              <Button
                className={classes.menuButton}
                color='primary'
                component={Link}
                to='/planes'
              >
                Planes
              </Button>
              <div className={classes.localityDiv}>
                <FormControl>
                  <InputLabel id='locality-label'>Localidad</InputLabel>
                  <Select
                    labelId='locality-label'
                    id='locality-select'
                    color='primary'
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {cities.map((city) => (
                      <MenuItem key={`${city.id}_${city.name}`} value={city.id}>
                        {city.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>
            </Toolbar>
          </AppBar>
          <div className={classes.routerOutlet}>
            <Switch>
              <Route path='/beneficios'>
                <Beneficios />
              </Route>
              <Route exact path='/planes'>
                <Planes />
              </Route>
              <Route exact path='/'>
                <Landing />
              </Route>
            </Switch>
          </div>
          <Container
            maxWidth='md'
            component='footer'
            className={classes.footer}
          >
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
                  <li
                    className={classes.footerItem}
                    style={{ marginBottom: '.5rem' }}
                  >
                    <PhoneIcon fontSize='small' color='primary' />
                    <Typography variant='subtitle2' color='primary'>
                      At. al Cliente
                    </Typography>
                    <MaterialLink
                      href='tel:08002667005'
                      target='_blank'
                      onClick={(e) => e.preventDefault}
                      className={classes.footerItemDescription}
                      variant='subtitle2'
                      color='textPrimary'
                    >
                      0800-266-7005
                    </MaterialLink>
                  </li>
                  <li className={classes.footerItem}>
                    <PhoneIcon fontSize='small' color='primary' />
                    <Typography variant='subtitle2' color='primary'>
                      Guardia:
                    </Typography>
                    <MaterialLink
                      href='tel:+5493413612671'
                      target='_blank'
                      onClick={(e) => e.preventDefault}
                      className={classes.footerItemDescription}
                      variant='subtitle2'
                      color='textPrimary'
                    >
                      0341 - 153612671
                    </MaterialLink>
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
                    className={classes.footerItem}
                    style={{ marginBottom: '.5rem' }}
                  >
                    <InstagramIcon fontSize='small' color='primary' />
                    <MaterialLink
                      href='https://www.instagram.com/onefull_ok'
                      target='_blank'
                      onClick={(e) => e.preventDefault}
                      className={classes.footerItemDescription}
                      variant='subtitle2'
                      color='textPrimary'
                    >
                      @onefull_ok
                    </MaterialLink>
                  </li>
                  <li className={classes.footerItem}>
                    <FacebookIcon fontSize='small' color='primary' />

                    <MaterialLink
                      href='https://www.facebook.com/villeneuvegroupsa'
                      target='_blank'
                      onClick={(e) => e.preventDefault}
                      className={classes.footerItemDescription}
                      variant='subtitle2'
                      color='textPrimary'
                    >
                      ONE FULL
                    </MaterialLink>
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
        </ThemeProvider>
      </Router>
    </CityContext.Provider>
  );
};

export default App;
