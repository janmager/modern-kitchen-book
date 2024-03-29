import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Recipe from './components/Recipe/Recipe';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/recipe/:url" component={Recipe} />
        </Switch>
    </BrowserRouter>
);

export default Router;