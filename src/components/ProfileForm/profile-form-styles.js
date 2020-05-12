import styled from 'styled-components';

export const ProfileHeader = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  padding-right: 4.2%;
  padding-left: 4.2%;
`;

export const ProfileHeaderContent = styled.div`
  position: relative;
  display: flex;
  padding-top: 16px;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileHeaderImgLink = styled.div`
  position: static;
  left: 0px;
  top: 0px;
`;

export const ProfileHeaderBtnWrap = styled.div`
  position: static;
  left: auto;
  top: 0px;
  right: 0px;
  bottom: auto;
  display: block;
  width: auto;
  max-width: 175px;
  justify-content: space-between;
`;
export const ProfileContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
// displayName added where you may want to see state more clearly in dev tools
ProfileContentWrapper.displayName = 'ProfileContentWrapper';

export const FormFieldWrapper = styled.div`
  display: block;
  width: 33.33%;
`;

export const LeftSideBar = styled.div`
  padding-top: 1%;
  position: relative;
  width: 33%;
`;

export const ProfilePicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileImage = styled.img`
  border-radius: 50%;
  max-width: 126px;
  max-height: 126px;
`;
export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  z-index: 700;
`;

export const UploadLink = styled.a`
  text-decoration: underline;
  margin-top: 20px;
`;

export const descFieldOveride = {
  height: '100px',
};
