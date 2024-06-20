import propTypes from "prop-types";

function Empty({ resource }) {
  return <p>Page is under construction</p>;
}

export default Empty;

Empty.propTypes = {
  resource: propTypes.string.isRequired,
};
