import React from "react";
import "./Styles/StoriesSection.scss";
const StoriesCard = () => {
  return (
    <div className="content_section">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1d6S7gGw2ul1LEcaOO2wTsHnF3x6FLk-51pauLhOMRbtDlZQ74mceI_cA9SQvXJgFhs&usqp=CAU"
        alt="People learning"
      />

      <p className="date_and_name">25 october|Michael Ngecha</p>

      <p className="section_header"> LOREM IPSUM DOLOR</p>
      <p className="content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe
        labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione
        aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisi
        praesentium exercitationem voluptate, inventore doloremque non beatae
        odio consectetur amet! Id animi eligendi repellat molestiae quisquam
        ducimus ullam at quo.
      </p>

      <button>Read More</button>
    </div>
  );
};

export default StoriesCard;
