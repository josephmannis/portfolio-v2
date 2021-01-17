import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import Banner from "components/banner/index";
import Checkerboard from "components/checkerboard";
import Quote from "components/quote";
import ImageGrid from "components/image-grid";

const CaseStudySection = ({ section }) => {
    const content = section.primary;

    const renderNext = () => {
        console.log(section.slice_type);

        switch (section.slice_type) {
            case "section_title":
                return <RichText render={content.section_title} />;
            case "paragraph":
                return <RichText render={content.paragraph} />;
            case "checkerboard":
                return (
                    <Checkerboard
                        textLeft={content.text_left}
                        text={<RichText render={content.checkerboard_text} />}
                        src={content.checkerboard_image.url}
                        alt={content.checkerboard_image.alt}
                    />
                );
            case "centered_image":
                return (
                    <Banner
                        src={content.centered_image.url}
                        alt={content.centered_image.alt}
                    />
                );
            case "quote":
                return <Quote>{RichText.asText(content.quote_text)}</Quote>;
            case "three_image_grid":
                return (
                    <ImageGrid
                        images={[
                            content.grid_image_one,
                            content.grid_image_two,
                            content.grid_image_three,
                        ]}
                    />
                );
            default:
                return <></>;
        }
    };

    return (
        <div
            className={
                section.slice_type === "paragraph" ? "" : "study-section"
            }
        >
            {renderNext()}
        </div>
    );
};

CaseStudySection.propTypes = {
    type: PropTypes.object.isRequired,
};
export default CaseStudySection;
