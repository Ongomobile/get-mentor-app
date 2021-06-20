import React from 'react';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import { ReactComponent as MobileLogo } from '../../assets/svgs/mobile-logo.svg';
import Button from '../UI_Components/Button';
import { LinkStyle } from '../UI_Components/Link';
import {
  Header,
  NavContainer,
  LogoWrapper,
  NavLinkContainer,
  NavLinkWrapper,
  MobileLogoWrapper,
  MobileSignInWrapper,
  regBtnStyle,
} from './navbar-styles';
import SignOutButton from '../SignOut';

const Navbar = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) =>
        authUser ? (
          <NavigationAuth authUser={authUser} />
        ) : (
          <NavigationNonAuth />
        )
      }
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = ({ authUser }) => {
  return (
    <div>
      <MobileLogoWrapper>
        <LinkStyle to={ROUTES.LANDING}>
          <MobileLogo />
        </LinkStyle>
      </MobileLogoWrapper>
      <MobileSignInWrapper>
        <SignOutButton />
      </MobileSignInWrapper>
      <Header>
        <NavContainer>
          <LogoWrapper>
            <LinkStyle to={ROUTES.LANDING}>
              <Logo />
            </LinkStyle>
          </LogoWrapper>
          <NavLinkContainer>
            <NavLinkWrapper>
              <LinkStyle to={ROUTES.HOME}>Home</LinkStyle>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <LinkStyle to={ROUTES.MENTORS}>Mentors</LinkStyle>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <LinkStyle to={ROUTES.ACCOUNT}>Account</LinkStyle>
            </NavLinkWrapper>
            <NavLinkWrapper>
              {!!authUser.roles[ROLES.ADMIN] && (
                <LinkStyle to={ROUTES.ADMIN}>Admin</LinkStyle>
              )}
            </NavLinkWrapper>
            <NavLinkWrapper>
              <SignOutButton />
            </NavLinkWrapper>
          </NavLinkContainer>
        </NavContainer>
      </Header>
    </div>
  );
};
const NavigationNonAuth = () => {
  return (
    <div>
      <MobileLogoWrapper>
        <LinkStyle to={ROUTES.LANDING} aria-label="first link">
          <MobileLogo />
        </LinkStyle>
      </MobileLogoWrapper>
      <Header>
        <NavContainer>
          <LogoWrapper>
            <Link to={ROUTES.LANDING} aria-label="first link">
              <Logo />
            </Link>
          </LogoWrapper>
          <NavLinkContainer>
            <NavLinkWrapper>
              <LinkStyle to={ROUTES.HOME}>Home</LinkStyle>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <LinkStyle to={ROUTES.SIGN_IN}>Mentors</LinkStyle>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <LinkStyle to={ROUTES.SIGN_IN}>Log In</LinkStyle>
            </NavLinkWrapper>
            <Button primary style={regBtnStyle}>
              <LinkStyle sethovercolor="white" to={ROUTES.SIGN_UP}>
                Register
              </LinkStyle>
            </Button>
          </NavLinkContainer>
        </NavContainer>
      </Header>
    </div>
  );
};
export default Navbar;
