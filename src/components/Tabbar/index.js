import React from 'react';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/svgs/home-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/svgs/heart.svg';
import { ReactComponent as ProfileIcon } from '../../assets/svgs/profile.svg';
import {
  MobileIconWrapper,
  TabbarWrapper,
  TabbarLinks,
} from './tabbar-styles';

const Tabbar = () => {
  return (
    <TabbarWrapper>
      <TabbarLinks>
        <MobileIconWrapper>
          <Link to={ROUTES.HOME}>
            <HomeIcon />
          </Link>
        </MobileIconWrapper>
        <MobileIconWrapper>
          <Link to={ROUTES.MENTORS}>
            <HeartIcon />
          </Link>
        </MobileIconWrapper>
        <MobileIconWrapper>
          <Link to={ROUTES.ACCOUNT}>
            <ProfileIcon />
          </Link>
        </MobileIconWrapper>
      </TabbarLinks>
    </TabbarWrapper>
  );
};

export default Tabbar;
