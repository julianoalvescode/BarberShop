import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUP from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUP} />

            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
        </Switch>
    );
}