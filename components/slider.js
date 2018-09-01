import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

export default class extends React.Component {

  static defaultProps = {
    activecard: 0,
    className: '',
    position: 'Bottom'
  }

  state = {
    activecard: this.props.activecard
  }

  render() {

    let { className } = this.props;
    className = className ? ` ${className}` : '';

    const { children, position } = this.props;
    const { activecard } = this.state;
    const xPositions = ['Top', 'Bottom'],
          axis = xPositions.includes(position) ? 'x' : 'y';

    const moveToNextCard = () => {
      this.setState({activecard: activecard === children.length - 1 ? 0 : activecard + 1})
    }

    return (
      <div>
        <div
        {...this.props}
        className = {`Carousel ${position}${className}`}
      >
        <div className={`Nav-strip`}>
          {React.Children.map(children, (child, i) => {
            const isActive = (i === activecard) ? 'Active' : '';
            return <div
              onClick={this.onNavClick.bind(this, i)}
              className={`Nav ${isActive}`}
            >
              <span className="Nav-dot"></span>
            </div>;
          })}
        </div>
        <div onClick={moveToNextCard} className="Next-card">
          <span>Click to slide</span>
        </div>
        <SwipeableViews
          index={activecard}
          onChangeIndex={this.onNavClick.bind(this)}
          enableMouseEvents={true}
          axis={axis}
        >
          {React.Children.map(children, (child, i) => {
            let { className } = child.props;
            className = className ? ` ${className}` : '';

            const isActive  = (i === activecard) ? ' Active' : '';
            const cardProps = {
              ...child.props,
              style     : {flex: 1},
              className : ` Card${isActive}${className}`,
              cardindex : i,
              activecard
            };

            return React.cloneElement(child, cardProps);
          })}
        </SwipeableViews>
      </div>
      <style jsx>{`
        .Carousel {
          position: relative;
        }
        .Nav-strip,
        .Next-card {
          display: flex;
          justify-content: center;
          position: absolute;
          pointer-events: none;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 2;
        }
        .Next-card {
          z-index: 1;
          cursor: pointer;
          pointer-events: auto;
        }
        .Next-card span {
          position: absolute;
          right: 12px;
          top: 10px;
          color: silver;
          font-size: 10px;
          font-weight: 300;
        }
        .Nav-strip + div,
        .Nav-strip + div .react-swipeable-view-container {
          height: 100%;
          width: 100%;
        }
        .Carousel.Top .Nav-strip {
          bottom: auto;
        }
        .Carousel.Bottom .Nav-strip {
          top: auto;
          bottom: 7px;
        }
        .Carousel.Left .Nav-strip {
          right: auto;
        }
        .Carousel.Right .Nav-strip {
          left: auto;
        }
        .Carousel.Top .Nav-strip,
        .Carousel.Bottom .Nav-strip {
          flex-direction: row;
        }
        .Carousel.Left .Nav-strip,
        .Carousel.Right .Nav-strip {
          flex-direction: column;
        }
        .react-swipeable-view-container > div {
          flex-basis: 100%;
          background: #f7f7f7;
        }
        .Nav {
          text-align: center;
          cursor: pointer;
          pointer-events: all;
        }
        .Carousel.Top .Nav,
        .Carousel.Bottom .Nav {
          padding: 8px 6px;
        }
        .Carousel.Left .Nav,
        .Carousel.Right .Nav {
          padding: 6px 12px;
        }
        .Nav-strip .Nav-dot {
          background-color: lightgrey;
          border-radius: 50%;
          height: 8px;
          width: 8px;
          display: inline-block;
        }
        .Nav-strip .Nav:hover .Nav-dot {
          background-color: darkgray;
        }
        .Nav-strip .Nav.Active .Nav-dot {
          background-color: gray;
        }
        .Carousel .Card {
          padding: 12px;
        }
      `}</style>
      </div>
    )
  }

  onNavClick (activecard) {
    this.setState({
      activecard
    });
  }

}
