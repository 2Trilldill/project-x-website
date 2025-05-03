import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Backend coming later)');
    // Placeholder: Normally you'd send data to a server here
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" required onChange={handleChange} />

      <label>Email</label>
      <input type="email" name="email" required onChange={handleChange} />

      <label>Message</label>
      <textarea name="message" rows="5" required onChange={handleChange} />

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
