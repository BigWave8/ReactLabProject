import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import {
  LinkingWrapper,
  NavigationDelimater,
  VerticalDelimater,
} from "./Navigation.styles";
import Item from "../Catalog/Item/Item";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";

const Navigation = () => {
  return (
    <Router>
      <LinkingWrapper>
        <VerticalDelimater />
        <ul>
          <NavigationDelimater />
          <li>
            <NavLink exact to="/" activeClassName="selected">
              Home
            </NavLink>
          </li>
          <NavigationDelimater />
          <li>
            <NavLink exact to="/catalog" activeClassName="selected">
              Catalog
            </NavLink>
          </li>
          <NavigationDelimater />
          <li>
            <NavLink exact to="/cart" activeClassName="selected">
              Cart
            </NavLink>
          </li>
          <NavigationDelimater />
        </ul>
        <VerticalDelimater />
        <Switch>
          <Route path="/catalog">
            <Catalog />
          </Route>
          <Route path="/item">
            <Item />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </LinkingWrapper>
    </Router>
  );
};

export default Navigation;
