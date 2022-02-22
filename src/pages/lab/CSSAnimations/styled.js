import styled from '@emotion/styled';

export default styled.main`
  --primary: var(${(props) => `--${props.currentColor}`});
  --secondary: var(${(props) => `--${props.currentColor}Secondary`});
  --tertiary: var(${(props) => `--${props.currentColor}Tertiary`});
  --mainGradient: var(${(props) => `--${props.currentColor}Gradient`});

  --black: ${(props) => (props.currentColor === 'dark' ? '#fff' : '#000')};
  --white: ${(props) => (props.currentColor === 'dark' ? '#13131b' : '#fff')};
  --fuschia: #ff48ff;
  --blue: #00bbff;
  --dark: #395cba;
  --gray: #acadb9;

  --fuschiaSecondary: #5c00d1;
  --blueSecondary: #01016a;
  --darkSecondary: #fbbe5d;
  --graySecondary: #292838;

  --fuschiaTertiary: #b78dff;
  --blueTertiary: #6f6fff;
  --darkTertiary: #995200;
  --grayTertiary: #5a5968;

  --fuschiaGradient: linear-gradient(45deg, #01016a, #7028d1, #ff48ff);
  --blueGradient: linear-gradient(45deg, #01016a, #0014ff, #009aff);
  --darkGradient: linear-gradient(45deg, #000000, #2b2a37, #2f2f59);
  --grayGradient: linear-gradient(45deg, #1e1e1e, #292838, #555768);

  width: 100vw;
  height: 100%;
  background: var(--mainGradient);
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  font-family: 'Fira Sans', sans-serif;
  color: var(--black);
  line-height: 1.45;
  letter-spacing: 0em;
  padding: 1em;
  transition: all 0.4s ease-in-out;
  @media only screen and (max-width: 600px) {
    padding: 0.3em;
  }

  *::selection {
    color: var(--black);
    background-color: var(--primary);
  }

  h1 {
    padding: 0.1em 0.3em 0.3em;
    background: var(--white);
    border: 0.2em solid var(--black);
    color: var(--black);
    font-family: 'loos-extended', sans-serif;
    font-size: 3em;
    @media only screen and (max-width: 600px) {
      font-size: 2em;
    }
    font-weight: 700;
    font-style: normal;
    line-height: 1.2;
  }

  h2 {
    margin-bottom: 0.3em;
    font-weight: 700;
    font-family: 'loos-wide', sans-serif;
    line-height: 1.1;
  }
  h3,
  h4,
  h5 {
    font-family: 'loos-normal', sans-serif;
    font-family: 'Fira Sans', sans-serif;
    line-height: 1.3;
  }

  svg {
    stroke: var(--primary);
  }

  hr {
    border: 2px solid var(--primary);
    margin: 0.5em 0;
  }

  a {
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    color: var(--secondary);
    font-size: 1.1em;
    text-decoration: none;
    padding: 0 0.1em;
    position: relative;
    z-index: 0;
    transition: color 0.6s ease-in-out;

    &:after {
      content: '';
      background: var(--primary);
      height: 3px;
      width: 100%;
      height: 100%;
      transform: scaleY(0.1);
      transform-origin: bottom;
      left: 0;
      position: absolute;
      bottom: 0;
      z-index: -1;
      transition: transform 0.5s cubic-bezier(0.62, 0.01, 0.64, 1.32);
    }

    &:hover {
      color: var(--white);
      &:after {
        transform: scaleY(1);
      }
    }
  }

  button {
    padding: 0.2em 0.7em 0.25em;
    margin: 1em 0.2em;
    background: var(--primary);
    color: var(--black);
    font-size: 1em;
    font-family: 'loos-normal', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.02em;
    border: none;
    border-radius: 30px;
    box-shadow: 3px 1px 0px 1px #000;
    transition: all 0.3s ease-in-out;

    &.active {
      box-shadow: inset 3px 1px 0px 1px #000;
      background: var(--secondary);
      color: var(--white);
    }
  }

.twoCol {
  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(20em, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(25em, 1fr));

}

figure {
  margin: .3rem; 
      box-shadow:8px 8px 0 var(--tertiary); 
  }

  .circleCrop {
    max-width: 13rem;
    max-height: 13rem;
    position: relative;
    /* overflow: hidden; */
    background-color: var(--primary);
    border-radius: 100%;
    z-index: 1; 
    box-shadow: none; 

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12rem;
      mix-blend-mode: luminosity;
      z-index: 2; 
    }
    figcaption {
      position: absolute; 
      z-index: 10; 
      bottom: 0; 
      right: 0; 
      background: var(--secondary);
      font-size: 1em;
      color: var(--white);
      padding: .1rem .7rem;
      box-shadow:8px 8px 0 var(--tertiary); 
    }
  }

    .exampleImg {
      max-width: 30rem;
      min-height: 14rem; 
      z-index: 1;
      background-color: var(--primary);
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        z-index: 1;
        position: absolute;
        left: 0;
        top: 0; 
        /* mix-blend-mode: luminosity; */
      }

      figcaption {
        position: absolute;
        background: var(--secondary);
        color: var(--white);
        padding: 1rem 1.4rem;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 10;

        a {
          color: var(--white);
        }
      }
    }

    article {
      background: var(--white);
      margin: 1em 1em 1.3em;
      padding: 1.3em 2em 2.3em;
      position: relative;
      box-shadow: 8px 8px 0 var(--primary);
      @media only screen and (max-width: 600px) {
        margin: 1em 0.1em 1.4em;
        padding: 1em;
      }
    }
    code {
      font-weight: 500;
      /* background: linear-gradient(45deg, #c59fff, #f390ff); */
      background: var(--primary);
      color: var(--black);
      padding: 0.1em 0.4em 0.2em;
      margin-left: 0.2em;
      opacity: 0.8;
    }

    ul li {
      line-height: 1.6;
      position: relative;
      list-style: none;
      margin-bottom: 0.2em;

      &:after {
        content: '';
        display: block;
        position: absolute;
        background: var(--primary);
        height: 0.3em;
        width: 0.3em;
        top: 0.6em;
        left: -0.8em;
        border-radius: 50%;
      }
    }

    ul {
      margin-block-start: 0;
      margin-bottom: 1em;
      padding-inline-start: 1em;

      ol {
        margin-block-start: 0;
        margin-bottom: 1em;
        padding-inline-start: 0;
        list-style: none;
        counter-reset: my-awesome-counter;
        li {
          counter-increment: my-awesome-counter;
          &:before {
            content: counter(my-awesome-counter) '. ';
            color: var(--primary);
            font-weight: bold;
            font-family: 'loos-extended', sans-serif;
          }
          &:after {
            content: none;
          }
        }
      }
    }
  }

  .draw-in {
    stroke-dasharray: 1000;
    stroke-dashoffset: 10;
    animation: draw 15s ease-in-out alternate infinite;
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1000;
    }

    to {
      stroke-dashoffset: 0;
    }
  }
  .item-to {
    animation-duration: 10s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  }

  .bounce-1 {
    animation-name: bounce-1;
    animation-timing-function: ease;
  }

  .bounce-2 {
    animation-name: bounce-2;
    animation-timing-function: ease;
  }

  .bounce-3 {
    animation-name: bounce-3;
    animation-timing-function: ease;
  }

  @keyframes bounce-1 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bounce-2 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bounce-3 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
