import { fetchCaseStudies } from "api/case-study";
import { getStudyByUID } from "../api/case-study";
import { RichText, Link, Date } from "prismic-reactjs";
import util from "util";
import PropTypes from "prop-types";
import CaseStudySection from "../../components/case-study-section";

const CaseStudy = ({
    title,
    technologies,
    description,
    startDate,
    figmaLink,
    repoLink,
    liveLink,
    body,
    role,
}) => {
    const projectDate = Date(startDate);
    return (
        <div className="main-content-container">
            <div className="project-information-container">
                <RichText render={title} />
                <div className="description-container">
                    <p className="project-information project-date">
                        {projectDate &&
                            `${projectDate.toLocaleString("default", {
                                month: "long",
                            })} 
                        ${projectDate.getFullYear()} |`}{" "}
                        {RichText.asText(technologies)}
                    </p>
                </div>
                <div className="description-container">
                    <RichText render={description} />
                </div>
                <div className="description-container">
                    {repoLink && (
                        <a className="nav-link" href={Link.url(repoLink)}>
                            {" "}
                            project repo{" "}
                        </a>
                    )}
                    {liveLink && (
                        <a className="nav-link" href={Link.url(liveLink)}>
                            {" "}
                            live site{" "}
                        </a>
                    )}
                    {figmaLink && (
                        <a className="nav-link" href={Link.url(figmaLink)}>
                            {" "}
                            figma repo{" "}
                        </a>
                    )}
                </div>
            </div>

            <div className="work-container">
                {body.map((section, i) => (
                    <CaseStudySection key={i} section={section} />
                ))}
            </div>

            <footer className="work-footer">
                <div className="project-link-container">
                    <a
                        href="workload.html"
                        className="project-link"
                        id="next-link"
                    >
                        next project
                    </a>
                </div>

                <div className="wave-group">
                    <div className="wave-container" id="footer-wave-left">
                        <img
                            className="work-footer-wave"
                            src={require("images/work/template/work-wave-left.svg")}
                        />
                    </div>
                    <div className="wave-container" id="footer-wave-right">
                        <img
                            className="work-footer-wave"
                            src={require("images/work/template/work-wave-right.svg")}
                        />
                    </div>
                </div>
            </footer>
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
};

const getPageLink = (link) => {
    return link && link.link_type !== "Any" ? link : null;
};

export async function getStaticProps({ params }) {
    const study = await getStudyByUID(params.uid);
    // console.log(util.inspect(study, { depth: null }));
    return {
        props: {
            title: study.data.title,
            technologies: study.data.technologies,
            description: study.data.quick_description,
            role: study.data.role,
            startDate: study.data.start_date,
            liveLink: getPageLink(study.data.live_link),
            figmaLink: getPageLink(study.data.figma_link),
            repoLink: getPageLink(study.data.repository_link),
            body: study.data.body,
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
