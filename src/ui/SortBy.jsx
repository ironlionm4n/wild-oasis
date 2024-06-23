import propTypes from "prop-types";

function SortBy({ options }) {
  return <div>Sort By</div>;
}

export default SortBy;

SortBy.propTypes = {
  options: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string,
    })
  ).isRequired,
};
