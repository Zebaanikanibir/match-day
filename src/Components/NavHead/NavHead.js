import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './HavHead.css';
const NavHead = () => {
    return (
        <div>
            <Navbar className="head" expand="lg">
                <Navbar.Brand href="#home">Match Day AI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="ml-auto" href="#home">My Collection</Nav.Link>
                        <Nav.Link className="ml-auto" href="#link">Browse</Nav.Link>
                        <Nav.Link className="ml-auto" href="#link">Compare</Nav.Link>
                        <Nav.Link className="ml-auto" href="#link">My Progress</Nav.Link>
                        <Nav.Link className="ml-auto" href="#link">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Nav.Link>
                        <Nav.Link className="ml-auto" href="#link">My Progress</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavHead
