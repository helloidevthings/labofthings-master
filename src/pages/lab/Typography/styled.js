import styled from '@emotion/styled';

export default styled.main`
  width: 100%;
  background-color: #ef4723;
  line-height: 1.45;
  font-family: 'Gentium Book Basic', serif;
  display: flex;
  flex-wrap: wrap;
  & > * {
    font-size: 14px;
  }

  .columns {
    display: flex;
    flex-wrap: wrap;
    & > * {
      flex: 1 1 400px;
    }
  }

  article {
    padding: 3em;
    max-width: 50rem;
  }

  // Fluid Typography
  .fluid {
    font-size: calc(16px + (21 - 16) * ((100vw - 320px) / (2100 - 320)));
  }

  *::selection {
    color: #ffffff;
    background-color: #000000;
  }

  /* Responsive Typography */
  .responsive {
    font-size: 16px;
    @media (min-width: 720px) {
      font-size: 18px;
    }
    @media (min-width: 1440px) {
      font-size: 20px;
    }
    @media (min-width: 2100px) {
      font-size: 21px;
    }
  }
  h1 {
    font-family: 'Noto Serif JP', serif;
    font-size: 3.45em;
    line-height: 1.1;
    margin-bottom: 0.3em;
  }

  h2 {
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    font-size: 1.24em;
    letter-spacing: 0.04em;
    font-weight: 700;
    line-height: 1.2;
  }

  h3 {
    font-family: 'Open Sans', sans-serif;
    color: #000;
    font-size: 1em;
    font-weight: 700;
    margin-bottom: 0.6em;
  }

  h5 {
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: -0.03em;
    font-size: 0.8em;
    color: pink;
    font-weight: 600;
    margin-bottom: 0.6em;
    z-index: 1;
    background: #000;
    padding: 1em 1.4em;
    border-radius: 2em;
  }

  p {
    line-height: 1.4;
    margin: 0.5em 0;
  }
  a {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9em;
    font-weight: 700;
    text-decoration: none;
    color: #000;
    position: relative;

    &:hover {
      color: #fff;
    }

    &:after {
      content: '';
      height: 2px;
      width: 100%;
      background: pink;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  ul {
    li {
      list-style: none;
      margin-bottom: 0.8em;

      a {
        color: #ef4723;
        text-decoration: none;
        padding-top: 0.2em;
        padding-bottom: 0.2em;
        font-family: 'Open Sans', sans-serif;
        text-transform: uppercase;
        font-size: 0.8em;
        letter-spacing: 0.24em;
        font-weight: 800;
        position: relative;
        transition: color 0.3s ease-in;

        &:before,
        &:after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: #ef4723;
          transform: scaleX(0);
          transition: transform 0.8s cubic-bezier(0.6, -0.01, 0.11, 0.99);
        }

        &:before {
          top: 0;
          left: 0;
          transform-origin: top left;
        }

        &:after {
          bottom: 0;
          right: 0;
          transform-origin: bottom right;
        }

        &:hover {
          color: pink;

          &:before,
          &:after {
            transform: scaleX(1);
          }
        }
      }
    }
  }

  footer {
    align-self: flex-end;
    padding: 3rem;
    background: #000;
    color: #fff;
    width: 100%;
    p {
      max-width: 40em;
    }
  }
`;
