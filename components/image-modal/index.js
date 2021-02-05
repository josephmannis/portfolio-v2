import React from 'react'
import useScrollLock from 'use-scroll-lock';
import Modal from 'react-modal';

const ImageModal = ({image, isEven}) => {
    const [popOver, togglePopover] = React.useState(false);

    useScrollLock(popOver)

    const onExpand = () => {
        togglePopover(!popOver)
    }

    const customStyles = {
        overlay: {
            backgroundColor: "#0c0c0cbe"
        },
        content: {
            background: "transparent",
            border: 'none'
        }
    };

    return (
        <>
            <button onClick={onExpand} className={`image-grid-${isEven ? 'even' : 'odd'}`}>
                <img src={image.url} alt={image.alt} />
            </button>

            <Modal
                style={customStyles}
                onRequestClose={onExpand}
                isOpen={popOver}
                shouldCloseOnOverlayClick
                shouldCloseOnEsc
            >
                <div onClick={onExpand} className="popover-image-full">
                    <img src={image.url} alt={image.alt} />
                </div> 
            </Modal>
        
        </>
    )
}

export default ImageModal;