import React from "react";
import "./Styles/StoriesSection.scss";
const StoriesCard = ({lead}) => {
  return (
    <div className="content_section" style={{
      marginTop: 4,
      marginBottom: 4,
      padding: 10
    }}>
      <img
        src={lead.image}
        alt="People learning"
        width={50}
        height={50}
        style={{
          borderRadius: "50%"
        }}
      />

      <p className="date_and_name">{lead.name}</p>

      <p className="section_header"> {lead.position}</p>
      <p className="content">
        {
          lead.desc
        }
      </p>
    </div>
  );
};

export default StoriesCard;
