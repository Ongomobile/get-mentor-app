import React from 'react';
import Card from '../Card';
import Avatar from '../Avatar';
import { StyledParagraph } from '../Paragraph';
import Button from '../Button';
import { ButtonWrapper, TextWrapper } from './user-card-styles';

function UserCard(props) {
  return (
    <Card>
      <Avatar url={props.url} name={props.name} title={props.title} />
      <p style={{ marginBottom: '10px' }}>Can help with</p>
      <TextWrapper>
        <StyledParagraph
          setMargin="0 0 10px 0"
          setFontWeight="bold"
          setFontSize="12px"
        >
          {props.tags ? props.tags.join(', ') : null}
        </StyledParagraph>
        <StyledParagraph setFontSize="12px">
          {props.description}
        </StyledParagraph>
      </TextWrapper>
      <ButtonWrapper>
        <Button primary onClick={props.handleClick}>
          Contact
        </Button>
      </ButtonWrapper>
    </Card>
  );
}

export default UserCard;
