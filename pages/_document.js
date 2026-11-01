import { Html, Head, Main, NextScript } from 'next/document';

// Runs before the page paints so dark mode never flashes light.
const setTheme = `(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}
if(!t&&window.matchMedia&&matchMedia('(prefers-color-scheme: dark)').matches)t='dark';
document.documentElement.dataset.theme=t||'light'})()`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@300;600&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: setTheme }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
