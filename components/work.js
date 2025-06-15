import React, { Component } from 'react';
import Slider from '../components/slider';

export default class extends React.Component {

  state = { results : [ ] }

  render() {

    return (

      <div>
        <div id="Work" className="Section">
          <div className="Section--label">Recent Work</div>
          <div className="Work--piece">
            <h1>Tock Manager</h1>
            <p><strong>Goal:</strong> Provide a simple, reliable tool that helps owners, operators, and teams stay prepared for every service—supporting delivery of exceptional hospitality.</p>
            <p>Exceptional hospitality and personalized experiences don't happen by accident—they require thoughtful preparation. The Tock Manager app simplifies the process of reviewing guest details and planning ahead, helping teams execute each service with confidence so that staff can focus on what matters most: delivering hospitality that stands out.</p>
            <Slider>
              <img src="../static/Tock Manager/Tock Manager 1.png" />
              <img src="../static/Tock Manager/Tock Manager 2.png" />
            </Slider>
          </div>
          <div className="Work--piece">
            <h1>Tock Consumer</h1>
            <p><strong>Goal:</strong> Create a world-class native app that keeps guests coming back again and again, driving butts in seats for customers.</p>
            <p>Guests are dining out more than ever, but the abundance of choice can be overwhelming. The Tock consumer app makes it easy to discover and book unforgettable experiences. At the same time, Tock helps restaurants, wineries, and hospitality businesses drive demand, fill seats, and grow their business. The consumer app connects curious diners with great businesses—and helps those businesses thrive.</p>
            <Slider>
              <img src="../static/Tock Consumer/Tock Consumer 1.png" />
              <img src="../static/Tock Consumer/Tock Consumer 2.png" />
            </Slider>
          </div>
          <div className="Work--piece">
            <h1 className='Break-word'>ActiveCampaign</h1>
            <p><strong>Goal:</strong> Integrate the value of ActiveCampaign with the lives of our clients by providing key features while they are on the go, effectively allowing them to manage their business wherever they are.</p>
            <p>A streamlined, intuitive interface lets users easily review important campaign and automation performance metrics whenever they want, and the built-in CRM lets them manage their entire sales team and pipeline from the field. The ActiveCampaign app keeps business owners connected to customers, not their computer.</p>
            <Slider>
              <img src="../static/Mobile App/Mobile App 1.png" />
              <img src="../static/Mobile App/Mobile App 2.png" />
              <img src="../static/Mobile App/Mobile App 3.png" />
            </Slider>
          </div>
          <div className="Work--piece">
            <h1>Basis Bulk Edit</h1>
            <p><strong>Goal:</strong> Add efficiency to a customer's workflow by allowing them to group similar edits in a single action.</p>
            <p>Customers manage many line items and often are required to make similar changes to multiple objects at once. A selling points of Basis Platform is how quick it is to create and edit a media plan. Bulk edit allows edits across many objects, categories, and items making users less frustrated and more efficient day after day.</p>
            <Slider>
              <img src="../static/Bulk Edit/Bulk Edit 4.png" />
              <img src="../static/Bulk Edit/Bulk Edit Flow.png" />
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
            <h1>Basis Global Search</h1>
            <p><strong>Goal:</strong> Add Global Search functionality to allow users the ability to quickly find the content that they want within Basis Platform.</p>
            <p>Basis Platform provides a solution that spans several roles and functions within adtech. One integral part of a platform that stores this much content is to allow users to comb through unstructured data via a dynamic Global search. This allows users to quickly find the content that they want, when they need it most.</p>
            <Slider>
              <img src="../static/Global Search/Global Search 3.png" />
              <img src="../static/Global Search/Global Search Flow.png" />
              <img src="../static/Global Search/Global Search 1.png" />
              <img src="../static/Global Search/Global Search 2.png" />
              <img src="../static/Global Search/Global Search 3.png" />
              <img src="../static/Global Search/Global Search 4.png" />
              <img src="../static/Global Search/Global Search 5.png" />
            </Slider>
          </div>
          {<div className="Work--piece">
            <h1>Basis Universal Pixel</h1>
            <p><strong>Goal:</strong> Create a single pixel to be placed in the head of a publishers site and have a setup of the rules occur within Basis Platform. The single pixel can be used for capturing retargeting audience and tracking conversions.</p>
            <p>Adding audience or conversion pixels to a publisher’s website involves a series of steps—and if a pixel isn’t placed correctly, doesn’t fire, or ends up on the wrong page, it can seriously impact campaign measurement and the insights needed for optimization. Updating or modifying pixel setups can take anywhere from several days to over a week. By placing a single, persistent pixel across the site, teams can save time, avoid rework, and reduce headaches.</p>
            <Slider>
              <img src="../static/Universal Pixel/Universal Pixel 4.png" />
              <img src="../static/Universal Pixel/Universal Pixel Mind Map.png" />
              <img src="../static/Universal Pixel/Universal Pixel 1.png" />
              <img src="../static/Universal Pixel/Universal Pixel 2.png" />
              <img src="../static/Universal Pixel/Universal Pixel 3.png" />
              <img src="../static/Universal Pixel/Universal Pixel 4.png" />
              <img src="../static/Universal Pixel/Universal Pixel 5.png" />
            </Slider>
          </div>}
          {/* <div className="Work--piece">
            <h1>Centro Website</h1>
            <p><strong>Goal:</strong> Update Centro's corporate website by shifting focus to self serve technology products while also focusing on media services and adtech educational content.</p>
            <Slider>
              <img src="../static/Centro Website/Centro Website Sitemap.png" />
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
          </div> */}
        </div>
        <style jsx>{`
          .Work--piece {
            margin-bottom: 80px;
          }
          .Break-word {
            word-break: break-all;
          }
        `}</style>
      </div>

    )
  }
}
