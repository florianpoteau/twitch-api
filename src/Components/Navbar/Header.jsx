import React from 'react';
import { Container, Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-dark">
          <Container>
            <Navbar.Brand className='text-danger' href="/">Dit Wallah !</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className='text-white' href="/parcourir">Categorie</Nav.Link>
              </Nav>
              <Form className="d-flex flex-fill"> 
                <FormControl type="text" placeholder="Search" className="mr-2" />
                <Button variant="outline-light">Search</Button>
              </Form>
              <Nav>
                <Nav.Link className='text-white mx-5' href="#login">Se connecter</Nav.Link>
                <Nav.Link className='text-white' href="#register">S'inscrire</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default Header;
