import React from "react";
import Band from "sections/home/band";
import Features from "sections/home/features";
import Hero from "sections/home/hero";
import Overview from "sections/home/overview";
import Video from "sections/home/video";
import Stat from "./home/stat";
import Band2 from "./home/band2";
import StatsPC from "./home/stats/stats";
import Faq from "./home/faq";

const HomeComponent = () => {
  return (
    <div>
      <Band />
      <Hero />
      <Band2 />
      <Overview />
      <Video />
      <Features />
      <StatsPC />
      <Stat />
      {/* <Testimonial /> */}
    </div>
  );
};

export default HomeComponent;
