import React, { Component } from 'react';
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
            <p><strong>Goal:</strong> Add an efficiency to a buyer's workflow by allowing them to group similar edits in a single action.</p>
            <p>Customers manage many line items and often are required to make similar changes to multiple objects at once. A selling points of Basis Platform is how quick it is to create and edit a media plan. Bulk edit allows edits across many objects, categories, and items making users less frustrated and more efficient day after day.</p>
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
            <p><strong>Goal:</strong> Add Global Search functionality to allow users the ability to quickly find the content that they want within Basis Platform.</p>
            <p>Basis Platform provides a solution that spans several roles and functions within adtech. One integral part of a platform that stores this much content is to allow users to comb through unstructured data via a dynamic Global search. This allows users to quickly find the content that they want, when they need it most.</p>
            <Slider>
              <img src="../static/Global Search/Global Search 1.png" />
              <img src="../static/Global Search/Global Search 2.png" />
              <img src="../static/Global Search/Global Search 3.png" />
              <img src="../static/Global Search/Global Search 4.png" />
              <img src="../static/Global Search/Global Search 5.png" />
            </Slider>
          </div>
          <div className="Work--piece">
            <h1>Universal Pixel</h1>
            <p><strong>Goal:</strong> Create a single pixel to be placed in the head of a publishers site and have a setup of the rules occur within Basis Platform. The single pixel can be used for capturing retargeting audience and tracking conversions.</p>
            <p>A series of processes must be followed to place audience or conversion pixels on a publisher's website. The entire process is re-visited if the pixel is not placed correctly, doesn't fire, or was placed on the wrong page. Adding and modifying pixel setup on publishers websites can take as long as a few days to a weeks. This can dramatically effect campaign creation and optimization.</p>
            <Slider>
              <img src="../static/Universal Pixel/Universal Pixel 1.png" />
              <img src="../static/Universal Pixel/Universal Pixel 2.png" />
              <img src="../static/Universal Pixel/Universal Pixel 3.png" />
              <img src="../static/Universal Pixel/Universal Pixel 4.png" />
              <img src="../static/Universal Pixel/Universal Pixel 5.png" />
            </Slider>
          </div>
          <div className="Work--piece">
            <h1>Centro Website</h1>
            <p><strong>Goal:</strong> Update Centro's corporate website to highlight self serve products, media services, and adtech educational content.</p>
            <Slider>
              <img src="../static/Centro Website/Centro Website 1.png" />
              <img src="../static/Centro Website/Centro Website 2.png" />
              <img src="../static/Centro Website/Centro Website 3.png" />
              <img src="../static/Centro Website/Centro Website 4.png" />
              <img src="../static/Centro Website/Centro Website 5.png" />
              <img src="../static/Centro Website/Centro Website 6.png" />
              <img src="../static/Centro Website/Centro Website 7.png" />
              <img src="../static/Centro Website/Centro Website 8.png" />
              <img src="../static/Centro Website/Centro Website 9.png" />
              <img src="../static/Centro Website/Centro Website 10.png" />
              <img src="../static/Centro Website/Centro Website 11.png" />
            </Slider>
          </div>
        </div>
        <style jsx>{`
          .Work--piece {
            margin-bottom: 96px;
          }
        `}</style>
      </div>

    )
  }
}
