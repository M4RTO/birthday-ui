import React from 'react';
import './navBar.scss';
import {Navbar, Nav,Button} from "react-bootstrap";
import {
    Link,Redirect
} from "react-router-dom";
import { authenticationService } from "../../services/authentication.service";



class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
     }

    logout = () => {
        authenticationService.logout();
    }



    render() {
        return (

                <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">Birthay-App</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Nav.Link  as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link  as={Link} to="/animators">Animadores</Nav.Link>
                        </Nav>
                        {
                            authenticationService.currentUserValue &&
                            <div className="float-right" >
                                <Button variant="outline-info" onClick={this.logout}>Logout</Button>
                            </div>
                        }

                    </Navbar>
                </div>
        );
    }
}

export default NavBar
