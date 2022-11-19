import Header from "./header";
import Footer from "./footer";
import React from "react";
<<<<<<< HEAD
import Head from "next/head";
=======
>>>>>>> origin/new-branch

export default function Layout({children}){
    return(
        <>
<<<<<<< HEAD
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
=======
>>>>>>> origin/new-branch
            <Header/>
            <div className="min-h-screen overflow-x-hidden">
                {children}
            </div>
            <Footer/>
            </>
    )
}