import React, { Component } from 'react';
import Pill from './pill';

export default () => {

  return (
    <div id="Toolbox" className="Container Section">
      <div className="Section--label">Toolbox</div>
      <h1>Skills</h1>
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
