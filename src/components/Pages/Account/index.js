import React, { useState } from 'react';
import { AuthUserContext } from '../../Session';
import { withFirebase } from '../../Firebase';
import { compose } from 'recompose';
import {
  withAuthorization,
  withEmailVerification,
} from '../../Session';
import { AccountContent } from './account-styles';
import ProfileForm from '../../UI_Components/ProfileForm';
import Heading from '../../UI_Components/Heading';

const AccountPage = (props) => {
  const handleSaveClick = (profileDetails) => {
    updateUserData(profileDetails);
    alert('Profile Details Saved');
  };

  const updateUserData = (data) => {
    const Id = data.userId;
    props.firebase.db
      .ref(`users/${Id}`)
      .set({
        username: data.username,
        name: data.name,
        email: data.email,
        description: data.description,
        mentor: data.mentor,
        tags: data.tags,
        imgUrl: data.imgUrl,
        roles: data.roles,
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <AccountContent>
          <Heading h1>Profile</Heading>
          <ProfileForm
            handleSaveClick={handleSaveClick}
            user={authUser}
          />
        </AccountContent>
      )}
    </AuthUserContext.Consumer>
  );
};

const authCondition = (authUser) => !!authUser;

export default compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(authCondition),
)(AccountPage);
