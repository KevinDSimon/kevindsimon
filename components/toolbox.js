import React, { Component } from 'react';
import Pill from './pill';

export default () => {

  return (
    <div id="Toolbox" className="Section">
      <div className="Section--label">Toolbox</div>
      <h2>Skills</h2>
      <p>
        <Pill>User-Centered Design</Pill>
        <Pill>Design Systems</Pill>
        <Pill>UI/UX Design</Pill>
        <Pill>Responsive Design</Pill>
        <Pill>Native App Design</Pill>
        <Pill>Information Hierarchy</Pill>
        <Pill>Figma</Pill>
        <Pill>Advanced Prototyping</Pill>
        <Pill>Analytics Collabration</Pill>
        <Pill>Agile Methodologies</Pill>
      </p>
    </div>

  )
}
