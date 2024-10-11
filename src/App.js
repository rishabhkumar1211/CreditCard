import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FeatureCards from "./components/FeatureCards";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";
import LoungeFinder from "./components/LoungeFinder";
import PopularCards from "./components/PopularCards";
import CompareCards from "./components/CompareCards";
import Benifit from "./components/BenifitCard";

const App = () => {
  return (
    <div className="rootclass">
      <Header />
      <div className="topbar-overlay" />

      <MainSection />
      <FeatureCards />
      <Benifit />
      <PopularCards />
      <CompareCards />
      <LoungeFinder />
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
