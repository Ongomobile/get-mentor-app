import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import * as COLORS from '../../../constants/colors';

export const LinkStyle = styled(Link)`
  color: ${(props) => props.setColor || `${COLORS.BLACK}`};
  &:hover {
    color: ${(props) => props.setHoverColor || `${COLORS.PRIMARY}`};
  }
`;
