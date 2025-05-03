import React from 'react';
import { motion } from 'framer-motion';
import PhotoGallery from '../components/PhotoGallery';
import './Home.css';

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div className="hero-content" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '2rem',
          borderRadius: '10px'
        }}>
          <h1>Building the Future, Restoring the Past</h1>
          <p>Licensed. Insured. Trusted for over 5 years.</p>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section
        className="intro-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Why Choose Project X LLC?</h2>
        <p>
          Project X LLC is a construction company based on quality, safety, and reliability. We offer full-service
          general contracting, project management, and construction expertise to bring your vision to life.
        </p>
      </motion.section>

      {/* Photo Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <PhotoGallery />
      </motion.div>
    </main>
  );
}

export default Home;
