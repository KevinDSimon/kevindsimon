import React, { Component } from 'react';
import Head from 'next/head';
import Nav from './nav';

export default class extends React.Component {
  static async getInitialProps({ }) {
    return { }
  }

  render() {
    return (
      <div>
        <Head>
          <title>Kevin Simon</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="shortcut icon" href="../static/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i" rel="stylesheet" />
        </Head>
        <div className="Wrapper">
          <div className="Container">
            {this.props.children}
          </div>
          <div className="Container Toggles">
            <Nav />
          </div>
        </div>
        <style global jsx>{`
          .Toggles {
            position: relative;
            padding-bottom: 0;
          }
        `}</style>
      </div>
    )
  }
}
