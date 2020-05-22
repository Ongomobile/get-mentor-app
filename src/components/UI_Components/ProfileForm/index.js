import React, { useState, useEffect } from 'react';
import { withFirebase } from '../../Firebase';
import {
  ProfileContentWrapper,
  FormFieldWrapper,
  LeftSideBar,
  ProfilePicWrapper,
  CheckboxWrapper,
  ProfileImage,
  descFieldOveride,
  UploadLink,
  TagsTitle,
  SaveBtnWrapper,
} from './profile-form-styles';
import Button from '../Button';
import InputFloatLabel from '../Input';
import TextAreaFloatLabel from '../TextArea';
import DefaultImg from '../../../assets/images/no-img.png';
import Heading from '../Heading';
import CheckBox from '../Checkbox';
import TagsUi from '../TagsUi';
import PasswordChangeForm from '../../PasswordChange';

const ProfileForm = (props) => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [isMentor, setIsMentor] = useState(false);
  const [checked, setChecked] = useState(false);
  const [profileDetails, setProfileDetails] = useState({
    userId: props.user.id,
    username: props.user.username || '',
    name: props.user.name || '',
    title: props.user.title || '',
    email: props.user.email || '',
    description: props.user.description || '',
    mentor: props.user.mentor || false,
    tags: props.user.tags || [],
    imgUrl: props.user.imgUrl || null,
    roles: props.user.roles,
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
  }, [props.user]);

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
              <span style={{ marginLeft: 8 }}>Appear as mentor</span>
            </label>
          </CheckboxWrapper>
        </LeftSideBar>
        <FormFieldWrapper>
          <SaveBtnWrapper>
            <Button
              primary
              onClick={() => props.handleSaveClick(profileDetails)}
            >
              Save Profile Details
            </Button>
          </SaveBtnWrapper>
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
            name="title"
            label="Title"
            type="text"
            value={profileDetails.title}
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
          <TagsTitle>Tags (enter tag & press space)</TagsTitle>
          <TagsUi
            currentTags={profileDetails.tags}
            getTags={getTagEntered}
          />
          <Heading style={{ marginTop: '13px' }} h4>
            Change Password
          </Heading>
          <PasswordChangeForm />
        </FormFieldWrapper>
      </ProfileContentWrapper>
    </>
  );
};

export default withFirebase(ProfileForm);
