import React, { Component } from 'react';
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default ({ onSelect }) => {

    return (
      <div className="Container Overlay">
        <nav>
          <ul>
            <li>
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
                ignoreCancelEvents={false}
                onClick={onSelect}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                duration={500}
                onClick={onSelect}
                ignoreCancelEvents={false}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Toolbox"
                spy={true}
                smooth={true}
                duration={500}
                ignoreCancelEvents={false}
                onClick={onSelect}
              >
                Skills & Tools
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Work"
                spy={true}
                smooth={true}
                duration={500}
                ignoreCancelEvents={false}
                onClick={onSelect}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                duration={500}
                ignoreCancelEvents={false}
                onClick={onSelect}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <style global jsx>{`
          body {
            overflow: hidden;
          }
        `}</style>
        <style jsx>{`
          .Overlay {
            background: white;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 3;
          }
          .Overlay nav {
            font-size: 64px;
            line-height: 1.2;
            font-weight: 900;
            padding-top: 96px;
          }
          .Overlay a {
            color: black!important;
          }
        `}</style>
      </div>
      )
    }
