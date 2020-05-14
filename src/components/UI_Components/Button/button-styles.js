import styled, { css } from 'styled-components';
import * as COLORS from '../../../constants/colors';

export const StyledButton = styled.button`
  border-radius: 4px;
  background-color: ${(props) =>
    props.primary ? COLORS.PRIMARY : '#ffffff'};
  color: ${COLORS.BLACK};
  padding: 12px 14px;
  font-size: ${(props) => (props.big ? '18px' : '14px')};
  font-family: 'Inter';
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  ${(props) => {
    return (
      props.inverse &&
      css`
        background-color: #fff;
        border: 2px solid #2a3844;
        &:hover {
          border: none;
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.hidemobile &&
      css`
        @media screen and (max-width: 600px) {
          display: none;
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.hidedesktop &&
      css`
        display: none;
        @media screen and (max-width: 600px) {
          display: block;
        }
      `
    );
  }}

  &:hover {
    background-color: ${COLORS.DARKGREY};
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
