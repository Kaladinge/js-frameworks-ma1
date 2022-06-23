import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from '../home/Home';
import About from '../about/About';
import Contact from '../contact/Contact';
import Portfolio from '../portfolio/Portfolio';
import styled from 'styled-components';

const BrandName = styled.span`
  color: ${function(props) {
    return props.theme.primaryColor;
  }};
  font-size: 30px;
  text-decoration: none;
`

function Layout() {
  return (
    <Router>
      <Navbar expand="lg" className="p-4 bg-dark navbar-dark">
        <Container>
          <NavLink to="/" className="text-decoration-none">
            <Navbar.Brand><BrandName>The Frog Page</BrandName></Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-5">
              <NavLink to="/" className="nav-link">Home</NavLink>
              <NavLink to="/my-portfolio" className="nav-link">Portfolio</NavLink>
              <NavLink to="/about" className="nav-link">About</NavLink>
              <NavLink to="/contact-me" className="nav-link">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/my-portfolio" element={<Portfolio />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact-me" element={<Contact />}/>
          </Routes>
    </Router>
  )
}

export default Layout