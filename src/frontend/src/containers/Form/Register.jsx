import React, { useState } from "react";
import "./Register.scss";
import { IoMdClose } from "react-icons/io";
import CSOKLogo from "../../assets/CSOK_2.png";

export const Register = ({ isModalOpen, closeModal }) => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      fullName,
      email,
      computingExperience,
      interests,
      course,
    });
  };

  if (isModalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="modal">
      <div className="form-page">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className="close-modal" onClick={() => closeModal()}>
            <IoMdClose />
          </div>
          <img src={CSOKLogo} alt="" />
          <div className="form-title">Registration Form</div>
          <div className="form-input">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="email"> Course</label>
            <input
              className="input-field"
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="input-field"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Contact</label>
            <input
              type="tel"
              className="input-field"
              placeholder="07xxxxxxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="button-wrapper">
            <button className="register-button" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
