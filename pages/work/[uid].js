import { fetchCaseStudies, fetchDisplayedStudies } from "api/case-study";
import { RichText, Link, Date } from "prismic-reactjs";
import PropTypes from "prop-types";
import CaseStudySection from "components/case-study-section";
import CaseStudyFooter from "components/case-study-footer";
import Navigation from "../../components/nav";

const CaseStudy = ({
    title,
    technologies,
    description,
    startDate,
    figmaLink,
    repoLink,
    liveLink,
    body,
    next,
    previous,
}) => {
    const projectDate = Date(startDate);
    return (
        <div className="footer-base">
            <Navigation />
            <div className="main-content-container">
                <div className="case-study-container">
                    <div className="case-study-content">
                        <div className="project-information-container">
                            <RichText render={title} />
                            <div className="description-container">
                                <p className="project-information project-date">
                                    {projectDate &&
                                        `${projectDate.toLocaleString(
                                            "default",
                                            {
                                                month: "long",
                                            }
                                        )} 
                        ${projectDate.getFullYear()} |`}{" "}
                                    {RichText.asText(technologies)}
                                </p>
                            </div>
                            <div className="description-container">
                                <RichText render={description} />
                            </div>
                            <div className="description-container">
                                {repoLink && (
                                    <a
                                        className="nav-link"
                                        href={Link.url(repoLink)}
                                        target="_blank"
                                    >
                                        project repo
                                    </a>
                                )}
                                {liveLink && (
                                    <a
                                        className="nav-link"
                                        href={Link.url(liveLink)}
                                        target="_blank"
                                    >
                                        live site
                                    </a>
                                )}
                                {figmaLink && (
                                    <a
                                        className="nav-link"
                                        href={Link.url(figmaLink)}
                                        target="_blank"
                                    >
                                        figma link
                                    </a>
                                )}
                            </div>
                        </div>

                        {body &&
                            body.map((section, i) => (
                                <CaseStudySection key={i} section={section} />
                            ))}
                    </div>
                </div>
            </div>
            <CaseStudyFooter next={next} previous={previous} />
        </div>
    );
};

CaseStudy.propTypes = {
    title: PropTypes.array,
    technologies: PropTypes.array,
    description: PropTypes.array,
    startDate: PropTypes.string,
    body: PropTypes.array,
    liveLink: PropTypes.object,
    figmaLink: PropTypes.object,
    repoLink: PropTypes.object,
    role: PropTypes.array,
    next: PropTypes.string,
    previous: PropTypes.string,
};

const getWebLink = (link) => {
    return link && link.link_type !== "Any" ? link : null;
};

const getStudyLink = (uid) => {
    return uid ? `/work/${encodeURIComponent(uid)}` : null;
};

const getIndex = (studies, uid) => {
    return [...studies].findIndex((val) => val.uid === uid);
};

export async function getStaticProps({ params }) {
    const allDisplayed = await fetchDisplayedStudies();
    const allStudies = await fetchCaseStudies();
    const studyIndex = getIndex(allStudies, params.uid);
    const studyDisplayOrderIndex = getIndex(allDisplayed, params.uid);
    const study = allStudies[studyIndex];

    return {
        props: {
            title: study.data.title,
            technologies: study.data.technologies,
            description: study.data.quick_description,
            role: study.data.role,
            startDate: study.data.start_date,
            liveLink: getWebLink(study.data.live_link),
            figmaLink: getWebLink(study.data.figma_link),
            repoLink: getWebLink(study.data.repository_link),
            body: study.data.body,
            next: getStudyLink(allDisplayed[studyDisplayOrderIndex + 1]?.uid),
            previous: getStudyLink(
                allDisplayed[studyDisplayOrderIndex - 1]?.uid
            ),
        },
    };
}

export async function getStaticPaths() {
    const studies = await fetchCaseStudies();
    return {
        paths: studies.map((study) => `/work/${study.uid}`),
        fallback: false,
    };
}

export default CaseStudy;
