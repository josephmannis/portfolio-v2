import React from 'react'
import useScrollLock from 'use-scroll-lock';

const ImageModal = ({image, isEven}) => {
    const [popOver, togglePopover] = React.useState(false);

    useScrollLock(popOver)

    const onExpand = () => {
        togglePopover(!popOver)
    }

    

    return (
        <>
            <button onClick={onExpand} className={`image-grid-${isEven ? 'even' : 'odd'}`}>
                <img src={image.url} alt={image.alt} />
            </button>

            { popOver &&
                <div onClick={onExpand} className="popover-bg">
                    {/* <button onClick={onExpand} className="popover-image-full">
                        <img src={image.url} alt={image.alt} />
                    </button> */}
                </div>
            }
        </>
    )
}

export default ImageModal;