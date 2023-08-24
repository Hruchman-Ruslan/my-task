import PropTypes from "prop-types";

export const Link = ({ linkText }) => {
  return <a href="#">{linkText}</a>;
};

Link.propTypes = {
  linkText: PropTypes.string.isRequired,
};
