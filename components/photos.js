import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default () => {

    return (
      <div>
        <div className="Section Photos">
          <div className="Left">
            <ParallaxProvider>
              <Parallax
                offsetYMax={0}
                offsetYMin={20}
              >
                <img src="../static/me.jpg" width="50%" style={{ boxShadow: "0 38px 43px rgba(0,0,0,.09)" }} />
              </Parallax>
            </ParallaxProvider>
          </div>
          <div className="Right">
            <ParallaxProvider>
              <Parallax
                className="Margin"
                offsetYMax={20}
                offsetYMin={0}
              >
                <img src="../static/chi-fog.jpg" width="60%" style={{ marginTop: '3em', boxShadow: "0 38px 43px rgba(0,0,0,.09)" }} />
              </Parallax>
            </ParallaxProvider>
          </div>
        </div>
        <style jsx>{`
          .Photos {
            display: flex;
          }
          .Photos img {
            width: 110%;
          }
          .Left, .Right {
            flex: auto;
            -webkit-box-flex: 1;
            width: 50%;
          }
          .Right {
            direction: rtl;
          }
        `}</style>
      </div>
      )
    }
