import styled from 'styled-components';
import * as COLORS from '../../../constants/colors';
import { Search } from '@styled-icons/evaicons-solid/Search';
import media from '../../UI_Components/Media';

export const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: 100%;
  height: 100%;
  font-size: 20px;
  padding-left: 9.8%;
  border-radius: ${(props) => props.setRadius || '4px'};
  ::placeholder {
    color: ${(props) => props.setColor || `${COLORS.MEDIUMGREY}`};
  }
  ${media.lgPhPort`
    padding-left:15%;
  `}
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 18px;
  left: 18px;
  right: auto;
  bottom: auto;
  height: 24px;
  width: 24px;
  color: ${(props) => props.setColor || `${COLORS.MEDIUMGREY}`};
`;

export const SearchWrapper = styled.div`
  position: relative;
  height: ${(props) => props.setHeight || '60px'};
  width: ${(props) => props.setWidth || '47.2%'};
  background: ${(props) => props.setBG || 'White'};
  border-radius: ${(props) => props.setRadius || '4px'};
  margin: ${(props) => props.setMargin || '20px 0 0 0'};

  ${media.rgTabPort`
     width: 95% ;
  `}
`;
