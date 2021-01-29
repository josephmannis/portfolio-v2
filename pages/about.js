import { RichText } from "prismic-reactjs";
import Navigation from "../components/nav";
import { getAbout } from "./api/case-study";

const About = ({ description }) => {
    return (
        <>
            <Navigation />
            <div className="main-content-container">
                <div className="about-text-container">
                    <h1 className="about-name"> joe annis </h1>

                    <p className="about-description">
                        <RichText render={description} />
                    </p>
                </div>

                <img src={require("images/about/about-splash.svg")} id="about-splash" />
                <img src={require("images/about/about-splash-flip.svg")} id="about-splash-mobile" />
            </div>
        </>
    );
};

export async function getStaticProps() {
    const about = await getAbout();
    return {
        props: {
            description: about.data.personal_description,
        },
    };
}
export default About;
