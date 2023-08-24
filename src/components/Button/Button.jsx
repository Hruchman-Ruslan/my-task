import PropTypes from "prop-types";

export const Button = ({ buttonText }) => {
  return (
    <button>
      <p>{buttonText}</p>
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
};
