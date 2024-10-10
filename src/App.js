import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FeatureCards from "./components/FeatureCards";
import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <div className="topbar-overlay" />
      
      <Header />
      <MainSection />
      <FeatureCards />
      <Hero/>
      <Footer />
    </div>
  );
};

export default App;
