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
