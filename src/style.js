import { injectGlobal } from 'styled-components';
import fonts from './assets/fonts/*';

injectGlobal`
  @font-face {
    font-family: 'Maison Bold';
    src: url(${fonts['maisonneuebold-webfont.woff']}) format('woff'),
      url(${fonts['maisonneuebold-webfont.ttf']})  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Maison Book';
    src: url(${fonts['maisonneuebook-webfont.ttf']}) format('woff'),
      url(${fonts['maisonneuebook-webfont.ttf']})  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Maison Mono';
    src: url(${fonts['maisonneuemono-webfont.ttf']}) format('woff'),
      url(${fonts['maisonneuemono-webfont.ttf']})  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
 
  html {
    font-size: 10px;
  }

  body {
    margin: 0;  
  }

  p, a, span, body {
    font-family: 'Maison Book';
    font-size: 1.6rem;
  }

  canvas {
    position: absolute;
    top: 0;
    z-index: 0;
    pointer-events: none;
  }
`;
