import styled from '@emotion/styled';

export const WelcomeButton = styled.button`
  display: flex;
  max-width: 335px;
  padding: 18px 141px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;

  border-radius: 42px;
  background: #f3f3f3;

  margin: 0 auto;

  /* @media screen and (min-width: 768px) {
    text-align: start;
    max-width: 470px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 485px;
  } */
`;

export const WelcomeButtonText = styled.p`
  color: #161f37;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */

  margin: 0;

  /* @media screen and (min-width: 768px) {
    text-align: start;
    max-width: 470px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 485px;
  } */
`;
