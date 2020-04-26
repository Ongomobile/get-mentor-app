import React, { useState, useEffect } from 'react';
import { compose } from 'recompose';
import {
  withAuthorization,
  withEmailVerification,
  AuthUserContext,
} from '../Session';

import { HomePageContainer, HomePageHeading } from './home-styles';
import { withFirebase } from '../Firebase';

const HomePage = () => {
  return (
    <div>
      <HomePageContainer>
        <HomePageHeading>
          Home Page is accessible by signed in user
        </HomePageHeading>
        <HelpRequests />
      </HomePageContainer>
    </div>
  );
};

const RequestsBase = (props) => {
  const [loading, setLoading] = useState(false);
  const [helpRequests, setHelpRequests] = useState([]);
  const [requestText, setRequestText] = useState('');

  useEffect(() => {
    setLoading(true);
    props.firebase.helpRequests().on('value', (snapshot) => {
      const requestObject = snapshot.val();

      if (requestObject) {
        const requestList = Object.keys(requestObject).map((key) => ({
          ...requestObject[key],
          uid: key,
        }));
        setHelpRequests(requestList);
        setLoading(false);
      } else {
        setHelpRequests(null);
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    props.firebase.helpRequest().off();
  }, []);

  const RequestList = ({ helpRequests }) => {
    return (
      <ul>
        {helpRequests.map((request) => (
          <RequestItem key={request.uid} request={request} />
        ))}
      </ul>
    );
  };

  const RequestItem = ({ request }) => {
    return (
      <li>
        <strong>USER ID: {request.userId}</strong> Requested:{' '}
        {request.requestText}
      </li>
    );
  };

  const onCreateRequest = (event, authUser) => {
    props.firebase.helpRequests().push({
      requestText: requestText,
      userId: authUser.uid,
    });
    setRequestText('');
    event.preventDefault();
  };

  const onChangeText = (event) => {
    setRequestText(event.target.value);
  };

  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <h3>Request Help Topic</h3>
          {loading && <div>Loading ...</div>}
          {helpRequests ? (
            <RequestList helpRequests={helpRequests} />
          ) : (
            <div>There are no requests ...</div>
          )}
          <form
            onSubmit={(event) => onCreateRequest(event, authUser)}
          >
            <input
              type="text"
              value={requestText}
              onChange={onChangeText}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
};

const HelpRequests = withFirebase(RequestsBase);

const condition = (authUser) => !!authUser;
export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(HomePage);
