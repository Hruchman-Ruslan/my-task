import { RegistrationForm } from 'components/Registration/Registration';
// import { WelcomePage } from 'components/WelcomePage/WelcomePage';
import { Container } from 'styles/Container.styled';
import { SectionRegistration, SectionWelcome } from 'styles/Section.styled';

function App() {
  return (
    <Container>
      {/* <SectionWelcome>
        <WelcomePage />
      </SectionWelcome> */}
      <SectionRegistration>
        <RegistrationForm />
      </SectionRegistration>
      {/* <LoginForm /> */}
    </Container>
  );
}

export default App;
