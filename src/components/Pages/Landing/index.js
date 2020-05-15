import React from 'react';
import * as ROUTES from '../../../constants/routes';
import Button from '../../UI_Components/Button';
import PageContainer from '../../PageContainer';
import Heading from '../../UI_Components/Heading';
import LovingDude from '../../../assets/svgs/loving.svg';
import StyledCard from '../../UI_Components/Card';
import { LinkStyle } from '../../UI_Components/Link';
import * as COLORS from '../../../constants/colors';
import {
  HeroContainer,
  HeroContentRight,
  HeroContentLeft,
  linkStyle,
  HeroImgWrapper,
  btnOveride,
  LandingMentorsContainer,
  MentorsHeading,
  MentorsWrapper,
  MentorsBtnWrapper,
  inverseBtnOveride,
  LandingText,
} from './landing-styles';

const LandingPage = () => (
  <PageContainer>
    <HeroContainer>
      <HeroContentLeft>
        <Heading h1>Connecting people to improve their lives</Heading>
        <LandingText>
          Do you want be a Mentor? Or do you need help with something?
          Maybe both? This is the place for you. We connect people
          that just look to help eachother for the pleasure of doing
          it. And all for free.
        </LandingText>
        <Button style={inverseBtnOveride} inverse big hidemobile>
          <LinkStyle setHoverColor="white" to={ROUTES.SIGN_UP}>
            Register me to start mentoring or ask for help
          </LinkStyle>
        </Button>
        <Button primary hidedesktop style={btnOveride}>
          <LinkStyle to={ROUTES.SIGN_UP}>Register Me</LinkStyle>
        </Button>
      </HeroContentLeft>
      <HeroContentRight>
        <HeroImgWrapper src={LovingDude} />
      </HeroContentRight>
    </HeroContainer>
    <LandingMentorsContainer>
      <MentorsHeading>Our New Mentors</MentorsHeading>
      <MentorsWrapper>
        <StyledCard />
        <StyledCard />
        <StyledCard />
        <StyledCard />
      </MentorsWrapper>
      <MentorsBtnWrapper>
        <Button style={{ height: '78%' }} inverse>
          <LinkStyle setHoverColor="white" to={ROUTES.MENTORS}>
            See All Mentors
          </LinkStyle>
        </Button>
      </MentorsBtnWrapper>
    </LandingMentorsContainer>
  </PageContainer>
);

export default LandingPage;
