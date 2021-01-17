import PropTypes from "prop-types";
import { Image } from "../../types";

const ImageGrid = () => {
    return <>image grid</>;
};
ImageGrid.propTypes = {
    images: PropTypes.arrayOf(Image),
};
export default ImageGrid;
