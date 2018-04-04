import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import DashboardPage from '../components/DashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditPage from '../components/EditPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path='/' component={DashboardPage} exact={true} />
                <Route path='/create' component={AddExpensePage} exact={true} />
                <Route path='/edit/:id' component={EditPage} />
                <Route path='/help' component={HelpPage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;