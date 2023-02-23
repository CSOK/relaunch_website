import React, { useState } from "react";
import Modal from "react-modal";
import "./Register.scss";
import { IoMdClose } from "react-icons/io";
export const Register = ({ isModalOpen, openModal, closeModal }) => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");

  if (isModalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

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

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal()}
        contentLabel="Registration Form"
        className="modal-content"
      >
        <div className="form-page">
          <h1>Registration Form</h1>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
        <IoMdClose className="close-modal" onClick={() => closeModal()} />
      </Modal>
    </>
  );
};
