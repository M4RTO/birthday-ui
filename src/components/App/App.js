import React from 'react';
import './App.scss';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from "react-router-dom";
import {authenticationService} from "../../services/authentication.service";
import {PrivateRoute} from "../PrivateRoute";
import Home from "../Home/Home.js";
import {LoginPage} from "../LoginPage/LoginPage.js";
import NavBar from "../NavBar/navBar";
import Animators from "../Animators/Animators.js";
import {ROLE_ADMIN, ROLE_USER} from "../../util/roles";
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue
        };
    }

    render() {
        const { currentUser } = this.state;
        const props = this.props;
        return (

                <Router>
                    <div>
                        {
                            currentUser &&
                            <NavBar currentUser={currentUser} role={currentUser.roles[0]}/>
                        }
                        <Switch>
                            <PrivateRoute exact path="/" component={Home} roles={[ROLE_USER,ROLE_ADMIN]}/>
                            <PrivateRoute exact path="/login" component={LoginPage} roles={[ROLE_USER,ROLE_ADMIN]}/>
                            <PrivateRoute exact path="/animators" component={Animators} roles={[ROLE_USER]}/>
                        </Switch>
                    </div>
                </Router>

        );
    }
}

export default App
