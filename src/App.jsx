import React from "react";
import Hero from "./Section/Hero";
import Header from "./Components/Header";
import { ExpandableCardDemo } from "./Components/steps";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Header />
      <div className="w-full layout-padding">
        <Hero />
        <ExpandableCardDemo />
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
};

export default App;
