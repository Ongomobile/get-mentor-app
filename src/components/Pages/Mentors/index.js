import React, { useState } from 'react';
import {
  MentorsContent,
  SearchBarWrapper,
  SearchContent,
} from './mentor-styles';
import Heading from '../../UI_Components/Heading';
import SearchInput from '../../UI_Components/SearchInput';

const MentorsPage = (props) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <MentorsContent>
        <SearchBarWrapper>
          <SearchContent>
            <Heading h5>Search for mentors</Heading>
            <SearchInput
              name="search"
              placeholder="Search topics"
              value={query}
              onChange={handleChange}
              tabWidth="5%"
            />
          </SearchContent>
        </SearchBarWrapper>
        <Heading h1>Mentors Page</Heading>
      </MentorsContent>
    </>
  );
};

export default MentorsPage;
