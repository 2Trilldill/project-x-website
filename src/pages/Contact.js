import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <main className="contact-page">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={{ textAlign: 'center', marginTop: '2rem' }}>Contact Us</h2>
        <ContactForm />
      </motion.section>
    </main>
  );
}

export default Contact;
