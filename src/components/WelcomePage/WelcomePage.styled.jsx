import styled from '@emotion/styled';

export const WelcomeContainer = styled.div`
  display: inline-block;
  text-align: center;
  max-width: 319px;

  @media screen and (min-width: 768px) {
    text-align: start;
    max-width: 470px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 485px;
  }
`;

export const WelcomeText = styled.p`
  margin-bottom: 40px;

  color: #fafafa;
  text-align: center;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;

export const ButtonRegistration = styled.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 42px;
  background: #f3f3f3;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
  }
`;

export const ButtonRegistrationText = styled.p`
  color: #161f37;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */

  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonLogin = styled.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;

  @media screen and (min-width: 768px) {
    padding: 18px 44px;
  }
`;

export const ButtonLoginText = styled.p`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */

  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

// @media screen and (min-width:480px) {
//       width: 480px;
//   }

// @media screen and (min-width:768px) {
//     width: 768px;
// }

// @media screen and (min-width:1440px) {
//     width: 1200px;
// }
