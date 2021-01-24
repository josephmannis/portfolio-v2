import Document, { Html, Main, NextScript, Head } from "next/document";
import Navigation from "../components/nav";

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
                    <Navigation />
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
