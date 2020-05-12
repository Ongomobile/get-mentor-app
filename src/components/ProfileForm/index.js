import React, { useState, useEffect } from 'react';
import { withFirebase } from '../Firebase';
import {
  ProfileHeader,
  ProfileHeaderContent,
  ProfileHeaderImgLink,
  ProfileHeaderBtnWrap,
  ProfileContentWrapper,
  FormFieldWrapper,
  LeftSideBar,
  ProfilePicWrapper,
  CheckboxWrapper,
  ProfileImage,
  descFieldOveride,
  UploadLink,
  HeadingWrapper,
  TagsTitle,
} from './profile-form-styles';
import PageContainer from '../PageContainer';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg';
import Button from '../UI_Components/Button';
import InputFloatLabel from '../UI_Components/Input';
import TextAreaFloatLabel from '../UI_Components/TextArea';
import DefaultImg from '../../assets/images/no-img.png';
import Heading from '../UI_Components/Heading';
import CheckBox from '../UI_Components/Checkbox';
import TagsUi from '../UI_Components/TagsUi';

const ProfileForm = (props) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [isMentor, setIsMentor] = useState(false);
  const [checked, setChecked] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    userId: props.user.uid,
    username: props.user.username || '',
    name: props.user.name || '',
    email: props.user.email || '',
    description: props.user.description || '',
    mentor: props.user.mentor || false,
    tags: props.user.tags || [],
    imgUrl: props.user.imgUrl || null,
  });

  useEffect(() => {
    if (props.user.mentor) {
      setChecked(true);
    }
    if (props.user.tags) {
      setProfileDetails({
        ...profileDetails,
        tags: props.user.tags,
      });
    }
    if (props.user.imgUrl) {
      const proPicUrl = props.user.imgUrl;
      setProfileDetails({
        ...profileDetails,
        imgUrl: props.user.imgUrl,
      });
      setUrl(proPicUrl);
    }
  }, []);
  const handleCheckboxChange = () => {
    setChecked(!checked);
    if (checked === false) {
      setProfileDetails({
        ...profileDetails,
        mentor: true,
      });
    }
    if (checked === true) {
      setProfileDetails({
        ...profileDetails,
        mentor: false,
      });
    }
  };

  const getTagEntered = (titles) => {
    setProfileDetails({
      ...profileDetails,
      tags: titles,
    });
  };

  const handleDetails = (e) => {
    setProfileDetails({
      ...profileDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleImgLinkClick = (e) => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };
  const changeImage = (e) => {
    try {
      if (e.target.files[0]) {
        const newImage = e.target.files[0];
        setImage(newImage);
        handleUpload(newImage);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload = (image) => {
    const uploadTask = props.firebase.storage
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        props.firebase.storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setUrl(url);
            setProfileDetails({
              ...profileDetails,
              imgUrl: url,
            });
          });
      },
    );
  };

  return (
    <>
      <ProfileHeader>
        <ProfileHeaderContent>
          <ProfileHeaderImgLink>
            <Link to={ROUTES.LANDING}>
              <Logo />
            </Link>
          </ProfileHeaderImgLink>
          <ProfileHeaderBtnWrap>
            <Button onClick={() => props.close()}>Cancel</Button>
            <Button
              primary
              onClick={() => props.handleSaveClick(profileDetails)}
            >
              Save
            </Button>
          </ProfileHeaderBtnWrap>
        </ProfileHeaderContent>
      </ProfileHeader>
      <PageContainer>
        <HeadingWrapper>
          <Heading h1>Profile</Heading>
        </HeadingWrapper>
        <ProfileContentWrapper>
          <LeftSideBar>
            <ProfilePicWrapper>
              <ProfileImage src={`${url}` || DefaultImg} />
              <UploadLink onClick={handleImgLinkClick}>
                Change Photo
              </UploadLink>
              <input
                id="imageInput"
                style={{
                  display: 'none',
                }}
                type="file"
                onChange={changeImage}
              />
            </ProfilePicWrapper>
            <CheckboxWrapper>
              <label style={{ marginTop: '20px' }}>
                <CheckBox
                  checked={checked}
                  isMentor={isMentor}
                  onChange={handleCheckboxChange}
                />
                <span style={{ marginLeft: 8 }}>
                  Appear as mentor
                </span>
              </label>
            </CheckboxWrapper>
          </LeftSideBar>
          <FormFieldWrapper>
            <InputFloatLabel
              name="username"
              label="Username"
              type="text"
              value={profileDetails.username}
              onChange={handleDetails}
            />
            <InputFloatLabel
              name="name"
              label="Name"
              type="text"
              value={profileDetails.name}
              onChange={handleDetails}
            />
            <InputFloatLabel
              name="email"
              label="Email"
              type="email"
              value={profileDetails.email}
              onChange={handleDetails}
            />
            <TextAreaFloatLabel
              style={descFieldOveride}
              name="description"
              label="Description"
              type="text"
              value={profileDetails.description}
              onChange={handleDetails}
            />
            <TagsTitle>
              Tags (so people can find you easily)
            </TagsTitle>
            <TagsUi
              currentTags={profileDetails.tags}
              getTags={getTagEntered}
            />
            <TagsTitle>Enter tag and press space</TagsTitle>
          </FormFieldWrapper>
        </ProfileContentWrapper>
      </PageContainer>
    </>
  );
};

export default withFirebase(ProfileForm);
