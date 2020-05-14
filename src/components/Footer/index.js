import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { ReactComponent as FooterLogo } from '../../assets/svgs/logo-namjai.svg';
import { LinkStyle } from '../UI_Components/Link';
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
              <LinkStyle setHoverColor="white" to={ROUTES.MENTORS}>
                Mentors
              </LinkStyle>
            </FooterLink>
            <FooterLink>
              <LinkStyle setHoverColor="white" to={ROUTES.FAQ}>
                FAQs
              </LinkStyle>
            </FooterLink>
            <FooterLink>
              <LinkStyle setHoverColor="white" to={ROUTES.ABOUT}>
                About us
              </LinkStyle>
            </FooterLink>
          </FooterNavLinks>
        </FooterNavContainer>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
