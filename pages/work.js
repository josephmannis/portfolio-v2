import PropTypes from "prop-types";
import { fetchCaseStudies } from "api/case-study";
import Link from "next/link";
import Navigation from "../components/nav";

export const Work = ({ caseStudies }) => {
    return (
        <>
            <Navigation />
            <div className="main-content-container">
                <div className="work-links">
                    {caseStudies.map((study, i) => (
                        <Link key={i} href={study.url}>
                            <a className="work-link">{study.title}</a>
                        </Link>
                    ))}
                    <div>
                        <Link href="/work/archive">
                            <a className="work-link" id="archive">
                                archive
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </>
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
