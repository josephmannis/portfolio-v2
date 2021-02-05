import PropTypes from "prop-types";
import { Image } from "types";
import ImageModal from "../image-modal";

const Checkerboard = ({ textLeft, text, image }) => {
    return (
        <div className={`checkerboard-${textLeft ? "left" : "right"}`}>
            <div className="checkerboard-text">{text}</div>
            <div className="checkerboard-image-wrapper">
                <ImageModal
                    imageClass="checkerboard-image"
                    image={image}
                />
            </div>
        </div>
    );
};

Checkerboard.propTypes = {
    textLeft: PropTypes.bool,
    text: PropTypes.node,
    image: Image,
};

export default Checkerboard;
