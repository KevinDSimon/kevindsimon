import React, { Component } from 'react';
import Menu from './menu';

export default class extends React.Component {

  static defaultProps = { color: "White" }

  state = { isClosed: true }

  handleClick = () => {
    this.setState({
      isClosed : !this.state.isClosed
    });
  }

  render() {
    return (
      <div>
        <div className="Logo">
          <img src="../static/floating-logo.png" />
        </div>
        {/* <div
          className={"Lines " + (this.state.isClosed ? ' ' : 'Close')}
          onClick={this.handleClick}
        >
          <span></span>
        </div>
        {this.state.isClosed ? '' :
          <Menu onSelect={this.handleClick} />
        } */}
        <style jsx>{`
          .Logo {
            position: absolute;
            left: 48px;
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
            right: 138px;
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
        `}</style>
      </div>
    )
  }
}
