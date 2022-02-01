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

  /* Global Resets */
  * {
    margin: 0;
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
    line-height: 1.5;
    font-size: calc(16px + (21 - 16) * ((100vw - 320px) / (2100 - 320)));
  }

  .dark {
    background: #222222;
    color: ${white};
    padding: 1em;

    *::selection {
      background: ${white};
      color: ${black};
    }

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
    font-size: 2.5em;
  }

  h2 {
    font-size: 2em;
  }

  h3 {
    font-size: 1.7em;
  }

  h4 {
    font-size: 1.6em;
  }

  h5 {
    font-size: 1.2em;
  }

  h6 {
    font-size: 1em;
  }

  p {
    font-size: 1em;
    margin: 0.5em 0;
  }

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
    font-weight: 700;
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

  /* Blog Styles */
  .blog {
    max-width: 60rem;

    & figure {
      width: 100%;
    }

    img {
      object-fit: cover;
      max-width: 100%;
    }
  }
`;
