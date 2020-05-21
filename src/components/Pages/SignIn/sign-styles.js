import styled from 'styled-components';

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20%;
  @media screen and (max-width: 768px) {
    padding-bottom: 20%;
  }
`;

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const SignInFormWrapper = styled.form`
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

export const SignInContentWrapper = styled.div`
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
export const GoogleSignInBtn = styled.img`
  cursor: pointer;
`;

export const GoogleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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
export const SignInImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const StyledSpan = styled.span`
  text-align: center;
  margin-top: 40px;
`;

export const signBtnStyle = {
  height: '60px',
};

export const hdOveride = {
  marginLeft: '-3px',
};

export const Errors = styled.p`
  color: tomato;
  font-size: 20px;
`;
