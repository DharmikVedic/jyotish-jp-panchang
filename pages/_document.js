import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
import Script from "next/script";
class MyDocument extends Document {
    render() {
        return (
            <Html class="scroll-smooth">
                <Head>
                    <meta
                        name="description"
                        content=""
                    />
                    <meta
                        name="keywords"
                        content=""
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    <title>
                        Hindu Panchang | Jyotish JP
                    </title>
                    <Script strategy="beforeInteractive" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBoNbkWHS1EaPzZ_3gClPD7VihjX1j7EUk&libraries=places"></Script>
                    <link rel="shortcut icon" href="/favicon.ico" />
                    <meta name="theme-color" content="#ffffff" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
