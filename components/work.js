import React, { Component } from 'react';
import TwentyTwenty from 'react-twentytwenty';
import Slider from '../components/slider';

export default class extends React.Component {

  state = { results : [ ] }

  render() {

    return (

      <div>
        <div id="Work" className="Section">
          <div className="Section--label">Work</div>
          <div className="Work--piece">
            <h1>Bulk Edit</h1>
            {/* <p><i>Goal</i></p> */}
            <p><strong>Goal:</strong> Add an efficiency to a buyer's workflow by allowing them to group similar edits in a single action.</p>
            <p>Most top spending customers manage many line items and often times they are required to make similar changes to multiple objects at once. A selling points of Basis Platform is how quick it is to create and edit a media plan. Bulk edit allows edits across many objects, categories, and items making users less frustrated and more efficient day after day.</p>
            <Slider>
              <img src="../static/Bulk Edit/Bulk Edit 1.png" />
              <img src="../static/Bulk Edit/Bulk Edit 2.png" />
              <img src="../static/Bulk Edit/Bulk Edit 3.png" />
              <img src="../static/Bulk Edit/Bulk Edit 4.png" />
              <img src="../static/Bulk Edit/Bulk Edit 5.png" />
              <img src="../static/Bulk Edit/Bulk Edit 6.png" />
              <img src="../static/Bulk Edit/Bulk Edit 7.png" />
            </Slider>
          </div>
          <div className="Work--piece">
            <h1>Global Search</h1>
            {/* <p><i>Goal</i></p> */}
            <p><strong>Goal:</strong> Add Global Search functionality to allow users the ability to quickly find the content that they want within Basis Platform.</p>
            <p>Basis Platform provides a solution that spans several roles (planners, account managers, buyers, vendors, accounting) and functions (proposals, campaign execution, optimization, financial reconciliation) within adtech. One integral part of a platform that stores this much content is to allow users to comb through unstructured data via a dynamic Global search. This allows users to quickly find the content that they want, when they need it most.</p>
            <Slider>
              <img src="../static/Global Search/Global Search 1.png" />
              <img src="../static/Global Search/Global Search 2.png" />
              <img src="../static/Global Search/Global Search 3.png" />
              <img src="../static/Global Search/Global Search 4.png" />
              <img src="../static/Global Search/Global Search 5.png" />
            </Slider>
          </div>
          {/* <div className="Work--piece">
            <h1>From Dusk till Dawn</h1>
            <p>An adaptive blog theme that offers readers a healthier, more pleasent nighttime experience.</p>
            <div style={{ marginTop: '3em', boxShadow: "0 35px 50px rgba(0,0,0,.20)" }}>
              <TwentyTwenty
                left={<img src="../static/day.jpg" width="100%" />}
                right={<img src="../static/night.jpg" width="100%" />}
                slider={<div className="Slider" />}
              />
            </div>
          </div> */}
        </div>
        <style jsx>{`
          .Work--piece {
            margin-bottom: 96px;
          }
          .Slider {
            height: 100%;
            width: 3px;
            background-color: white;
            cursor: col-resize;
            box-shadow: 0 3px 0 white, 0 0 12px rgba(51,51,51,.5);
          }
        `}</style>
      </div>

    )
  }
}
