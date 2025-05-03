import React from 'react';
import { motion } from 'framer-motion';

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
        <h2>About Project X LLC</h2>
        <p>
          Owned by Miles Austin and Desmond Bentley, Project X has been delivering trusted construction solutions for over 5 years.
        </p>
        <p>
          We are fully licensed and insured, with a passion for quality, safety, and customer satisfaction.
        </p>
      </motion.section>
    </main>
  );
}

export default About;
