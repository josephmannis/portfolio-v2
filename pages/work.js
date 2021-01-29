import PropTypes from "prop-types";
import { fetchCaseStudies } from "api/case-study";
import Link from "next/link";
import Navigation from "../components/nav";
import React, { useEffect, useRef } from "react";
import { Checkbox } from "../components/checkbox";
import { Image, tags } from "../types";
import { fetchWorkPage } from "./api/case-study";

export const Work = ({ caseStudies }) => {
    const workLinks = useRef(null);
    const [selectedFilters, setSelected] = React.useState([]);
    let codeId = tags.code;
    let designId = tags.design;

    const updateFilter = (e) => {
        let id = e.target.id;
        if (selectedFilters.includes(id)) {
            setSelected(selectedFilters.filter((f) => f !== id));
        } else {
            setSelected([...selectedFilters, id]);
        }
    };

    const shouldShow = (caseStudy) => {
        return selectedFilters.length === 0 || selectedFilters.some((v) => caseStudy.tags.includes(v));
    };

    useEffect(() => {
        const scrollPortoflio = (e) => {
            window.scrollTo(window.scrollX + e.deltaY, 0);
        };

        const setupScrollListener = () => {
            if (window.innerWidth > "1080") {
                window.removeEventListener("wheel", scrollPortoflio);
                window.addEventListener("wheel", scrollPortoflio);
            } else {
                window.removeEventListener("wheel", scrollPortoflio);
            }
        };

        setupScrollListener();
        window.addEventListener("resize", setupScrollListener);

        return () => {
            window.removeEventListener("resize", setupScrollListener);
            window.removeEventListener("wheel", scrollPortoflio);
        };
    }, []);

    return (
        <>
            <Navigation />
            <div className="work-container">
                <div className="work-links" ref={workLinks}>
                    {caseStudies
                        .filter((s) => shouldShow(s))
                        .map((study, i) => (
                            <Link key={i} href={study.url}>
                                <div className="work-tile">
                                    <img src={study.coverImage?.url} alt={study.coverImage?.alt} />
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
                <div className="work-filters">
                    <Checkbox onClicked={updateFilter} selected={selectedFilters.includes(designId)} id={designId} />
                    <Checkbox onClicked={updateFilter} selected={selectedFilters.includes(codeId)} id={codeId} />
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
            tags: PropTypes.arrayOf(PropTypes.string),
            coverImage: Image,
        })
    ),
};

export async function getStaticProps() {
    const studies = await fetchWorkPage();
    return {
        props: {
            caseStudies: studies.map((study) => {
                return {
                    title: study.data.title[0].text,
                    url: `/work/${encodeURIComponent(study.uid)}`,
                    tags: study.tags,
                    coverImage: study.data.cover_image ?? null,
                };
            }),
        },
    };
}

export default Work;
