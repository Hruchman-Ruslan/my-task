import styled from "@emotion/styled";

export const WelcomeContainer = styled.div`
  text-align: center;
  width: 400px;
`;

export const WelcomeText = styled.p`
  margin-bottom: 40px;

  color: #fafafa;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.36px;
`;

export const ButtonRegistration = styled.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  /* gap: 10px; */

  border-radius: 42px;
  background: #f3f3f3;
`;

export const ButtonRegistrationText = styled.p`
  color: #161f37;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;

export const ButtonLogin = styled.button`
  display: flex;
  padding: 14px 40px;
  align-items: flex-start;
  /* gap: 10px; */

  border-radius: 42px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
`;

export const ButtonLoginText = styled.p`
  color: #f3f3f3;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;
