import React, { Component } from 'react';

export default () => {

  return (
    <div id="About" className="Section">
      
      {/* <div className="Section--label">About</div> */}
      
      <p><strong>A Detroit-based Senior Product Designer with over a decade of experience turning complex problems into intuitive, beautiful digital experiences.</strong></p>

      <p>I’m passionate about crafting products that not only look great but genuinely help people achieve their goals. My approach is deeply collaborative and grounded in every stage of the product development lifecycle — from strategy and user research to prototyping, high-fidelity design, and performance measurement. I thrive in cross-functional teams and believe that great design happens through iteration, empathy, and close alignment with both user needs and business objectives.</p>

      <p><a href="../static/kevin-simon-resume.pdf" title="Kevin Simon Resume" target="_blank">View My Resume</a></p>
      <style jsx>{`
      #About.Section {
        padding-top: 0px;
      }
      `}</style>
    </div>
  )
}
