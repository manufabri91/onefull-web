import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Link, Router } from '@reach/router';
import React from 'react';
import './App.scss';
import logo from './logo.svg';
import Beneficios from './pages/Beneficios/Beneficios';
import Landing from './pages/Landing/Landing';
import theme from './theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginRight: theme.spacing(5),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    outline: 0,
  },
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className='App'>
          <nav className={classes.root}>
            <AppBar position='fixed'>
              <Toolbar>
                <Link to='/' className={classes.logo}>
                  <img
                    src={logo}
                    width='120'
                    height='50'
                    className='d-inline-block align-top'
                    alt='ONE Full logo'
                  />
                </Link>
                <Button className={classes.menuButton} color='secondary'>
                  Planes
                </Button>
                <Button className={classes.menuButton} color='secondary'>
                  Beneficios
                </Button>
              </Toolbar>
            </AppBar>
          </nav>
          <Router>
            <Landing path='/' />
            <Beneficios path='/beneficios' />
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
};

export default App;
