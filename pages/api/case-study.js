import { Client } from "../../prismic-configuration";
import Prismic from "@prismicio/client";

export const fetchCaseStudies = async () => {
    let studies = await Client().query(
        Prismic.Predicates.at("document.type", "case_study")
    );
    return studies.results;
};

export const getStudyByUID = async (uid) => {
    return await Client().getByUID("case_study", uid);
};
