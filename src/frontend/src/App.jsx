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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="app">
      <Navbar
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Register
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
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
