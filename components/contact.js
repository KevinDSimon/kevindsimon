import React, { Component } from 'react';

export default () => {

  return (
    <div id="Contact" className="Section">
      <div className="Section--label">Contact</div>
      <h1>Stay social</h1>
      <p>
        <a href="mailto:kevindsimon@gmail.com?Subject=Portfolio%20Contact" title="Email" target="_blank">Email</a> 
        <a href="https://www.linkedin.com/in/kevindsimon/" title="LinkedIn" target="_blank">LinkedIn</a>
        <a href="https://dribbble.com/KevinDSimon" title="Dribbble" target="_blank">Dribbble</a>
        <a href="https://www.instagram.com/kevin__simon" title="Instagram" target="_blank">Instagram</a>
      </p>
      <style jsx>{`
        .Section {
          padding-top: 0;
        }
        a {
          display: block;
          margin-bottom: 12px;
        }
    `}</style>
    </div>

  )
}
