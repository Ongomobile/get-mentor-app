import React from 'react';
import {
  AvatarWrapper,
  AvatarImg,
  AvatarName,
  AvatarTextWrapper,
  AvatarTitle,
} from './avatar-styles';
import DefaultImg from '../../../assets/images/no-img.png';

const Avatar = (props) => {
  return (
    <AvatarWrapper>
      <AvatarImg src={props.url || DefaultImg} />
      <AvatarTextWrapper>
        <AvatarName>{props.name}</AvatarName>
        <AvatarTitle>{props.title}</AvatarTitle>
      </AvatarTextWrapper>
    </AvatarWrapper>
  );
};

export default Avatar;
