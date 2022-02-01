import styled from '@emotion/styled';

const orange = '#f56600';
const white = '#fff';
const black = '#000';
const dkOrange = '#f03800';
const ltOrange = '#ff6a00';

export default styled.main`
  width: 100vw;
  margin: 0 auto;
  padding: 1rem;
  font-family: 'Open Sans', sans-serif;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  text-rendering: optimizeLegibility;
  font-size: calc(16px + (21 - 16) * ((100vw - 320px) / (2100 - 320)));
  line-height: 1.5;

  /* Global Resets */
  * {
    margin: 0;
    line-height: calc(1em + 0.6rem);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  #root,
  #__next {
    isolation: isolate;
  }
  /* End Global Resets */

  /* Styles */
  *::selection {
    background: ${black};
    color: ${white};
  }

  article {
    display: flex;
    flex-direction: column;
    max-width: 50em;
  }

  .dark {
    background: #222222;
    color: ${white};
    padding: 1em;

    *::selection {
      background: ${white};
      color: ${black};
    }

    /* Heading Styles */
    & h1,
    h2,
    h3 {
      color: ${ltOrange};
    }

    & a {
      color: white;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Exo', sans-serif;
    line-height: 1.4;
  }

  h5,
  h6 {
    font-family: 'Open Sans', sans-serif;
    line-height: 1.3;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.7rem;
  }

  h4 {
    font-size: 1.6rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  /* Paragraph Styles */
  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  small {
    font-size: 0.9rem;
  }

  em,
  i {
    font-style: Italic;
  }

  strong,
  b {
    font-weight: 800;
  }

  /* Link Styles */
  a {
    color: ${black};
    font-size: 0.94em;
    font-weight: 700;
    text-decoration: none;
    position: relative;

    &:hover {
      color: ${orange};

      &:after {
        transform: scaleX(0);
      }
    }

    &:after {
      content: '';
      background: ${orange};
      height: 2px;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      transform: scaleX(1);
      transform-origin: right;
      transition: transform 0.3s ease-in-out, color 0.9s ease;
    }
  }

  hr {
    margin: 2rem;
  }

  blockquote {
    font-family: Exo;
    font-size: 1.4rem; 
    font-weight: 600;
    letter-spacing: .02em; 
    margin: 0.8em 0;
    padding: 0 1.2em;
    position: relative;

    &:before {
      content: '';
      background: linear-gradient(0deg, ${dkOrange}, ${ltOrange});
      height: 100%;
      width: 8px;
      position: absolute;
      left: 0;
    }
  }

  button {
    background: linear-gradient(270deg, ${dkOrange}, ${ltOrange});
    color: ${white};
    margin: 1em 0;
    padding: 0.3em 1em;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: linear-gradient(270deg, ${ltOrange}, ${dkOrange});
    }
  }

  /* Utility Classes */
  .primary {
    color: ${ltOrange};
  }

  /* Ul LI UL LI & OL LI OL LI */
  ul {
    padding-block-start: 0;
    padding: 1rem; 
    margin-bottom: .4rem;
  }
  ul li {
    list-style: none;
    padding-left: 0.7em;
    margin-bottom: 0.5em;
    position: relative;

    &:before {
      content: '';
      display: block;
      position: absolute;
      background: ${ltOrange};
      height: 5px;
      width: 5px;
      top: 0.6em;
      left: -0.1em;
      border-radius: 50%;
    }

    /* Reset any title inside an LI */
    & h3, h4, h5 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    /* Nested UL / LI */
    ul {
      padding-top: .2em; 
      padding-left: 1em;

      /* Reset any title inside the Nested UL */
      & h3, h4, h5 {
        font-size: 1.3rem;
        font-weight: 600;
      }  
      li {
        font-size: 1rem;
      }
    }
  }
`;
