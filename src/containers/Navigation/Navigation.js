import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import { LinkingWrapper, NavigationDelimater, VerticalDelimater } from './Navigation.styles';
import Home from '../Home/Home';

const Navigation = () => (
    <Router>
        <LinkingWrapper>
            <VerticalDelimater/>
            <ul>
                <NavigationDelimater/>
                <li>
                    <NavLink exact to="/" activeClassName="selected">Home</NavLink>
                </li>
                <NavigationDelimater/>
                <li>
                    <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
                </li>
                <NavigationDelimater/>
                <li>
                    <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
                </li>
                <NavigationDelimater/>
            </ul>
            <VerticalDelimater/>
            <Switch>
                <Route path="/catalog">
                    <div>It's Catalog</div>
                </Route>
                <Route path="/cart">
                    <div>It's Cart</div>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </LinkingWrapper>
    </Router>
);

export default Navigation;