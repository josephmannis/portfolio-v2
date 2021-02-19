import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import Banner from "components/banner/index";
import Checkerboard from "components/checkerboard";
import Quote from "components/quote";
import ImageGrid from "components/image-grid";
import { slices } from "types";

const CaseStudySection = ({ section }) => {
    const content = section.primary;

    const renderNext = () => {
        switch (section.slice_type) {
            case slices.title:
                return <RichText render={content.section_title} />;
            case slices.paragraph:
                return <RichText render={content.paragraph} />;
            case slices.checkerboard:
                console.log(content.checkerboard_image);
                return (
                    <Checkerboard
                        textLeft={content.text_left}
                        text={<RichText render={content.checkerboard_text} />}
                        image={content.checkerboard_image}
                    />
                );
            case slices.banner:
                return <Banner image={content.centered_image} />;
            case slices.quote:
                return (
                    <Quote text={<RichText render={content.quote_text} />} />
                );
            case slices.grid:
                return (
                    <ImageGrid
                        images={section.items.map((i) => i.grid_image)}
                    />
                );
            default:
                return <></>;
        }
    };

    return (
        <div
            className={
                section.slice_type === slices.title
                    ? "study-title"
                    : "study-section"
            }
        >
            {renderNext()}
        </div>
    );
};

export default CaseStudySection;
