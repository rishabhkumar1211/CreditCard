import React from "react";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import FeatureCards from "./components/FeatureCards";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <FeatureCards />
      <Footer />
    </div>
  );
};

export default App;
