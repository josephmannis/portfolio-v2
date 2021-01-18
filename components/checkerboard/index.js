import PropTypes from "prop-types";
import { Image } from "types";

const Checkerboard = ({ textLeft, text, image }) => {
    return (
        <div className={`checkerboard-${textLeft ? "left" : "right"}`}>
            <div className="checkerboard-text">{text}</div>
            <div className="checkerboard-image-wrapper">
                <img
                    className="checkerboard-image"
                    src={image.url}
                    alt={image.alt}
                />
            </div>
        </div>
    );
};

Checkerboard.propTypes = {
    textLeft: PropTypes.boolean,
    text: PropTypes.node,
    image: Image,
};

export default Checkerboard;
