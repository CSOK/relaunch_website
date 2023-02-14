import { useState } from "react";
import "./App.scss";
import {
  AboutUs,
  Footer,
  Gallery,
  Hero,
  Navbar,
  Objectives,
  Sponsors,
  StoriesSection,
} from "./containers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutUs />
      <Objectives />
      <StoriesSection />
      <Gallery />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
