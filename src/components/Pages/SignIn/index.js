import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../../PasswordForget';

import { withFirebase } from '../../Firebase';
import * as ROUTES from '../../../constants/routes';
import {
  SignInWrapper,
  SignInFormWrapper,
  SignInContentWrapper,
  SignInText,
  PasswordWrapper,
  StyledSpan,
  GoogleSignInBtn,
  GoogleBtnWrapper,
  ImgWrapper,
  SignInImg,
  hdOveride,
} from './sign-styles';
import InputFloatLabel from '../../UI_Components/Input';
import { EyeIconImg } from '../SignUp/signup-styles';
import EyeIcon from '../../../assets/images/eye.png';
import Button from '../../UI_Components/Button';
import Heading from '../../UI_Components/Heading';
import GoogleSignIn from '../../../assets/svgs/google-sign-in.svg';
import SignInSvg from '../../../assets/svgs/SIGNIN.svg';
const SignInPage = () => (
  <div>
    <SignInWrapper>
      <SignInForm />
    </SignInWrapper>
  </div>
);

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

// Steps to convert stateful components into functional components see CHANGES below

// CHANGE 1 we will use hooks to manage or initial state in component
// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   error: null,
// };

// CHANGE 2 convert to functional component I prefer arrow functions in this case.
const SignInFormBase = (props) => {
  //CHANGE 3 we will manage our initial state with hooks notice we set default values here
  // constructor(props) {
  //   super(props);

  //   this.state = { ...INITIAL_STATE };
  // }
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    checked: false,
  });
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  //CHANGE 4 need to declare methods as a constant also note how we destructered below
  const onSubmit = (event) => {
    const { email, password } = formState;

    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      // CHANGE 5 this is how we handle the promise we are just resetting to initial formState here.
      .then(() => {
        setFormState({
          email: '',
          password: '',
        });
        props.history.push(ROUTES.HOME);
      })
      // .then(() => {
      //   this.setState({ ...INITIAL_STATE });
      //   this.props.history.push(ROUTES.HOME);
      // })
      .catch((error) => {
        //CHANGE 6  set the error state
        // this.setState({ error });
        console.log(error);
        setError(error);
      });

    event.preventDefault();
  };

  const onChange = (event) => {
    //CHANGE 7 refactor to use our state managed in hooks
    // this.setState({ [event.target.name]: event.target.value });
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  //CHANGE 8 there is no render method in functional components just return

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  const isInvalid =
    formState.password === '' || formState.email === '';
  //CHANGE 9 we no longer need this keyord to refer to methods in an arrow function
  //that is one of the nice features that you get in an arrow function
  return (
    <SignInContentWrapper>
      <SignInFormWrapper onSubmit={onSubmit}>
        <Heading style={hdOveride} h1>
          Log in
        </Heading>
        <SignInText>
          Welcome back to Namjai!
          <br />
          Remember that you can always switch between mentor or user
          role in your profile panel.
        </SignInText>
        <InputFloatLabel
          name="email"
          label="Email"
          type="email"
          value={formState.email}
          onChange={onChange}
        />
        <PasswordWrapper>
          <InputFloatLabel
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={formState.password}
            onChange={onChange}
          />
          <EyeIconImg
            src={EyeIcon}
            onClick={togglePasswordVisiblity}
          />
        </PasswordWrapper>
        <PasswordForgetLink />
        <Button disabled={isInvalid} primary type="submit">
          Sign In
        </Button>
        {error && <p>{error.message}</p>}
        <StyledSpan>Or</StyledSpan>
        <SignInGoogle />
        {error && <p>{error.message}</p>}
        <SignUpLink />
      </SignInFormWrapper>
      <ImgWrapper>
        <SignInImg src={SignInSvg} />
      </ImgWrapper>
    </SignInContentWrapper>
  );
};

const SignInGoogleBase = (props) => {
  const [error, setError] = useState(null);

  const onSubmit = (event) => {
    props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then((socialAuthUser) => {
        setError({ error: null });
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }
        setError({ error });
      });
  };
  const handleGoogleClicked = () => {
    onSubmit();
  };
  return (
    <GoogleBtnWrapper>
      <GoogleSignInBtn
        src={GoogleSignIn}
        onClick={handleGoogleClicked}
      />
      {error && <p>{error.message}</p>}
    </GoogleBtnWrapper>
  );
};

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);

export default SignInPage;

export { SignInForm, SignInGoogle };
