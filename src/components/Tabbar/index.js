import React from 'react';
import * as ROUTES from '../../constants/routes';
import { LinkStyle } from '../UI_Components/Link';
import { LinkName } from '../UI_Components/Paragraph';
import {
  MobileIconWrapper,
  TabbarWrapper,
  TabbarLinks,
  HeartIcon,
  UserIcon,
  HomeIcon,
  IconWrap,
} from './tabbar-styles';

const Tabbar = () => {
  return (
    <TabbarWrapper>
      <TabbarLinks>
        <MobileIconWrapper>
          <LinkStyle to={ROUTES.HOME}>
            <IconWrap>
              <HomeIcon />
            </IconWrap>
            <LinkName>Home</LinkName>
          </LinkStyle>
        </MobileIconWrapper>
        <MobileIconWrapper>
          <LinkStyle to={ROUTES.MENTORS}>
            <IconWrap>
              <HeartIcon />
            </IconWrap>
            <LinkName>Mentors</LinkName>
          </LinkStyle>
        </MobileIconWrapper>
        <MobileIconWrapper>
          <LinkStyle to={ROUTES.ACCOUNT}>
            <IconWrap>
              <UserIcon />
            </IconWrap>
            <LinkName>Profile</LinkName>
          </LinkStyle>
        </MobileIconWrapper>
      </TabbarLinks>
    </TabbarWrapper>
  );
};

export default Tabbar;
