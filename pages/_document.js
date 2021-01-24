import Document, { Html, Main, NextScript, Head } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="shortcut icon"
                        href="favicon.ico"
                        type="image/vnd.microsoft.icon"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Work+Sans:400,700,800,900&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="author" content="Joseph Annis" />
                    <meta
                        name="description"
                        content="Porftolio of Joseph Annis"
                    />

                    <meta name="theme-color" content="#EEB882" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="black-translucent"
                    />
                    <meta charSet="UTF-8" />
                    <meta
                        httpEquiv="X-UA-Compatible"
                        content="IE=edge,chrome=1"
                    />

                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="mask-icon"
                        href="/safari-pinned-tab.svg"
                        color="#5bbad5"
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
