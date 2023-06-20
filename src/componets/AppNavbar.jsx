import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


const AppNavbar = () => {
    return (
        <div>            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="AboutMe" ><img className='ico' src="perfil/img.ico" alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="AboutMe" >Acerca de Mí</Nav.Link>
                    <NavDropdown title="Proyectos" id="collasible-nav-dropdown">
                    <NavDropdown.Item as={Link} to="App1" >E-commerce con React</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="App2" >
                        App Clima con React
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="App3" >App CRUD Users con React</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="App4" >
                        APP Pokedex con Reacts
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="App5" >
                        APP de API Caricatures con Reacts
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={Link} to="MySocialMedia" >Mi Redes Sociales</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to="Contacto" >Contacto</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    
        </div>
    );
};



export default AppNavbar;