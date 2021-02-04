import PropTypes from "prop-types";
import React from 'react'
import { Image } from "../../types";
import ImageModal from '../image-modal'

const ImageGrid = ({ images }) => {
    const isEven = () => images.length % 2 === 0 
    const renderImages = () => {
        let chunkSize = isEven() ? 4 : 3;
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
                <ImageModal image={img} key={i} isEven={isEven()}/>
            );
        });
    };

    return <div className="image-grid">{renderImages()}</div>;
};
ImageGrid.propTypes = {
    images: PropTypes.arrayOf(Image)
};
export default ImageGrid;
