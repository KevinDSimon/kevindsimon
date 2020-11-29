import React, { Component } from 'react';
import Menu from './menu';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class extends React.Component {

  static defaultProps = { color: "White" }

  state = { isClosed: true }

  handleClick = () => {
    this.setState({
      isClosed : !this.state.isClosed
    });
  }
  handleLogoClick = () => {
    this.setState({
      isClosed : true
    });
  }

  render() {
    return (
      <div>
        <div className="Logo">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            ignoreCancelEvents={false}
            onClick={this.handleLogoClick}
          >
            <img src="../static/letter-mark.svg" />
          </Link>
        </div>
        <div
          className={"Lines " + (this.state.isClosed ? ' ' : 'Close')}
          onClick={this.handleClick}
        >
          <span></span>
        </div>
        {this.state.isClosed ? '' :
          <Menu onSelect={this.handleClick} />
        }
        <style jsx>{`
          .Logo {
            position: relative;
            left: -100px;
            top: 100px;
            z-index: 50;
          }
          .Logo img {
            position: fixed;
            width: 54px;
          }
          .Lines {
            cursor: pointer;
            position: fixed;
            right: 12.75%;
            top: 118px;
            height: 19px;
            width: 25px;
            z-index: 15;
            transition: all 0.1s ease-in-out;
          }
          .Lines span,
          .Lines span:before,
          .Lines span:after {
            border-radius: 1px;
            height: 3px;
            width: 25px;
            background: black;
            position: absolute;
            top: 8px;
            display: block;
            content: '';
            z-index: 10;
            transition: all 0.1s ease-in-out;
          }
          .Lines span:before {
            top: -8px;
          }
          .Lines span:after {
            bottom: -8px;
          }
          .Lines.Close span:before,
          .Lines.Close span:after {
            top: 0;
          }
          .Lines.Close span {
            background-color: transparent;
          }
          .Lines.Close span:before {
            transform: rotate(45deg);
          }
          .Lines.Close span:after {
            transform: rotate(-45deg);
          }
          @media (max-width: 1224px) {
            .Logo {
              top: 68px;
              left: auto;
            }
            .Lines {
              top: 86px;
              right: 48px;
            }
          }
          @media (max-width: 768px) {
            .Logo {
              top: 68px;
              left: auto;
            }
          }
        `}</style>
      </div>
    )
  }
}
