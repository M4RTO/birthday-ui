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
class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    render() {
        const { currentUser } = this.state;
        const props = this.props;
        return (

                <Router>
                    <div>
                        {
                            authenticationService.currentUserValue &&
                            <NavBar {...props}/>
                        }
                        <Switch>
                            <PrivateRoute exact path="/" component={Home}/>
                            <PrivateRoute exact path="/login" component={LoginPage}/>
                            <PrivateRoute exact path="/animators" component={Animators}/>
                        </Switch>
                    </div>
                </Router>

        );
    }
}

export default App
