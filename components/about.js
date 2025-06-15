import React, { Component } from 'react';

export default () => {

  return (
    <div id="About" className="Container Section">
      {/* <div className="Section--label">About</div> */}
      <p><strong>A Detroit-based Senior Product Designer with over a decade of experience turning complex problems into intuitive, beautiful digital experiences.</strong></p>
      <p>I’m passionate about crafting products that not only look great but genuinely help people achieve their goals. My approach is deeply collaborative and grounded in every stage of the product development lifecycle — from strategy and user research to prototyping, high-fidelity design, and performance measurement. I thrive in cross-functional teams and believe that great design happens through iteration, empathy, and close alignment with both user needs and business objectives.</p>
      <div className="Section--label">Experience</div>
      <div className="Experience">
        <div className="Job">
          <span className="Title">Tock x American Express</span>
          <span className="Line"></span>
          <span className="Date">2022-Present</span>
        </div>
        <div className="Job">
          <span className="Title">Oracle</span>
          <span className="Line"></span>
          <span className="Date">2021-2022</span>
        </div>
        <div className="Job">
          <span className="Title">ActiveCampaign</span>
          <span className="Line"></span>
          <span className="Date">2019-2021</span>
        </div>
        <div className="Job">
          <span className="Title">Centro</span>
          <span className="Line"></span>
          <span className="Date">2015-2019</span>
        </div>
        <div className="Job">
          <span className="Title">Vivid Seats</span>
          <span className="Line"></span>
          <span className="Date">2012-2015</span>
        </div>
      </div>
      <p><a href="../static/kevin-simon-resume.pdf" title="Kevin Simon Resume" target="_blank">View My Resume</a></p>
      <style jsx>{`
      #About.Section {
        padding-top: 0px;
      }
      #About .Section--label {
        margin-top: 48px;
      }  
      .Experience {
        margin: 1.5em 0;
      }
      .Job {
        display: flex;
        align-items: center;
        margin-bottom: 8px;
      }
      .Title {
        white-space: nowrap;
      }
      .Line {
        flex-grow: 1;
        height: 1px;
        border-bottom: 1px dashed #CCC;
        margin: 0 12px;
      }
      .Date {
        white-space: nowrap;
        font-size: 14px;
        color: #777;
      }
      `}</style>
    </div>
  )
}
