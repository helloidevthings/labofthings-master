import React from 'react';
import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
        margin: 0;
      }

      body {
        font-family: 'Montserrat', sans-serif;
        color: #000000;
        line-height: 1.59;
        font-weight: 500;
        text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
        font-size: calc(14px + (20 - 14) * ((100vw - 320px) / (2100 - 320)));
      }
      a {
        color: white;
      }
      *, *::before, *::after {
        box-sizing: border-box;
      }
      /*
        2. Remove default margin
      */
      * {
        margin: 0;
      }
      /*
        3. Allow percentage-based heights in the application
      */
      html, body {
        height: 100%;
      }
      /*
        6. Improve media defaults
      */
      img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
      }
      /*
        7. Remove built-in form typography styles
      */
      input, button, textarea, select {
        font: inherit;
      }
      /*
        8. Avoid text overflows
      */
      p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
      }
      /*
        9. Create a root stacking context
      */
      #root, #__next {
        isolation: isolate;
      }
    `}
  />
);
export default GlobalStyles;
