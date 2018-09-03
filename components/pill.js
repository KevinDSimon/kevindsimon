import React, { Component } from 'react';

export default class extends React.Component {
  static async getInitialProps({ item }) {
    return { item }
  }

  render() {
    return (
      <span
        className="Pill"
      >
        {this.props.children}
        <style jsx>{`
          .Pill {
            display: inline-block;
            margin: 0 .5em .5em 0;
            text-align: center;
            vertical-align: middle;
            background-color: whitesmoke;
            white-space: nowrap;
            padding: 8px 20px 5px;
            font-size: .75em;
            border-radius: 20px;
          }
        `}</style>
      </span>
    )
  }
}
