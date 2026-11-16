import React from "react";
import Band from "sections/home/band";
import Features from "sections/home/features";
import Hero from "sections/home/hero";
import Overview from "sections/home/overview";
import Stat from "./home/stat";
import StatsPC from "./home/stats/stats";

const HomeComponent = () => {
  return (
    <div>
      <Band />
      <Hero />
      <Overview />
      <Features />
      <StatsPC />
      <Stat />
      {/* <Testimonial /> */}
    </div>
  );
};

export default HomeComponent;
