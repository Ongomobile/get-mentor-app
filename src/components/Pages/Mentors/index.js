import React from 'react';
import { MentorsContent } from './mentor-styles';
import PageContainer from '../../PageContainer';
import Heading from '../../UI_Components/Heading';

const MentorsPage = () => {
  return (
    <PageContainer>
      <MentorsContent>
        <Heading h1>Mentors Page</Heading>
      </MentorsContent>
    </PageContainer>
  );
};

export default MentorsPage;
