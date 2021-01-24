import PropTypes from "prop-types";
import ImageGrid from "../../components/image-grid";
import Navigation from "../../components/nav";
import { Image } from "../../types";
import { getArchive } from "../api/case-study";

const Archive = ({ images }) => {
    return (
        <>
            <Navigation />
            <div className="main-content-container">
                <div className="case-study-container">
                    <div className="archive-content">
                        <ImageGrid images={images} />
                    </div>
                </div>
            </div>
        </>
    );
};

Archive.propTypes = {
    images: PropTypes.arrayOf(Image),
};

export async function getStaticProps() {
    const archive = await getArchive();
    return {
        props: {
            images: archive.data.image_grid.map((i) => {
                return { url: i.image.url, alt: i.image.alt };
            }),
        },
    };
}

export default Archive;
