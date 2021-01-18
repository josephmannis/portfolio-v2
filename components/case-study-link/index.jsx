import PropTypes from "prop-types";
import Link from "next/link";

const CaseStudyLink = ({ title, url }) => {
    return (
        <Link href={url}>
            <a className="project-link">{title}</a>
        </Link>
    );
};

CaseStudyLink.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default CaseStudyLink;
