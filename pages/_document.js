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
                    \
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
