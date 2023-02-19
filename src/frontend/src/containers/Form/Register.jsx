import React, { useState } from 'react'
import Modal from 'react-modal'
import './Register.scss'
import {MdCancel} from 'react-icons/md'


export const Register = () => {
   const [fullName, setName] = useState('')
   const [email, setEmail] = useState('')
   const [phone, setPhone] = useState('')
  
   const [course, setCourse] = useState("");
   const [isModalOpen, setIsModalOpen] = useState(false);

   
 
   if(isModalOpen) {
     document.body.classList.add('active-modal')
   } else {
     document.body.classList.remove('active-modal')
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
  }
 
   return (
     <>
       <button onClick={() => setIsModalOpen(true)} className="btn-modal">
         Join now
       </button>
       <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Registration Form"
        className='modal-content'
      >
         <div className='form-page' > 
            <h1>Fill the form to join <br /><span className="t1">Computer</span><span className="t2"> Society </span><span className="t3"> Of </span><span className="t4">Kimathi </span></h1>
            <form action="" className='form' onSubmit={(e)=>handleSubmit(e)}>
                <div className="form-input">
                  <label htmlFor="fullName">Full Name:</label>
                    <input 
                    type="text" 
                    className='input-field' 
                    placeholder='Full name'
                    value={fullName}
                    onChange={(e)=>setName(e.target.value)}
                    required
                    />  
                </div>
                <div className="form-input">
                  <label htmlFor="email">Email:</label>
                    <input 
                    type="text" 
                    className='input-field' 
                    placeholder='Email'
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                    />  
                </div>
                <div className="form-input">
                  <label htmlFor="email">Phone:</label>
                    <input 
                    type='tel'
                    className='input-field' 
                    placeholder='07xxxxxxxx'
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    required
                    />  
                </div>
     
            
                <div className="form-input">
                  <label htmlFor="email"> Course:</label>
                    <input 
                    className='input-field' 
                    type="text"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                    />  
                </div>
                <button  className='register-button' type="submit">Register</button>
            </form>
            </div>
               <MdCancel className="close-modal" onClick={() => setIsModalOpen(false)}/>
            
             
             
      </Modal>
 
    </>
  )
}


