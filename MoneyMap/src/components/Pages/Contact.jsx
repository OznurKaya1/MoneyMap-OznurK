import React from 'react'
import {useState} from'react'
import { useNavigate } from 'react-router'

export default function Contact() {
  const navigate = useNavigate()
  return (
    <div className="contact-container">
      <p>
        Our team is here to help you with any questions or technical issues. Whether you want to report a bug, request a feature, or just share your thoughts, we’d be happy to hear from you.
        You can reach us anytime at <strong>support@moneymap.com</strong> or by filling out the contact form below.
      </p>

      <form className="contact-form">
        <label htmlFor="username">Name</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          placeholder="Enter your name" 
          required 
        />

        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
        />

        <label htmlFor="message" style={{ display: "block", marginTop: "25px" }}>
          Message:
        </label>
        <textarea 
          id="message" 
          name="message" 
          rows="7" 
          cols="30" 
          placeholder="Write your feedback here" 
          style={{ border: "2px solid black" }}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
      <button type="button" className="btn" onClick={() => navigate('/Dashboard')}>
           Dashboard
          </button>
    </div>
  )
}
