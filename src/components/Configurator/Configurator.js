import React, { useState } from 'react';
import './Configurator.css';

const Configurator = () => {
  const [decking, setDecking] = useState('');
  const [railing, setRailing] = useState('');
  const [color, setColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const configuration = {
      decking,
      railing,
      color,
    };
    console.log('User Configuration:', configuration);
    // You can send this data to your backend or display a summary to the user
  };

  return (
    <form className="configurator-form" onSubmit={handleSubmit}>
      <h2>Build Your Own Project</h2>

      <label>
        Decking Material:
        <select value={decking} onChange={(e) => setDecking(e.target.value)}>
          <option value="">Select</option>
          <option value="composite">Composite</option>
          <option value="wood">Wood</option>
          <option value="pvc">PVC</option>
        </select>
      </label>

      <label>
        Railing Style:
        <select value={railing} onChange={(e) => setRailing(e.target.value)}>
          <option value="">Select</option>
          <option value="glass">Glass</option>
          <option value="cable">Cable</option>
          <option value="wood">Wood</option>
          <option value="metal">Metal</option>
        </select>
      </label>

      <label>
        Color:
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>

      <button type="submit">Submit Configuration</button>
    </form>
  );
};

export default Configurator;
