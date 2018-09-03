import Layout from '../components/layout';
import Head from 'next/head';
import Hero from '../components/hero';
import Photos from '../components/photos';
import About from '../components/about';
import Toolbox from '../components/toolbox';
import Work from '../components/work';
import Contact from '../components/contact';
import Status from '../components/status';

export default () => (

  <div>
    <Layout>
      <Hero />
      <Photos />
      <About />
      <Toolbox />
      <Work />
      <Contact />
      {/* <Status /> */}
    </Layout>
    <style global jsx>{`
      * {
        box-sizing: border-box;
      }
      body  {
        // Merriweather Weight 300, 300i, 400, 400i, 700, 700i, 900, 900i
        font-family: 'Merriweather', serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.75;
        color: #131516;
      }
      h1 {
        font-size: 64px;
        line-height: 1.2;
        font-weight: 900;
        width: 50%;
      }
      a {
        cursor: pointer;
        color: #27AE60;
      }
      a:hover {
        text-decoration: none;
      }
      img {
        width: 100%;
      }
      strong {
        font-weight: 700;
      }
      i {
        font-style: italic;
        font-weight: 700;
      }
      .Wrapper {
        display: flex;
        flex-direction: column-reverse;
        -webkit-box-orient: vertical;
      }
      .Container {
        margin: 0 auto;
        padding: 0 48px;
        padding-left: 150px;
        // max-width: 1224px;
        // width: 100%;
        width: 1224px;
      }
      .Section {
        padding-top: 96px;
      }
      .Section--label {
        color: #27AE60;
        font-size: 16px;
        line-height: 24px;
        margin: 20px 0 48px;
        font-style: italic;
        position: relative;
        font-weight: 400;
      }
      .Section--label:after {
        content: "";
        height: 2px;
        width: 8px;
        position: absolute;
        bottom: -6px;
        left: 0;
        background: #27AE60;
      }
      .Section p, .Section ul {
        width: 30em;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
      }
      .Margin {
        margin-top: 100px;
      }
    `}</style>
  </div>

)
