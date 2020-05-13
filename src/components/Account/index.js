import React, { useState } from 'react';
import { AuthUserContext } from '../Session';
import { withFirebase } from '../Firebase';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import PageContainer from '../PageContainer';
import { AccountContent } from './account-styles';
import Button from '../UI_Components/Button';
import Modal from '../UI_Components/Modal';
import ProfileForm from '../ProfileForm';
import Heading from '../UI_Components/Heading';

const AccountPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSaveClick = (profileDetails) => {
    handleClose();
    updateUserData(profileDetails);
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
        <div>
          {isOpen && (
            <Modal
              setHeight={'850px'}
              setWidth={'90vw'}
              setMargin={'2% auto'}
              setPadding={'13% 4.2% 0 4.2%'}
            >
              <ProfileForm
                close={handleClose}
                handleSaveClick={handleSaveClick}
                user={authUser}
              />
            </Modal>
          )}
          <PageContainer>
            <AccountContent>
              <Heading h1>Account: {authUser.email}</Heading>
              <Button primary onClick={() => setIsOpen(true)}>
                Update Profile
              </Button>
              <Heading h4>Change Password</Heading>
              <PasswordChangeForm />
              <Heading h4>Forgot Password</Heading>
              <PasswordForgetForm />
            </AccountContent>
          </PageContainer>
        </div>
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
