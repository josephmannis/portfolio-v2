import GlobalHead from "../components/head";
import Navigation from "../components/nav";
import { Client } from "../prismic-configuration";

export default function Home({ doc }) {
    return (
        <div className="background-gradient landscape-container">
            <GlobalHead />
            <Navigation />
            <div className="splash-img splash-img-top splash-img-right">
                <img
                    className="sun-piece"
                    src={require("images/splash/bg_09_base.svg")}
                    id="bg-sun"
                />
                <img
                    className="sun-piece sun-ring"
                    src={require("images/splash/bg_09_ring.svg")}
                    id="sun-ring-one"
                />
                <img
                    className="sun-piece sun-ring"
                    src={require("images/splash/bg_09_ring.svg")}
                    id="sun-ring-two"
                />
                <img
                    className="sun-piece sun-ring"
                    src={require("images/splash/bg_09_ring.svg")}
                    id="sun-ring-three"
                />
            </div>
            <img
                className="splash-img splash-img-right"
                src={require("images/splash/bg_08.svg")}
                id="right-bg-fog"
            />
            <img
                className="splash-img splash-img-left"
                src={require("images/splash/bg_07.svg")}
                id="left-bg-fog"
            />
            <img
                className="splash-img splash-img-left"
                src={require("images/splash/bg_06.svg")}
            />
            <img
                className="splash-img splash-img-left"
                src={require("images/splash/bg_05.svg")}
                id="left-cloud-mountain"
            />
            <img
                className="splash-img splash-img-left"
                src={require("images/splash/bg_04.svg")}
                id="left-mountain"
            />
            <img
                className="splash-img splash-img-left"
                src={require("images/splash/bg_03.svg")}
                id="left-mountain-fade"
            />
            <img
                className="splash-img splash-img-right"
                src={require("images/splash/bg_02.svg")}
                id="right-mountain"
            />
            <img
                className="splash-img splash-img-right"
                src={require("images/splash/bg_01.svg")}
                id="right-fog"
            />
            <img
                className="splash-img foreground-img"
                src={require("images/splash/bg_foreground.svg")}
            />
            <div className="header-text">
                <h1>Joe Annis</h1>
                <h2>Designer, Developer, Adventurer.</h2>
            </div>
        </div>
    );
}

export async function getStaticProps({ params }) {
    const client = Client();
    const doc = await client.getSingle("case_study", null);
    return {
        props: {
            doc,
        },
    };
}
