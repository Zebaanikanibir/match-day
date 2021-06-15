import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './HavHead.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'
const NavHead = () => {
    return (
        <div>
            <Navbar className="head" expand="lg">
                <Navbar.Brand href="#home" className="text-white">Match Day AI</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="ml-auto text-white" href="#home">My Collection</Nav.Link>
                        <Nav.Link className="ml-auto text-white" href="#link">Browse</Nav.Link>
                        <Nav.Link className="ml-auto text-white" href="#link">Compare</Nav.Link>
                        <Nav.Link className="ml-auto text-white" href="#link">My Progress</Nav.Link>
                        <Nav.Link className="ml-auto text-white" href="#link">
                        <FontAwesomeIcon icon={faShoppingCart} />
                           
                        </Nav.Link>
                        <Nav.Link className="ml-auto text-white" href="#link"><FontAwesomeIcon icon={faUser} /></Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavHead
