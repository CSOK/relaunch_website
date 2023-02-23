import React from "react";
import "./Gallery.scss";

const Gallery = ({ toggleGallery, isGalleryOpen }) => {
  console.log(`Gallery section to track state ${isGalleryOpen}`);
  return (
    <div className="gallery" id="gallery">
      <h1>Gallery Section</h1>

      <div
        className={`content_container ${
          isGalleryOpen ? "gallery-open" : "gallery-closed "
        }`}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
          alt="People learning"
        />
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => {
            toggleGallery();
          }}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Gallery;
