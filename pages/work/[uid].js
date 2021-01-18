import { fetchCaseStudies } from "api/case-study";
import { RichText, Link, Date } from "prismic-reactjs";
import util from "util";
import PropTypes from "prop-types";
import CaseStudySection from "components/case-study-section";
import CaseStudyFooter from "components/case-study-footer";

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
    role,
}) => {
    const projectDate = Date(startDate);
    return (
        <>
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
                                    >
                                        project repo
                                    </a>
                                )}
                                {liveLink && (
                                    <a
                                        className="nav-link"
                                        href={Link.url(liveLink)}
                                    >
                                        live site
                                    </a>
                                )}
                                {figmaLink && (
                                    <a
                                        className="nav-link"
                                        href={Link.url(figmaLink)}
                                    >
                                        figma repo
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
        </>
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

export async function getStaticProps({ params }) {
    const allStudies = await fetchCaseStudies();
    const studyIndex = [...allStudies].findIndex(
        (val) => val.uid === params.uid
    );
    const study = allStudies[studyIndex];

    // console.log(util.inspect(study, { depth: null }));
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
            next: getStudyLink(allStudies[studyIndex + 1]?.uid),
            previous: getStudyLink(allStudies[studyIndex - 1]?.uid),
        },
    };
}

export async function getStaticPaths() {
    const studies = await fetchCaseStudies();
    return {
        paths: studies.map((study) => `/work/${study.uid}`),
        fallback: true,
    };
}

export default CaseStudy;
