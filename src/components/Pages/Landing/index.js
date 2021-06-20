import React from 'react';
import * as ROUTES from '../../../constants/routes';
import Button from '../../UI_Components/Button';
import Heading from '../../UI_Components/Heading';
import LovingDude from '../../../assets/svgs/loving.svg';
import { LinkStyle } from '../../UI_Components/Link';
import UserCard from '../../UI_Components/UserCard';
import * as COLORS from '../../../constants/colors';
import { StyledParagraph } from '../../UI_Components/Paragraph';
import {
  HeroContainer,
  HeroContentRight,
  HeroContentLeft,
  HeroImgWrapper,
  btnOveride,
  LandingMentorsContainer,
  MentorsHeading,
  MentorsWrapper,
  MentorsBtnWrapper,
  inverseBtnOveride,
} from './landing-styles';

//These are just for temporary placeholder  mentor content
const tempDes = `Responsible + Regenerative business incl. B-Corp Assessment / Certification and Systems Thinking, Consumer Insight (qual, quant, ethno), Strategy, Freelance life and chit chat" 
`;
const maryaPicUrl = `https://firebasestorage.googleapis.com/v0/b/get-mentor.appspot.com/o/images%2Fmarya.png?alt=media&token=3f14923a-7bad-494e-bce8-56f5a4fa6b34`;
const michellUrl = `https://firebasestorage.googleapis.com/v0/b/get-mentor.appspot.com/o/images%2Fmitchell.png?alt=media&token=b5e45120-49b3-4095-b825-45f05702c1ce`;
const arleneUrl = `https://firebasestorage.googleapis.com/v0/b/get-mentor.appspot.com/o/images%2FArlene.png?alt=media&token=b38f6dd2-620b-41cc-b3cc-b472bb99732d`;
const markUrl = `https://firebasestorage.googleapis.com/v0/b/get-mentor.appspot.com/o/images%2FMark.png?alt=media&token=5c969ea0-c4bb-4198-8e93-45e57a7876ce`;
const callAlert = () => {
  alert('This is just placeholder content');
};
// End Temp content

const LandingPage = () => (
  <>
    <HeroContainer>
      <HeroContentLeft>
        <Heading h1>Connecting people to improve their lives</Heading>
        <StyledParagraph setColor={`${COLORS.MEDIUMGREY}`}>
          Do you want be a Mentor? Or do you need help with something?
          Maybe both? This is the place for you. We connect people
          that just look to help eachother for the pleasure of doing
          it. And all for free.
        </StyledParagraph>
        <Button style={inverseBtnOveride} inverse big hidemobile>
          <LinkStyle sethovercolor="white" to={ROUTES.SIGN_UP}>
            Register me to start mentoring or ask for help
          </LinkStyle>
        </Button>
        <Button primary hidedesktop style={btnOveride}>
          <LinkStyle to={ROUTES.SIGN_UP}>Register Me</LinkStyle>
        </Button>
      </HeroContentLeft>
      <HeroContentRight>
        <HeroImgWrapper
          src={LovingDude}
          alt="Image of man with heart"
        />
      </HeroContentRight>
    </HeroContainer>
    <LandingMentorsContainer>
      <MentorsHeading>Our New Mentors</MentorsHeading>
      <MentorsWrapper>
        <UserCard
          name="Marya Antonia Fontsweizzer"
          title="CEO Friend.ly"
          description={tempDes}
          url={maryaPicUrl}
          handleClick={callAlert}
          alt="Marya Antonia Fontsweizzer Information"
        />
        <UserCard
          name="Mitchell Russell"
          title="Gillette"
          description={tempDes}
          url={michellUrl}
          handleClick={callAlert}
          alt="Mitchell Russell Information"
        />
        <UserCard
          name="Arlene Pena"
          title="Apple"
          description={tempDes}
          url={arleneUrl}
          handleClick={callAlert}
          alt="Arlene Pena Information"
        />
        <UserCard
          name="Mark Simmmons"
          title="Louis Vuitton"
          description={tempDes}
          url={markUrl}
          handleClick={callAlert}
          alt="Mark Simmmons Information"
        />
      </MentorsWrapper>
      <MentorsBtnWrapper>
        <Button style={{ height: '75%' }} inverse>
          <LinkStyle sethovercolor="white" to={ROUTES.MENTORS}>
            See All Mentors
          </LinkStyle>
        </Button>
      </MentorsBtnWrapper>
    </LandingMentorsContainer>
  </>
);

export default LandingPage;
