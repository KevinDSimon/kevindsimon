import React, { Component } from 'react';
import Pill from './pill';

export default () => {

  return (
    <div id="Toolbox" className="Section">
      <div className="Section--label">Skills & Tools</div>
      <h1>My Toolbox</h1>
      <p>
        <Pill>UI Design</Pill>
        <Pill>Responsive Design</Pill>
        <Pill>Information Hierarchy</Pill>
        <Pill>Rapid Prototyping</Pill>
        <Pill>Sketch App</Pill>
        <Pill>Adobe Creative Suite</Pill>
        <Pill>InVision/Marvel</Pill>
        <Pill>HTML/CSS/JS</Pill>
        <Pill>Agile</Pill>
        <Pill>Git</Pill>
      </p>
    </div>

  )
}
