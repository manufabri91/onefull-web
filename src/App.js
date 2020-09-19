import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Router } from '@reach/router';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Landing from './pages/Landing/Landing';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="120"
            height="50"
            className="d-inline-block align-top"
            alt="ONE Full logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/beneficios">Beneficios</Nav.Link>
            <Nav.Link href="/planes">Planes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Router>
        <Landing path="/" />
      </Router>
    </div>
  );
}

export default App;
