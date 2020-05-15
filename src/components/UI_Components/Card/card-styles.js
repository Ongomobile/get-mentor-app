import styled from 'styled-components';

export const StyledCard = styled.div`
  height: ${(props) => props.setHeight || '100%'};
  max-height: ${(props) => props.setMaxHeight || '400px'};
  width: ${(props) => props.setWidth || '315px'};
  margin: ${(props) => props.setMargin || '10px'};
  padding: ${(props) => props.setPadding || '24px'};
  border-radius: ${(props) => props.setBorderRadius || '4px'};
  background-color: ${(props) => props.setBgColor || 'white'};
  box-shadow: ${(props) => props.setBoxShadow || 'none'};
`;
