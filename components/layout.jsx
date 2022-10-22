import Header from "./header";
import Footer from "./footer";
import React from "react";

export default function Layout({children}){
    return(
        <>
            <Header/>
            <div className="min-h-screen overflow-x-hidden">
                {children}
            </div>
            <Footer/>
            </>
    )
}