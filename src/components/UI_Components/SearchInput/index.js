import React from 'react';
import {
  Input,
  SearchIcon,
  SearchWrapper,
} from './search-input-styles';

const SearchInput = (props) => {
  return (
    <>
      <SearchWrapper>
        <Input
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
        />
        <SearchIcon onClick={props.onClick} />
      </SearchWrapper>
    </>
  );
};

export default SearchInput;
