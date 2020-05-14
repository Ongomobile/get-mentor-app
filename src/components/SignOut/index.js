import React from 'react';
import { withFirebase } from '../Firebase';
import Button from '../UI_Components/Button';

const SignOutButton = ({ firebase }) => (
  <Button primary onClick={firebase.doSignOut}>
    Log Out
  </Button>
);
export default withFirebase(SignOutButton);
