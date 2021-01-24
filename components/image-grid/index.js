import PropTypes from "prop-types";
import { Image } from "../../types";

const ImageGrid = ({ images }) => {
    const renderImages = () => {
        let chunkSize = 3;
        let chunks = [];
        for (var i = 0; i < images.length; i += chunkSize) {
            var end = i + chunkSize;
            end = end > images.length ? images.length : end;
            chunks.push(renderChunk(images.slice(i, end)));
        }
        return chunks;
    };

    const renderChunk = (imageSet) => {
        return imageSet.map((img, i) => {
            return (
                <div key={i} className="image-grid-column">
                    <img src={img.url} alt={img.alt} />
                </div>
            );
        });
    };

    return <div className="image-grid">{renderImages()}</div>;
};
ImageGrid.propTypes = {
    images: PropTypes.arrayOf(Image),
};
export default ImageGrid;
