import { Title } from "../Title/Title";
import {
  ButtonLogin,
  ButtonLoginText,
  ButtonRegistration,
  ButtonRegistrationText,
  WelcomeText,
  ButtonContainer,
  WelcomeContainer,
} from "./WelcomePage.styled";

export const WelcomePage = () => {
  return (
    <WelcomeContainer>
      <Title title="Welcome to the app!" />
      <WelcomeText>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </WelcomeText>
      <ButtonContainer>
        <ButtonRegistration type="button">
          <ButtonRegistrationText>Registration</ButtonRegistrationText>
        </ButtonRegistration>
        <ButtonLogin type="button">
          <ButtonLoginText>Sign In</ButtonLoginText>
        </ButtonLogin>
      </ButtonContainer>
    </WelcomeContainer>
  );
};
