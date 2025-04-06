import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Services";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <Testimonials />
    </>
  );
}

export default HomePage;
