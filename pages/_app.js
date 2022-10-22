import '../styles/globals.css';
import '../styles/main.css'
import Layout from "../components/layout";
import React from "react";


function MyApp({ Component, pageProps }) {

  const getLayout =
      Component.getLayout || ((page) => <Layout>{page}</Layout>)

  return getLayout(
      <>
        {/* country context for all pages */}
        <>
          <Component {...pageProps} />
        </>
      </>,
  )}

export default MyApp
