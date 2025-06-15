import Layout from '../components/layout';
import Head from 'next/head';
import Nav from '../components/nav';
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
      {/* <Nav /> */}
      <Hero />
      {/* <Photos /> */}
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
        // Merriweather Sans Weight 300, 300i, 400, 400i, 700, 700i, 800, 800i
        // font-family: 'Merriweather', serif;
        color: #131516;
        font-family: 'Merriweather Sans', sans-serif;
        font-weight: 300;
        font-size: 18px;
        line-height: 1.75;
        /* background-color: #F0ECE3; */
      }
      h1 {
        font-family: "Gloock", serif;
        font-weight: 400;
        font-style: normal;
        font-size: 64px;
        line-height: 1.2;
      }
      a {
        cursor: pointer;
        color: #6F7259;
      }
      a:hover {
        text-decoration: none;
      }
      img {
        width: 100%;
      }
      strong {
        font-weight: 600;
      }
      i {
        font-style: italic;
        font-weight: 800;
      }
      .Wrapper {
        display: flex;
        flex-direction: column-reverse;
        -webkit-box-orient: vertical;
        margin-bottom: 80px;
      }
      .Container {
        margin: 0 auto;
        /* padding: 0 48px 0 144px; */
        max-width: 1024px;
      }
      .Section {
        padding-top: 80px;
      }
      .Section--label {
        color: #6F7259;
        font-size: 16px;
        line-height: 24px;
        margin: 20px 0 48px;
        font-style: italic;
        position: relative;
        font-weight: 600;
      }
      .Section--label:after {
        content: "";
        height: 2px;
        width: 8px;
        position: absolute;
        bottom: -4px;
        left: 0;
        background: #6F7259;
      }
      .Section p, .Section ul, .Experience {
        width: 32em;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
      }
      .Margin {
        margin-top: 80px;
      }
      @media (max-width: 1224px) {
        .Container {
          padding: 0 48px;
          width: 100%;
        }
        h1 {
          font-size: 64px;
        }
        .Section p, .Section ul, .Experience {
          width: 100%;
        }
        p {
          font-size: 16px;
        }  
      }
      @media (max-width: 480px) {
        .Container {
          padding: 0 24px;
        }
        h1 {
          font-size: 32px;
        }
        p {
          font-size: 14px;
        } 
      }
    `}</style>
  </div>

)
