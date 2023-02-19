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
  Register,
} from "./containers";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Register />
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
