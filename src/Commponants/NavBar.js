import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';

const NavBar = () => {
  return (
    <Navbar expand="lg" className="Navee bg-sky-700 h-25 sticky-top">
      <Container>
        <Navbar.Brand href="#home" className='text-white'>
          المطيب <span className='text-orange-300'>للسياحه</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto font-bold text-white">
            <ul className='flex list-unstyled no-underline'>
              <li className="nav-item mx-2">
                <Link smooth to="/#home" className='text-white no-underline'>الصفحه ألرئيسية</Link>
              </li>
              <li className="nav-item mx-2">
                <Link smooth to="/#about" className='text-white no-underline'>نبذه عن من نكون</Link>
              </li>
              <li className="nav-item mx-2">
                <Link smooth to="/#services" className='text-white no-underline'>خدمات نقدمها</Link>
              </li>
              <li className="nav-item mx-2">
                <Link smooth to="/#Contact" className='text-white no-underline'>اتصل بنا</Link>
              </li>
              <li className="nav-item mx-2">
                <Link smooth to="/#WherWeAre" className='text-white no-underline'>اين تجدنا</Link>
              </li>
              
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
