import React from 'react';
import Card from '../Card';
import Avatar from '../Avatar';
import { StyledParargaph, StyledParagraph } from '../Paragraph';
import Button from '../Button';
import { ButtonWrapper } from './user-card-styles';

function UserCard(props) {
  return (
    <Card>
      <Avatar url={props.url} name={props.name} title={props.title} />
      <p style={{ marginBottom: '10px' }}>Can help with</p>
      <StyledParagraph setFontSize="12px">
        {props.description}
      </StyledParagraph>
      <ButtonWrapper>
        <Button primary onClick={props.handleClick}>
          Contact
        </Button>
      </ButtonWrapper>
    </Card>
  );
}

export default UserCard;
