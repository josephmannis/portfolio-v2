import Head from "next/head";

const GlobalHead = () => {
    return (
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
            <link
                rel="shortcut icon"
                href="favicon.ico"
                type="image/vnd.microsoft.icon"
            />
            <link
                href="https://fonts.googleapis.com/css?family=Work+Sans:400,700,800,900&display=swap"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="/css/styles.css" type="text/css" />
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-133680373-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'UA-133680373-1');
    </script> */}
        </Head>
    );
};

export default GlobalHead;
