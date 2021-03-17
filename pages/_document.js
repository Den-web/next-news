import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <html lang='en'>
                <Head />
                <head>
                    <meta charSet='UTF-8' />
                    <meta name='description' content='My SEO React app with Next JS' />
                    <meta name='keywords' content='Next react SEO' />
                    <meta name='author' content='Ryan Dhungel' />
                    <link rel="stylesheet"
                          href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"
                          integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX"
                          crossOrigin="anonymous"
                    />
                    <link rel="stylesheet" href="/static/styles.css"
                    />
                </head>
            <body>
                <Main />
                <NextScript />
            </body>
            </html>
        )
    }
}

export default MyDocument;