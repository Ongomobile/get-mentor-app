import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AboutPage from '../About';
import MentorsPage from '../Mentors';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import LandingPage from '../Landing';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <Navbar />
    <div className="container">
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ABOUT} component={AboutPage} />
      <Route exact path={ROUTES.MENTORS} component={MentorsPage} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route exact path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
