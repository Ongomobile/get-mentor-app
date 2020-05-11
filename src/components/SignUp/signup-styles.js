import styled from 'styled-components';

export const SignUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20%;
  @media screen and (max-width: 768px) {
    margin-bottom: 40%;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 500px;
  @media screen and (max-width: 768px) {
    width: 80%;
    max-width: 80%;
  }
  @media screen and (max-width: 600px) {
    width: 90%;
    max-width: 95%;
  }
`;

export const Errors = styled.div`
  color: tomato;
  margin-bottom: 10px;
  height: 8px;
  font-size: 13px;
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const EyeIconImg = styled.img`
  position: absolute;
  top: 38px;
  right: 5px;
  z-index: 1000;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export const CheckboxWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 36px;
`;

export const GoogleSignUpBtn = styled.img`
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding-top: 8%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-top: 40px;
    justify-content: center;
    width: 80%;
  }
`;

export const RegisterImg = styled.img`
  max-width: 80%;
  max-height: 95%;
  margin-top: 3.5%;
`;

export const GoogleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
export const SignUpText = styled.p``;
//  @media screen and (max-width: 600px) {}

export const regBtnStyle = {
  width: '100%',
  height: 42,
  margin: 0,
};
export const hdOveride = {
  marginLeft: '-3px',
};
