import Header from "./header";
import Footer from "./footer";
import React from "react";
import Head from "next/head";
import PlaceContextProvider from "./context/placeContext";

export default function Layout({children}){
    return(
        <>
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
            </Head>
            <PlaceContextProvider>
                <Header/>
            <div className="min-h-screen overflow-x-hidden">
                {children}
            </div>
            <Footer/>
            </PlaceContextProvider>
            </>
    )
}