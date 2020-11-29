import React, { Component } from 'react';
import Pill from './pill';

export default () => {

  return (
    <div id="Toolbox" className="Section">
      <div className="Section--label">Skills</div>
      <h1>My Toolbox</h1>
      <p>
        <Pill>UI/UX Design</Pill>
        <Pill>Responsive Design</Pill>
        <Pill>Native App Design</Pill>
        <Pill>Information Hierarchy</Pill>
        <Pill>Rapid Prototyping</Pill>
        <Pill>Figma</Pill>
        <Pill>Sketch App</Pill>
        <Pill>InVision</Pill>
        <Pill>HTML/CSS</Pill>
        <Pill>Git</Pill>
        <Pill>Agile</Pill>
      </p>
    </div>

  )
}
