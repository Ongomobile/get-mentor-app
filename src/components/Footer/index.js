import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { ReactComponent as FooterLogo } from '../../assets/svgs/logo-namjai.svg';
import {
  FooterWrapper,
  FooterNavContainer,
  FooterLogoWrapper,
  FooterNavLinks,
  FooterLink,
  linkStyle,
} from './footer-styles';

const Footer = () => {
  return (
    <div>
      <FooterWrapper primary>
        <FooterNavContainer>
          <FooterLogoWrapper>
            <FooterLogo />
          </FooterLogoWrapper>
          <FooterNavLinks>
            <FooterLink>
              <Link style={linkStyle} to={ROUTES.MENTORS}>
                {' '}
                Mentors
              </Link>
            </FooterLink>
            <FooterLink>
              <Link style={linkStyle} to={ROUTES.FAQ}>
                {' '}
                FAQs
              </Link>
            </FooterLink>
            <FooterLink>
              <Link style={linkStyle} to={ROUTES.ABOUT}>
                {' '}
                About us
              </Link>
            </FooterLink>
          </FooterNavLinks>
        </FooterNavContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
