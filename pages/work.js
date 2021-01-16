import Navigation from "../components/nav";
import PropTypes from "prop-types";
import CaseStudyLink from "../components/case-study-link";
import { fetchCaseStudies } from "api/case-study";

export const Work = ({ caseStudies }) => {
    return (
        <div className="main-content-container">
            <Navigation />
            <div className="work-links">
                {caseStudies.map((study, i) => (
                    <CaseStudyLink key={i} {...study} />
                ))}
                <div>
                    <a className="work-link" id="archive" href="./archive.html">
                        archive
                    </a>
                </div>
            </div>
        </div>
    );
};

Work.propTypes = {
    caseStudies: PropTypes.arrayOf(
        PropTypes.objectOf({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ),
};

export async function getStaticProps() {
    const studies = await fetchCaseStudies();
    return {
        props: {
            caseStudies: studies.map((study) => {
                return {
                    title: study.data.title[0].text,
                    url: `/work/${encodeURIComponent(study.uid)}`,
                };
            }),
        },
    };
}

export default Work;
