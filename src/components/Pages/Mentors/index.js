import React, { useState, useEffect } from 'react';
import { withFirebase } from '../../Firebase';
import {
  MentorsContent,
  SearchBarWrapper,
  SearchContent,
  MentorCardWrapper,
} from './mentor-styles';
import Heading from '../../UI_Components/Heading';
import SearchInput from '../../UI_Components/SearchInput';
import Loader from '../../UI_Components/Loader';
import UserCard from '../../UI_Components/UserCard';

const MentorsPage = (props) => {
  const [query, setQuery] = useState('');
  const [mentors, setMentors] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const getMentors = (props) => {
    props.firebase.users().on('value', (snapshot) => {
      const requestObject = snapshot.val();

      if (requestObject) {
        const userList = Object.keys(requestObject).map((key) => ({
          ...requestObject[key],
          uid: key,
        }));
        userList.forEach((user) => {
          if (user.mentor) {
            setMentors(user);
          }
        });
      }
    });
  };

  useEffect(() => {
    getMentors(props);
  }, [props]);

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
        <MentorCardWrapper></MentorCardWrapper>
      </MentorsContent>
    </>
  );
};

export default withFirebase(MentorsPage);
