import styled from 'styled-components';
import { Heart } from '@styled-icons/boxicons-regular/Heart';
import { User } from '@styled-icons/boxicons-regular/User';
import { HomeOutline } from '@styled-icons/evaicons-outline/HomeOutline';
import * as COLORS from '../../constants/colors';

export const TabbarWrapper = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    position: fixed;
    z-index: 605;
    left: 0;
    right: 0;
    top: auto;
    bottom: 0;
    height: 100px;
    background-color: #ffffff;
    box-shadow: 0px 0px 14px rgba(121, 136, 149, 0.25);
    border-radius: 31px 31px 0px 0px;
  }
`;

export const TabbarLinks = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex: 1;
  }
`;

export const MobileIconWrapper = styled.div`
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
  }
`;

export const HeartIcon = styled(Heart)`
  height: 24px;
  width: 24px;
  color: ${(props) => props.setColor || `${COLORS.LITEICON}`};
  &:hover:hover {
    color: ${(props) => props.sethovercolor || `${COLORS.PRIMARY}`};
  }
`;

export const UserIcon = styled(User)`
  height: 24px;
  width: 24px;
  color: ${(props) => props.setColor || `${COLORS.LITEICON}`};
  &:hover:hover {
    color: ${(props) => props.sethovercolor || `${COLORS.PRIMARY}`};
  }
`;

export const HomeIcon = styled(HomeOutline)`
  height: 24px;
  width: 24px;
  color: ${(props) => props.setColor || `${COLORS.LITEICON}`};
  &:hover:hover {
    color: ${(props) => props.sethovercolor || `${COLORS.PRIMARY}`};
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: center;
`;
