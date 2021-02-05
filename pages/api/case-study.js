import { Client } from "../../prismic-configuration";
import Prismic from "@prismicio/client";

export const fetchDisplayedStudies = async () => {
    let studies = await Client().query(
        Prismic.Predicates.at("document.type", "portfolio_page"),
        {
            fetchLinks: ["case_study.title", "case_study.cover_image"],
        }
    );

    return studies.results[0].data.case_studies.map((studyLink) => {
        return {
            ...studyLink.studies,
        };
    });
};

export const fetchCaseStudies = async () => {
    let studies = await Client().query(
        Prismic.Predicates.at("document.type", "case_study")
    );
    return studies.results;
};

export const getStudyByUID = async (uid) => {
    return await Client().getByUID("case_study", uid);
};

export const getArchive = async () => {
    return await getPage("archive");
};

export const getAbout = async () => {
    return await getPage("about");
};

const getPage = async (pageName) => {
    let page = await Client().query(
        Prismic.Predicates.at("document.type", pageName)
    );
    return page.results[0];
};
