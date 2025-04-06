import React from "react";
import { Helmet } from "react-helmet";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/Services";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Register Karo - Business Registration Made Easy</title>
        <meta
          name="description"
          content="Simplified legal solutions to get your business up and running effortlessly. Register your company, file GST, and secure trademarks with ease."
        />
      </Helmet>
      <NavBar />
      <HeroSection />
      <ServicesSection />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
