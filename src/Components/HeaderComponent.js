import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import Image from 'react-bootstrap/Image'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
     }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid className="mb-0">
                    <div className="container text-center">
                        <div className="row text-center">
                            <div class="col text-center">
                                <Image src="/assets/images/littlelogo.png" height="100" width="100" fluid />
                            </div>
                        </div>
                        <br/>
                        <div className="row text-center">
                            <div className="col text-center">
                                <h1>Little Lodges</h1>
                                <h2>Little Living, Bigger Fun</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><Image src="/assets/images/littleLogoWhite.png" height="50" width="50" fluid/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about">
                                        <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <i className="fa fa-address-card fa-lg" /> Contact
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/lodges">
                                        <i className="fa fa-bed fa-lg" /> Lodges
                                    </NavLink>
                                </NavItem>
                            </Nav>
                          </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;