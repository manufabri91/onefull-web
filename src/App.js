import { AppBar, Toolbar } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Router } from '@reach/router';
import React, { useState } from 'react';
import './App.scss';
import logo from './logo.svg';
import Beneficios from './pages/Beneficios/Beneficios';
import Landing from './pages/Landing/Landing';

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

const ButtonAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
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
    </div>
  );
};

function App() {
  const [localidad, setLocalidad] = useState('Roldán');

  return (
    <>
      <CssBaseline />
      <div className='App'>
        <ButtonAppBar />
        {/* <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='/'></Navbar.Brand>
          <button onClick={() => setLocalidad({ localidad: 'Funes' })}>
            {localidad}
          </button>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='/beneficios'>Beneficios</Nav.Link>
              <Nav.Link href='/planes'>Planes</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar> */}
        <Router>
          <Landing path='/' />
          <Beneficios path='/beneficios' />
        </Router>
      </div>
    </>
  );
}

export default App;
