import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Template = ({ children }) => {
    return (
        <div>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">Drinking Games</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/games">
                                <Nav.Link>Games</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/profile">
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Main Content */}
            <Container className="mt-4">{children}</Container>

            {/* Footer */}
            <footer className="bg-dark text-white text-center py-3 mt-4">
                <Container>
                    <p>&copy; 2024 Willy Wanka's</p>
                </Container>
            </footer>

        </div>
    );
};

export default Template;