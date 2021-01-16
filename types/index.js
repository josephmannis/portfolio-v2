import PropTypes from "prop-types";

export const Image = PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
});
