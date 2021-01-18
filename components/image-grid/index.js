import PropTypes from "prop-types";
import { Image } from "../../types";

const ImageGrid = ({ images }) => {
    const renderImages = () => {
        let chunkSize = 3;
        for (var i = 0; i < images.length; i += chunkSize) {
            var end = i + chunkSize;
            end = end > images.length ? images.length : end;
            return renderChunk(images.slice(i, end));
        }
    };

    const renderChunk = (imageSet) => {
        return imageSet.map((img, i) => {
            return (
                <div className="image-grid-column">
                    <img src={img.url} alt={img.alt} />
                </div>
            );
        });
    };

    return (
        <div className="image-grid">
            {renderImages()}
            {renderImages()}
        </div>
    );
};
ImageGrid.propTypes = {
    images: PropTypes.arrayOf(Image),
};
export default ImageGrid;
