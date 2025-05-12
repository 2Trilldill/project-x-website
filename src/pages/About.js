// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <main className="about-page">
      <motion.section
        className="about-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-card">
          <h2>About Project X LLC</h2>
          <p className="subtitle">
            Trusted. Experienced. Dedicated to building with integrity.
          </p>
          <p>
            Owned by <strong>Miles Austin</strong> and <strong>Desmond Bentley</strong>, Project X has delivered reliable construction solutions for over 5 years.
          </p>
          <p>
            We're fully licensed and insured, with a reputation built on quality, safety, and genuine customer care.
          </p>
        </div>
      </motion.section>
    </main>
  );
}

export default About;
