import styled from 'styled-components';
import * as COLORS from '../../constants/colors';

export const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 600;
  background-color: white;

  /* medaia queries */
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 4.2% 0 4.2%;
`;
export const LogoWrapper = styled.div`
  margin-top: 26px;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MobileLogoWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 16px;
    left: 16px;
    bottom: auto;
    right: auto;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;

export const NavLinkWrapper = styled.div`
  margin-left: 31px;
  @media screen and (max-width: 600px) {
    margin: 0;
    display: none;
  }
`;

export const MobileSignInWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 16px;
    right: 16px;
    bottom: auto;
    left: auto;
  }
`;

export const regBtnStyle = {
  marginLeft: 31,
};
