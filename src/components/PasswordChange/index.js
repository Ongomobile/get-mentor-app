import React, { useState } from 'react';
import { withFirebase } from '../Firebase';
import InputFloatLabel from '../UI_Components/Input';
import EyeIcon from '../../assets/images/eye.png';
import Button from '../UI_Components/Button';
import {
  PasswordWrapper,
  EyeIconImg,
} from './password-change-styles';

const PasswordChangeForm = (props) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (event) => {
    props.firebase
      .doPasswordUpdate(password)
      .then(() => {
        setPassword('');
        setError(null);
      })
      .catch((error) => {
        setError({ error });
      });
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };
  return (
    <form>
      <PasswordWrapper>
        <InputFloatLabel
          name="password"
          label="New Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handlePassword}
        />
        <EyeIconImg src={EyeIcon} onClick={togglePasswordVisiblity} />
      </PasswordWrapper>
      <Button primary onClick={() => onSubmit()}>
        Reset password
      </Button>
      {error && <p>{error.message}</p>}
    </form>
  );
};

export default withFirebase(PasswordChangeForm);
