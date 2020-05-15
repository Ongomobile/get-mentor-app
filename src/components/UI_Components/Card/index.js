import React from 'react';
import { StyledCard } from './card-styles';

const Card = (props) => {
  return <StyledCard>{props.children}</StyledCard>;
};

export default Card;
