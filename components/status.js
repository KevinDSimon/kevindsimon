import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
  static async getInitialProps({ isAvailable }) {
    return { isAvailable }
  }

  render() {
    if (this.props.isAvailable) {
      return (
        <div>
          <div className="Availability Color--green">
            <span className="Status Green"></span>
            Available for freelance work
            <style jsx>{`
              .Status {
                width: 7px;
                height: 7px;
                border-radius: 5px;
                display: inline-block;
                margin-right: 10px;
                position: relative;
                top: -3px;
              }
              .Color--green {
                color: #27AE60;
              }
              .Status.Green {
                background-color: #27AE60;
              }
            `}</style>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className="Availability Color--red">
            <span className="Status Red"></span>
            Not available for freelance work
            <style jsx>{`
              .Status {
                width: 7px;
                height: 7px;
                border-radius: 5px;
                display: inline-block;
                margin-right: 10px;
                position: relative;
                top: -3px;
              }
              .Color--red {
                color: #DC1F26;
              }
              .Status.Red {
                background-color: #DC1F26;
              }
            `}</style>
          </div>
        </div>
      )
    }
  }
}
