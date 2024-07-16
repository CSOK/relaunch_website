import React from "react";
import { StoriesCard } from "../../components";
import i1 from "../../assets/csokantony.jpg";
import i2 from "../../assets/csoklili.jpg"
import i3 from "../../assets/csokcollins.jpg"
import i4 from "../../assets/csokeleanora.jpeg"
import i5 from "../../assets/csoksamuel.jpg"
import i6 from "../../assets/csokruth.jpg"
import i7 from "../../assets/csokemmanuel.jpg"
import i8 from "../../assets/csokjoyce.jpg"
import i9 from "../../assets/csokjude.jpg"
import i10 from "../../assets/csokboni.jpg"
import i11 from "../../assets/csokjomo.jpg"
import i12 from "../../assets/csokflo.jpg"


const leads = [
  {
    id: 1,
    name: "Anthony Orenge",
    position: "CSOK Founder",
    desc: "AWS Software Development Engineer",
    image: i1
  },
  {
    id: 2,
    name: "Lilian Wanjiku",
    position: "President",
    desc: "Cybersecurity and Cloud Developer",
    image: i2
  },
  {
    id: 3,
    name: "Collins Nyaigoti",
    position: "Social Media Manager",
    desc: "Machine Learning Expert",
    image: i3
  },
  {
    id: 4,
    name: "Eleanora Matalanga",
    position: "Secretary",
    desc: "IoT Developer",
    image: i4
  },
  {
    id: 5,
    name: "Samuel Wachira",
    position: "Project Manager",
    desc: "AI/ML Engineer",
    image: i5
  },
  {
    id: 6,
    name: "Ruth Kamau",
    position: "Events Co-ordinator",
    desc: "MERN Stack Developer",
    image: i6
  },
  {
    id: 7,
    name: "Emmanuel Mwendwa",
    position: "Sponsorship Co-ordinator",
    desc: "Backend Developer/ Programmer",
    image: i7
  },
  {
    id: 9,
    name: "Jude Koome",
    position: "Webmaster/IT Manager",
    desc: "Web Developer",
    image: i9
  },
  {
    id: 10,
    name: "Bonface Maina",
    position: "Security Manager",
    desc: "Cybersecurity Expert",
    image: i10
  },
  {
    id: 11,
    name: "Florence Ndemi",
    position: "Club Relations Manager",
    desc: "Blockchain Expert",
    image: i11
  },
  {
    id: 12,
    name: "Jomo Kigo",
    position: "Content Developer",
    desc: "UI/UX Designer",
    image: i12
  },
]

const StoriesSection = () => {
  return (
    <div className="stories" id="stories">
      <h1>Meet the CSOK Leaders</h1>
      <div style={{
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}>
        <StoriesCard lead={leads[0]}/>
        </div>
      <div className="content_container">
        {leads.slice(1).map((lead) => (
          <div key={lead.id}>
            <StoriesCard lead={lead} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoriesSection;
