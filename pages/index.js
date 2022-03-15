import { Box, ThemeProvider } from "@mui/material";
import Footer from "../components/Footer";
import TopHeader from "../components/TopHeader";
import Head from "next/head";
import HomeHeader from "../components/HomeComponent/HomeHeader";
import PlacesComponent from "../components/HomeComponent/PlacesComponent";
import theme from "../components/theme";
import AboutSection from "../components/HomeComponent/AboutSection";
import ServicesSection from "../components/HomeComponent/ServicesSection";
import LatestBlog from "../components/HomeComponent/LatestBlog";
import { createClient } from "contentful";
import TourSection from "../components/HomeComponent/TourSection";

export default function Home({ travelBlog, tour }) {
  
  return (
    <>
      <Box className="HomeBg">
        <HomeHeader />
      </Box>
      <AboutSection />
      <PlacesComponent />
      <TourSection populerTour={tour} />
      <LatestBlog TravelLatestBlog={travelBlog} />
      <ServicesSection />
    </>
  );
}

Home.getLayout = function PageLayout(page) {
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
      {page}
      <Footer />
    </ThemeProvider>
  );
};

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const response = await client.getEntries({
    content_type: "tourBlog",
  });
  const responseT = await fetch("https://course-api.com/react-tours-project");
  const tour = await responseT.json();

  return {
    props: {
      travelBlog: response.items,
      tour: tour ? tour : [],
    },
    revalidate: 1,
  };
}
