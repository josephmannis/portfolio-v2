import "../styles/styles.scss";
import Head from "next/head";
import Modal from "react-modal";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Joseph Annis</title>
                <meta
                    name="viewport"
                    content="width=device-width,minimum-scale=1"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
