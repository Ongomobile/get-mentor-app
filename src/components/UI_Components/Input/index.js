import React, { useState } from 'react';
import { InputContainer } from './input-styles';

const InputFloatLabel = ({
  name,
  value,
  type,
  label,
  onChange,
  onFocus,
  onBlur,
  setRef,
  ...props
}) => {
  const [focused, setFocused] = useState(false);

  const handleOnFocus = () => {
    setFocused(true);
    onFocus();
  };

  const handleOnBlur = () => {
    setFocused(false);
    onBlur();
  };

  const renderLabel = () => label && <label>{label}</label>;

  const isFocused = focused || String(value).length;

  return (
    <InputContainer focused={isFocused}>
      {renderLabel()}
      <input
        name={name}
        value={value}
        type={type}
        onChange={(e) => onChange(e)}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={(ref) => setRef(ref)}
        {...props}
      />
    </InputContainer>
  );
};
InputFloatLabel.defaultProps = {
  type: 'text',
  label: '',
  onChange: (text) => {
    console.error(`Missing onChange prop: ${text}`);
  },
  onFocus: () => {},
  onBlur: () => {},
  setRef: () => {},
};

export default InputFloatLabel;
