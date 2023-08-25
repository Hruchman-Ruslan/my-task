import PropTypes from 'prop-types';
import { WelcomeButtonText, WelcomeButton } from './Button.styled';

export const Button = ({ buttonText }) => {
  return (
    <WelcomeButton>
      <WelcomeButtonText>{buttonText}</WelcomeButtonText>
    </WelcomeButton>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
