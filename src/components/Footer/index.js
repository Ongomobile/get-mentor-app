import React from 'react';
import * as ROUTES from '../../constants/routes';
import { ReactComponent as FooterLogo } from '../../assets/svgs/logo-namjai.svg';
import { LinkStyle } from '../UI_Components/Link';
import {
  FooterWrapper,
  FooterNavContainer,
  FooterLogoWrapper,
  FooterNavLinks,
  FooterLink,
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
              <LinkStyle sethovercolor="white" to={ROUTES.MENTORS}>
                Mentors
              </LinkStyle>
            </FooterLink>
            <FooterLink>
              <LinkStyle sethovercolor="white" to={ROUTES.FAQ}>
                FAQs
              </LinkStyle>
            </FooterLink>
            <FooterLink>
              <LinkStyle sethovercolor="white" to={ROUTES.ABOUT}>
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
