import React from 'react';
import InputFloatLabel from '../Input';
import styled from 'styled-components';

export const FormWrapper = styled.form`
  padding: 40px;
  position: relative;
  width: 90%;
  margin: 0 auto;
  max-width: 350px;
`;

const SimpleForm = () => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  return (
    <FormWrapper>
      <InputFloatLabel
        label="email"
        type="email"
        value={state.email}
        onChange={(val) => setState({ ...state, email: val })}
      />
      <InputFloatLabel
        label="password"
        type="password"
        value={state.password}
        onChange={(val) => setState({ ...state, password: val })}
      />
      <InputFloatLabel
        label="username"
        type="text"
        value={state.username}
        onChange={(val) => setState({ ...state, username: val })}
      />
    </FormWrapper>
  );
};

export default SimpleForm;
