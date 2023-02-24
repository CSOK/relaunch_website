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
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
    console.log(`State of gallery ${isGalleryOpen}`);
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log("Open modal is in play");
  };
  const closeModal = () => {
    setIsModalOpen(false);
    console.log("Close modal is in play");
  };
  return (
    <div className="app" id="app">
      <Navbar
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      {isModalOpen && (
        <Register
          isModalOpen={isModalOpen}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}

      <Hero />
      <AboutUs
        isModalOpen={isModalOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <Objectives />
      <StoriesSection />
      <Gallery toggleGallery={toggleGallery} isGalleryOpen={isGalleryOpen} />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
