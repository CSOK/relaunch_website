import React from "react";
import { StoriesCard } from "../../components";
const StoriesSection = () => {
  return (
    <div className="stories" id="stories">
      <h1>Stories Section</h1>

      <div className="content_container">
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
        <StoriesCard />
      </div>
    </div>
  );
};

export default StoriesSection;
