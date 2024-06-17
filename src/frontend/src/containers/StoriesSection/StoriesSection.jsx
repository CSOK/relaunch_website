import React from "react";
import { StoriesCard } from "../../components";
import image1 from "../../assets/csokantony.jpg";
import i2 from "../../assets/csokcollins.jpg"
import i3 from "../../assets/csokcollins.jpg"
import i4 from "../../assets/csokcollins.jpg"
import i5 from "../../assets/csokcollins.jpg"
import i6 from "../../assets/csokcollins.jpg"
import i7 from "../../assets/csokcollins.jpg"
import i8 from "../../assets/csokcollins.jpg"

const leads = [
  {
    id: 1,
    name: "Anthony Orenge",
    position: "Club Lead",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: image1
  },
  {
    id: 2,
    name: "Collins Nyaigoti",
    position: "Secretary",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: i2
  },
  {
    id: 3,
    name: "Collins Nyaigoti",
    position: "Secretary",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: i2
  },
  {
    id: 4,
    name: "Collins Nyaigoti",
    position: "Secretary",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: i2
  },
  {
    id: 5,
    name: "Collins Nyaigoti",
    position: "Secretary",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: i2
  },
  {
    id: 6,
    name: "Collins Nyaigoti",
    position: "Secretary",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: i2
  },
  {
    id: 7,
    name: "Collins Nyaigoti",
    position: "Secretary",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: i2
  },
  {
    id: 8,
    name: "Collins Nyaigoti",
    position: "Secretary",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde saepe labore facilis blanditiis laborum corrupti, ab incidunt culpa ratione aut hic quibusdam. Enim vitae fuga rem facilis possimus, quasi nisipraesentium exercitationem voluptate, inventore doloremque non beatae  odio consectetur amet! Id animi eligendi repellat molestiae quisquam ducimus ullam at quo.",
    image: i2
  },
]


const StoriesSection = () => {
  return (
    <div className="stories" id="stories">
      <h1>Stories</h1>
      <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}>
        <StoriesCard lead={leads[0]}/>
        </div>
      <div className="content_container">
     {
      leads.map((lead) => {
        return(        <div key={lead.id}>
           <StoriesCard lead={lead}/>
           </div>)
})
     }
     
      </div>
    </div>
  );
};

export default StoriesSection;
