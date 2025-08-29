import React from "react";
import { VideoSection } from "../components/media/VideoSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Services from "../components/media/Services";

const Home = () => {
  return (
    <div>
      <VideoSection />
      <Services />
      {/* <AboutUs />
      <ContactUs /> */}
    </div>
  );
};

export default Home;
