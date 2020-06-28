import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninPage from './Pages/signin';
import Homepage from './Pages/homepage';
import SignupPage from './Pages/signup';
import DashBoard from './Pages/dashboard';

const App = () => {
  return(
    <BrowserRouter>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/sign-in' component={SigninPage} />
    <Route exact path='/sign-up' component={SignupPage} />
    <Route exact path='/dashboard' component={DashBoard} />
    </BrowserRouter>
  );
}

export default App;
