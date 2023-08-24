// import { LoginForm } from "./components/Login/Login";
// import { RegistrationForm } from "./components/Registration/Registration";
import { WelcomePage } from 'components/WelcomePage/WelcomePage';
import { Container } from 'styles/Container.styled';
import { Section } from 'styles/Section.styled';

function App() {
  return (
    <Container>
      <Section>
        <WelcomePage />
        {/* <RegistrationForm />
      <LoginForm /> */}
      </Section>
    </Container>
  );
}

export default App;

// background: linear-gradient(
//     0deg,
//     rgba(10, 10, 17, 0.2) 0%,
//     rgba(10, 10, 17, 0.2) 100%
//   ),
//   linear-gradient(2deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
//   linear-gradient(85deg, #0a0a11 0%, rgba(10, 10, 17, 0) 100%),
//   url("/src/assets/mob.jpg"), lightgray -3px -13.319px / 100.511% 101.679%;

// background-repeat: no-repeat;
// background-position: right;
// background-size: contain;
