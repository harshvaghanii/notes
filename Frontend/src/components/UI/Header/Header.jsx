import React from "react";
import {
    Container,
    Form,
    FormControl,
    Nav,
    Navbar,
    NavDropdown,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to={"/"}>
                    Note Zipper
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Form inline={"true"}>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link to="/notes" as={NavLink}>
                            My Notes
                        </Nav.Link>
                        <NavDropdown
                            title="Harsh Vaghani"
                            id="basic-nav-dropdown"
                        >
                            <NavDropdown.Item as={Link} to={"/profile"}>
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/"}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
