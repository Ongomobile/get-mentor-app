import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import Navbar from '../Navbar';
import { Container } from '../UI_Components/Container';
import SignUpPage from '../Pages/SignUp';
import SignInPage from '../Pages/SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Pages/Home';
import MentorsPage from '../Pages/Mentors';
import AboutPage from '../Pages/About';
import AccountPage from '../Pages/Account';
import AdminPage from '../Pages/Admin';
import FaqPage from '../Pages/Faq';
import LandingPage from '../Pages/Landing';
import Footer from '../Footer';
import Tabbar from '../Tabbar';

const App = () => (
  <Router>
    <Navbar />
    <Tabbar />
    <Container>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.MENTORS} component={MentorsPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.FAQ} component={FaqPage} />
    </Container>
    <Footer />
  </Router>
);

export default withAuthentication(App);
