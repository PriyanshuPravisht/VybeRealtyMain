import React from "react";
import { VideoSection } from "../components/media/VideoSection";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

const Home = () => {
  return (
    <div>
      <VideoSection />
      <AboutUs />
      <ContactUs />
    </div>
  );
};

export default Home;
