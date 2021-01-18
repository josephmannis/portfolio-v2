import "../styles/styles.scss";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <title>Joseph Annis</title>
                <meta name="author" content="Joseph Annis" />
                <meta name="description" content="Porftolio of Joseph Annis" />
                <meta name="theme-color" content="#EEB882" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
