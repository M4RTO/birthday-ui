import React from 'react';
import {Route, Redirect} from "react-router-dom";

import {authenticationService} from "../services/authentication.service";
import {LoginPage} from "./LoginPage/LoginPage";


export const PrivateRoute = ({ component: Component,roles: roles, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <LoginPage {...props} />
        }

        // check if route is restricted by role
        if (roles && roles.includes(currentUser.roles[0])) {
            // role not authorised so redirect to home page
            return <Component {...props} />

        }

        // authorised so return component


    }} />
)