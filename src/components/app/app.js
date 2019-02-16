import React from 'react';
import { Switch, Route }  from 'react-router-dom';
import { HomePage, CartPage } from "../pages";

import './app.scss';

const App = () => {
    return (
        <Switch>
            <Route
                path="/"
                exact
                component={HomePage}/>
            <Route
                path="/cart-page"
                component={CartPage}/>
        </Switch>
    )
};

export default App;
