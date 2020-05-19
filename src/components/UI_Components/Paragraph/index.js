import styled from 'styled-components';
import * as COLORS from '../../../constants/colors';

export const StyledParagraph = styled.p`
  color: ${(props) => props.setColor || COLORS.BLACK};
  line-height: ${(props) => props.setLineHeight || 1.4};
  font-size: ${(props) => props.setFontSize || '20px'};
  font-family: ${(props) => props.setFontFamily || 'Inter'};
  margin: ${(props) => props.setMargin || '0 0 0 0'};
  font-weight: ${(props) => props.setFontWeight || 'regular'};
`;
