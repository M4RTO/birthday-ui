import React from 'react';
import './navBar.scss';
import {Navbar, Nav,Button} from "react-bootstrap";
import {
    Link,Redirect
} from "react-router-dom";
import { authenticationService } from "../../services/authentication.service";
import {ROLE_ADMIN} from "../../util/roles";



class NavBar extends React.Component {
    render() {
        const {currentUser,role} = this.props
        return (
                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">Birthay-App</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            {role && role !== ROLE_ADMIN && <Nav.Link as={Link} to="/animators">Animadores</Nav.Link>}
                        </Nav>
                            <div className="float-right" >
                                <Button variant="outline-info" onClick={authenticationService.logout}>Logout</Button>
                            </div>
                    </Navbar>
                </div>
        );
    }
}

export default NavBar
