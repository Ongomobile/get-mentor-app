import styled from 'styled-components';

export const StyledCard = styled.div`
  height: ${(props) => props.setHeight || '286px'};
  width: ${(props) => props.setWidth || '315px'};
  margin: ${(props) => props.setMargin || '10px'};
  padding: ${(props) => props.setPadding || '18px'};
  border-radius: ${(props) => props.setBorderRadius || '4px'};
  background-color: ${(props) => props.setBgColor || 'white'};
  box-shadow: ${(props) => props.setBoxShadow || 'none'};
`;
