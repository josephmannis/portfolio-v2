import "../styles/styles.scss";
import Head from "next/head";
import Navigation from "../components/nav";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Joseph Annis</title>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
