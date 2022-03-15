import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import theme from "../components/theme";
import TopHeader from "../components/TopHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
   if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
   }
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="description"
          content="TourTrav is a Traveling website for traveler"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>TourTrav</title>
      </Head>
      <TopHeader />
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  );
}

export default MyApp;
