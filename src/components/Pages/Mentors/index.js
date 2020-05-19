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
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [mentors, setMentors] = useState([]);
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setLoading(true);
    props.firebase.users().on('value', (snapshot) => {
      const requestObject = snapshot.val();

      if (requestObject) {
        const userList = Object.keys(requestObject).map((key) => ({
          ...requestObject[key],
          uid: key,
        }));
        userList.forEach((user) => {
          if (user.mentor) {
            setMentors((mentors) => [...mentors, user]);
            setLoading(false);
          }
        });
      }
    });
  }, [props.firebase]);

  const getUserTags = (user) => {
    const tags = [];
    let tagsObj = user.tags;
    const tagList = Object.values(tagsObj);
    tagList.forEach((tagText) => {
      tags.push(tagText.text);
    });
    return tags;
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
        <MentorCardWrapper>
          {loading && <Loader />}
          {mentors.map((mentor) => {
            const userTags = [];
            let tagsObj = mentor.tags;
            const tagList = Object.values(tagsObj);
            tagList.forEach((tagText) => {
              userTags.push(tagText.text);
            });
            return (
              <UserCard
                key={mentor.uid}
                url={mentor.imgUrl}
                name={mentor.name}
                description={mentor.description}
                title={mentor.title}
                tags={userTags}
              />
            );
          })}
        </MentorCardWrapper>
      </MentorsContent>
    </>
  );
};

export default withFirebase(MentorsPage);
