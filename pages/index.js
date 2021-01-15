import GlobalHead from "../components/head";
import Navigation from "../components/nav";
import { Client } from "../prismic-configuration";
import Image from "next/image";

export default function Home({ doc }) {
    return (
        <div className="background-gradient landscape-container">
            <GlobalHead />
            <Navigation />
            <div className="sun splash-img splash-img-top splash-img-right">
                <div className="sun-piece" id="bg-sun">
                    <Image layout="fill" src="/images/splash/bg_09_base.svg" />
                </div>
                <div className="sun-piece sun-ring" id="sun-ring-one">
                    <Image layout="fill" src="/images/splash/bg_09_ring.svg" />
                </div>
                <div className="sun-piece sun-ring" id="sun-ring-two">
                    <Image layout="fill" src="/images/splash/bg_09_ring.svg" />
                </div>
                <div className="sun-piece sun-ring" id="sun-ring-three">
                    <Image layout="fill" src="/images/splash/bg_09_ring.svg" />
                </div>
            </div>
            <div className="splash-img splash-img-right" id="right-bg-fog">
                <Image layout="fill" src="/images/splash/bg_08.svg" />
            </div>
            <div className="splash-img splash-img-left" id="left-bg-fog">
                <Image layout="fill" src="/images/splash/bg_07.svg" />
            </div>
            <div className="splash-img splash-img-left">
                <Image layout="fill" src="/images/splash/bg_06.svg" />
            </div>
            <div
                className="splash-img splash-img-left"
                id="left-cloud-mountain"
            >
                <Image layout="fill" src="/images/splash/bg_05.svg" />
            </div>
            <div className="splash-img splash-img-left" id="left-mountain">
                <Image layout="fill" src="/images/splash/bg_04.svg" />
            </div>
            <div className="splash-img splash-img-left" id="left-mountain-fade">
                <Image layout="fill" src="/images/splash/bg_03.svg" />
            </div>
            <div className="splash-img splash-img-right" id="right-mountain">
                <Image layout="fill" src="/images/splash/bg_02.svg" />
            </div>
            <div className="splash-img splash-img-right" id="right-fog">
                <Image layout="fill" src="/images/splash/bg_01.svg" />
            </div>
            <div className="splash-img foreground-img">
                <Image src="/images/splash/bg_foreground.svg" layout="fill" />
            </div>
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
