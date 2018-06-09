import { injectGlobal, css } from "styled-components";
import fonts from "./assets/fonts/*";

const sizes = {
  mobile: 768
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label];
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}px) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});

injectGlobal`
  @font-face {
    font-family: 'Maison Bold';
    src: url(${fonts["maisonneuebold-webfont.woff"]}) format('woff'),
      url(${fonts["maisonneuebold-webfont.ttf"]})  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Maison Book';
    src: url(${fonts["maisonneuebook-webfont.woff"]}) format('woff'),
      url(${fonts["maisonneuebook-webfont.ttf"]})  format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Maison Mono';
    src: url(${fonts["maisonneuemono-webfont.woff"]}) format('woff'),
      url(${fonts["maisonneuemono-webfont.ttf"]})  format('truetype');
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
    height: 100vh;
  }

  body > section {
    height: 100%;
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
