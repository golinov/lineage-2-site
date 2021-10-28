import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import Input from '../Input/Input';
import About from '../../../pages/About';

const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={Input} path="/about" key="/about">
            <About />
          </Route>
          <Route path="/path" />
          <Redirect to="/about" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navbar;
