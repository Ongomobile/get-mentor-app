import styled from 'styled-components';
import * as COLORS from '../../../constants/colors';
import media from '../../UI_Components/Media';

export const MentorsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${COLORS.PRIMARY};
  padding: 3% 0 3% 5%;
  height: 187px;
  max-height: 187px;
  margin-left: -5%;
  margin-right: -5%;

  ${media.rgTabPort`
     margin-top:8.5%;
  `}
`;

export const SearchContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 107px;
`;

export const MentorCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${COLORS.OFFWHITE};
  margin-left: -5%;
  margin-right: -5%;
  padding-top: 7.8%;
  padding-bottom: 7.8%;
  height: 80%;
  min-height: 80%;

  ${media.custom1`
     height:auto;
     margin-bottom: 80px;
     min-height:auto;
     padding-top:10%;
     padding-bottom:10%;
  `}
`;
