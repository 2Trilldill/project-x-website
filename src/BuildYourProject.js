// src/BuildYourProject.js
import React, { useState } from 'react';
import './BuildYourProject.css';

const BuildYourProject = () => {
  const [projectType, setProjectType] = useState('');
  const [options, setOptions] = useState({});

  const handleProjectTypeChange = (e) => {
    setProjectType(e.target.value);
    setOptions({});
  };

  const handleOptionChange = (e) => {
    setOptions({
      ...options,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Type:', projectType);
    console.log('Options:', options);
    alert('Your project customization has been submitted!');
  };

  const renderOptions = () => {
    switch (projectType) {
      case 'Decking':
        return (
          <>
            <label>
              Board Type:
              <select name="boardType" onChange={handleOptionChange}>
                <option value="">Select</option>
                <option value="Composite">Composite</option>
                <option value="Wood">Wood</option>
              </select>
            </label>
            <br />
            <label>
              Railing Type:
              <select name="railingType" onChange={handleOptionChange}>
                <option value="">Select</option>
                <option value="Metal">Metal</option>
                <option value="Wood">Wood</option>
              </select>
            </label>
            <br />
            <label>
              Color:
              <input type="text" name="color" onChange={handleOptionChange} />
            </label>
          </>
        );
      case 'Remodeling':
        return (
          <>
            <label>
              Area:
              <select name="area" onChange={handleOptionChange}>
                <option value="">Select</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bathroom">Bathroom</option>
              </select>
            </label>
            <br />
            <label>
              Tile Choice:
              <input type="text" name="tileChoice" onChange={handleOptionChange} />
            </label>
            <br />
            <label>
              Color:
              <input type="text" name="color" onChange={handleOptionChange} />
            </label>
          </>
        );
      case 'Tree Removal':
        return (
          <>
            <label>
              Number of Trees:
              <input type="number" name="numberOfTrees" onChange={handleOptionChange} />
            </label>
            <br />
            <label>
              Stump Grinding:
              <select name="stumpGrinding" onChange={handleOptionChange}>
                <option value="">Select</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </label>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="build-your-project">
      <h2>Build Your Own Project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Project Type:
          <select value={projectType} onChange={handleProjectTypeChange}>
            <option value="">Select</option>
            <option value="Decking">Decking</option>
            <option value="Remodeling">Remodeling</option>
            <option value="Tree Removal">Tree Removal</option>
          </select>
        </label>
        <br />
        {renderOptions()}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuildYourProject;
