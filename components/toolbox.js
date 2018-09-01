import React, { Component } from 'react';
import Pill from './pill';

export default () => {

  return (
    <div id="Toolbox" className="Section">
      <div className="Section--label">Skills & Tools</div>
      <h1>My Toolbox</h1>
      <p>
        <Pill>UI Design</Pill>
        <Pill>Information Hierarchy</Pill>
        <Pill>Agile</Pill>
        <Pill>Rapid Prototyping</Pill>
        <Pill>Sketch App</Pill>
        <Pill>Marvel</Pill>
        <Pill>HTML/CSS</Pill>
        <Pill>Jira</Pill>
        <Pill>Aha!</Pill>
        <Pill>Git</Pill>
      </p>
    </div>

  )
}
