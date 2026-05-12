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
      body {
        color: var(--color-text-primary);
        background-color: var(--color-bg-page);
        font-family: var(--font-sans);
        font-weight: 300;
        font-size: var(--font-size-body);
        line-height: var(--line-height-body);
      }
      h1 {
        font-family: var(--font-serif);
        font-weight: 400;
        font-style: normal;
        font-size: var(--font-size-h1);
        line-height: var(--line-height-heading);
      }
      h2 {
        font-family: var(--font-serif);
        font-weight: 400;
        font-style: normal;
        font-size: var(--font-size-h2);
        line-height: var(--line-height-heading);
      }
      a {
        cursor: pointer;
        color: var(--color-text-link);
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
        margin-bottom: var(--spacing-80);
      }
      .Container {
        margin: 0 auto;
        max-width: 1024px;
      }
      .Section {
        padding-top: var(--spacing-56);
      }
      .Section--label {
        color: var(--color-text-accent);
        font-size: var(--font-size-label);
        line-height: var(--line-height-label);
        margin: 20px 0 var(--spacing-48);
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
        background: var(--color-icon-accent);
      }
      .Section p, .Section ul, .Experience {
        width: 32em;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
      }
      .Margin {
        margin-top: var(--spacing-80);
      }
      @media (max-width: 1224px) {
        .Container {
          padding: 0 var(--spacing-48);
          width: 100%;
        }
        .Section p, .Section ul, .Experience {
          width: 100%;
        }
      }
      @media (max-width: 480px) {
        .Container {
          padding: 0 var(--spacing-24);
        }
      }
    `}</style>
  </div>

)
