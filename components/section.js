import React, { Component } from 'react';
import Header from '../components/header'

export default class extends React.Component {
  static async getInitialProps({ id, containerClassName }) {
    return { id, containerClassName }
  }

  render() {
    return (
      <section id={this.props.id}>
        <div className={this.props.containerClassName}>
          {this.props.children}
        </div>
        <style jsx>{`

        `}</style>
      </section>
    )
  }
}
