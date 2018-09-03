import React, { Component } from 'react';

export default class extends React.Component {
  static async getInitialProps({ href, title }) {
    return { href, title }
  }

  render() {
    return (
      <a
        href={this.props.href}
        className="Button"
        title={this.props.title}
        target="_blank">
          {this.props.children}
          <style jsx>{`
            .Button {
              color: black;
              display: inline-block;
              margin-bottom: 0;
              text-align: center;
              vertical-align: middle;
              cursor: pointer;
              background-image: none;
              border: 2px solid black;
              white-space: nowrap;
              padding: 8px 20px 5px;
              font-size: .75em;
              border-radius: 4px;
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: .075em;
              text-decoration: none;
            }
            .Button:hover {
              background-color: black;
              color: white;
            }
          `}</style>
      </a>
    )
  }
}
