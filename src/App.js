import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SigninPage from './Pages/signin';
import Homepage from './Pages/homepage';
import SignupPage from './Pages/signup';

const App = () => {
  return(
    <BrowserRouter>
    <Route exact path='/' component={Homepage} />
    <Route exact path='/sign-in' component={SigninPage} />
    <Route exact path='/sign-up' component={SignupPage} />
    </BrowserRouter>
  );
}

export default App;
