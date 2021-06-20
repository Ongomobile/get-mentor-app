import React from 'react';
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
        title: data.title,
        email: data.email,
        description: data.description,
        mentor: data.mentor,
        tags: data.tags,
        imgUrl: data.imgUrl,
        imgName: data.imgName,
        roles: data.roles,
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <AuthUserContext.Consumer>
      {(authUser) => {
        console.log('authUser', authUser);
        const userDetails = {
          id: authUser.uid,
          username: authUser.username,
          name: authUser.name,
          title: authUser.title,
          email: authUser.email,
          description: authUser.description,
          mentor: authUser.mentor,
          imgUrl: authUser.imgUrl,
          imgName: authUser.imgName,
          tags: authUser.tags,
          roles: authUser.roles,
        };

        return (
          <AccountContent>
            <Heading h1>Profile</Heading>
            <ProfileForm
              handleSaveClick={handleSaveClick}
              user={userDetails}
            />
          </AccountContent>
        );
      }}
    </AuthUserContext.Consumer>
  );
};

const authCondition = (authUser) => !!authUser;

export default compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(authCondition),
)(AccountPage);
