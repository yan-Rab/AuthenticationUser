import React from 'react';
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { authUser } from './services/Auth';
import PageMaster from './components/PageMaster';
import Main from './components/Main';

const MainRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUser() ? (
            <Redirect to = {{pathname: "/PageMaster", state: { from: props.location }}} />
        ) : (
            <Component {...props} />
        )
    )} />
)

const PrivateRouteMaster = ({component: Component, ...rest}) => (
    <Route {...rest} render = {props => (
        authUser() ? (
            <Component {...props} />
        ) : (
            <Redirect to = {{pathname: "/", state: {from: props.location}}} />
        )
    )} />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <MainRoute exact path = "/"  component = {Main}/>
            <PrivateRouteMaster exact path = "/PageMaster" component = {PageMaster} />
        </Switch>
    </BrowserRouter>
)

export default Routes;