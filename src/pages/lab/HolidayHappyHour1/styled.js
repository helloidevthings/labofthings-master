import styled from '@emotion/styled';

export default styled.main`
  width: 100%;
  background-color: #ef4723;
  background-color: #87678b;
  color: black;
  line-height: 1.45;
  font-family: 'Gentium Book Basic', serif;
  border: 8px #000 solid;
  display: flex;
  flex-wrap: wrap;
  & > * {
    font-size: 14px;
    box-sizing: border-box;
  }

  *::selection {
    color: #66a762;
    background: #000;
  }

  .dark {
    background: #6da96a;
    z-index: 1;
    *::selection {
      color: #dd5234;
      background: #000;
    }
  }

  .columns {
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    gap: 0px;
    align-items: stretch;
    align-content: stretch;
  }

  .largest {
    font-size: 5em;
  }

  .title {
    position: relative;
    overflow: hidden;
  }

  .center {
    text-align: center;
    margin: auto;
  }

  .snowflake {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .snowflakeWrap {
    position: relative;
    z-index: 0;
  }

  article {
    padding: 3em;
    max-width: 50rem;
    background-color: #e15b3f;
    outline: 8px #000 solid;
    z-index: 2;

    &:nth-of-type(even) {
      background: #6da96a;
      z-index: 1;
      *::selection {
        color: #dd5234;
        background: #000;
      }
    }
  }

  // Fluid Typography
  .fluid {
    font-size: calc(16px + (21 - 16) * ((100vw - 320px) / (2100 - 320)));
  }

  h1 {
    font-family: 'Noto Serif JP', serif;
    font-size: 3.3em;
    line-height: 1;
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
    font-size: 1.05em;
  }

  small {
    font-size: 0.9em;
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
    padding: 0;
    margin: 2rem 0;
    li {
      list-style: none;
      margin: 0.4em 0;
      position: relative;
      padding-left: 1.6em;

      &:before {
        content: '☞';
        position: absolute;
        left: 0;
        top: -0.1em;
        font-size: 1.2em;
      }

      & a {
        color: #000;
        text-decoration: none;
        padding-top: 0.1em;
        padding-bottom: 0.1em;
        font-family: 'Open Sans', sans-serif;
        font-size: 0.9em;
        /* letter-spacing: 0.24em; */
        font-weight: 700;
        position: relative;
        transition: color 0.3s ease-in;

        &:before,
        &:after {
          content: '';
          display: block;
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: #fff;
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
          color: #fff;

          &:before,
          &:after {
            transform: scaleX(1);
          }
        }
      }
    }
  }
  .itemTo {
    animation-duration: 4s;
    animation-iteration-count: infinite;
    transform-origin: top;
  }

  .bounce1 {
    animation-name: bounce1;
    animation-timing-function: ease;
  }

  @keyframes bounce1 {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 100%);
      bottom: 0;
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;
