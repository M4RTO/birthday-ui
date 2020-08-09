import React from 'react';
import './navBar.scss';
import {Navbar, Nav} from "react-bootstrap";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../Home/Home.js";
import Animators from "../Animators/Animators.js";

class NavBar extends React.Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/">Birthay-App</Navbar.Brand>
                        <Nav className="mr-auto">
                            <Link to="/">Inicio</Link>
                            <Link to="/animators">Animadores</Link>
                        </Nav>
                    </Navbar>

                    <Switch>
                        <Route path="/animators">
                            <Animators />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default NavBar
