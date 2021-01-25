import PropTypes from "prop-types";
import { fetchCaseStudies } from "api/case-study";
import Link from "next/link";
import Navigation from "../components/nav";
import React, { useEffect, useRef } from "react";

export const Work = ({ caseStudies }) => {
    const workLinks = useRef(null);

    useEffect(() => {
        const scrollPortoflio = (e) => {
            window.scrollTo(window.scrollX + e.deltaY, 0);
        };
        window.addEventListener("wheel", scrollPortoflio);

        return () => {
            window.removeEventListener("wheel", scrollPortoflio);
        };
    }, []);

    return (
        <>
            <Navigation />
            <div className="work-container">
                <div className="work-links" ref={workLinks}>
                    {caseStudies.map((study, i) => (
                        <Link key={i} href={study.url}>
                            <div className="work-tile">
                                <a>{study.title}</a>
                            </div>
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
