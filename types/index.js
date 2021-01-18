import PropTypes from "prop-types";

export const slices = {
    title: "section_title",
    paragraph: "paragraph",
    checkerboard: "checkerboard",
    banner: "centered_image",
    quote: "quote",
    grid: "three_image_grid",
};

export const Image = PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string,
});
