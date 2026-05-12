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
              color: var(--color-text-primary);
              display: inline-block;
              margin-bottom: 0;
              text-align: center;
              vertical-align: middle;
              cursor: pointer;
              background-image: none;
              border: 2px solid var(--color-text-primary);
              white-space: nowrap;
              padding: var(--spacing-8) 20px 5px;
              font-size: var(--font-size-small);
              border-radius: var(--radius-sm);
              text-transform: uppercase;
              font-weight: 700;
              letter-spacing: .075em;
              text-decoration: none;
            }
            .Button:hover {
              background-color: var(--color-text-primary);
              color: var(--color-bg-page);
            }
          `}</style>
      </a>
    )
  }
}
