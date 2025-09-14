import React from "react";
import Hero from "./Section/Hero";
import Header from "./Components/Header";
import { ExpandableCardDemo } from "./Components/steps";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Header />
      <div className="w-full layout-padding">
        <Hero />
        <ExpandableCardDemo />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
