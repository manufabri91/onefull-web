import React from "react";
import "./App.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Router } from "@reach/router";
import logo from "./logo.svg";
import Landing from "./components/Landing/Landing";
import Planes from "./components/Planes/Planes";
import Beneficios from "./components/Beneficios/Beneficios";

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
        <Beneficios path="/beneficios" />
        <Planes path="/planes" />
      </Router>
      
    </div>
    
  );
}

export default App;
