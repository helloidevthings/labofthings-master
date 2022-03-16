import styled from '@emotion/styled';

// const unicode = `'\201C'`;

export default styled.main`
  --primary: var(${(props) => `--${props.currentColor}`});
  --secondary: var(${(props) => `--${props.currentColor}Secondary`});
  --tertiary: var(${(props) => `--${props.currentColor}Tertiary`});
  --tertLight: var(${(props) => `--${props.currentColor}TertLT`});
  --mainGradient: var(${(props) => `--${props.currentColor}Gradient`});

  --black: ${(props) => (props.currentColor === 'dark' ? '#fff' : '#000')};
  --white: ${(props) => (props.currentColor === 'dark' ? '#13131b' : '#fff')};
  --fuschia: #ff48ff;
  --blue: #55d2ff;
  --dark: #395cba;
  --gray: #acabb7;

  --fuschiaSecondary: #5c00d1;
  --blueSecondary: #1e1ec3;
  --darkSecondary: #fbbe5d;
  --graySecondary: #292838;

  --fuschiaTertiary: #b78dff;
  --blueTertiary: #76d4ff;
  --darkTertiary: #995200;
  --grayTertiary: #acabb7;

  --fuschiaTertLT: #f7bfff;
  --blueTertLT: #c6d6ff;
  --darkTertLT: #24243d;
  --grayTertLT: #e1e0ec;

  --fuschiaGradient: linear-gradient(45deg, #01016a, #7028d1, #ff93e3);
  --blueGradient: linear-gradient(45deg, #3838b8, #2232f0, #55bcff);
  --darkGradient: linear-gradient(45deg, #000000, #2b2a37, #2f2f59);
  --grayGradient: linear-gradient(45deg, #1e1e1e, #292838, #555768);

  width: 100vw;
  height: 100%;
  background: var(--mainGradient);
  font-size: calc(14px + (24 - 14) * ((100vw - 300px) / (2100 - 300)));
  font-family: 'Fira Sans', sans-serif;
  color: var(--black);
  line-height: 1.51;
  letter-spacing: 0em;
  padding: 1em;
  /* transition: all 0.4s ease-in-out; */
  @media only screen and (max-width: 600px) {
    padding: 0.3em;
  }

  *::selection {
    color: var(--black);
    background-color: var(--primary);
  }

  img, picture, video, canvas {
  display: block;
  max-width: 100%;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

  h1 {
    padding: 0.1em 0.3em 0.3em;
    background: var(--white);
    border: 4px solid var(--black);
    color: var(--black);
    font-family: 'loos-extended', sans-serif;
    font-weight: 800;
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

  h4, h5 {
    text-transform: uppercase;
    font-family: 'loos-wide', sans-serif;
    font-weight: 600;
    letter-spacing: .03em ;
  }
   
  hr {
    border: 2px solid var(--primary);
    margin: 0.9em 0;
  }

  p {
    font-size: 1em;
    /* max-width: 40em; */

    & > a {
      font-size: 1em;
     
      &:after {
      content: '';
      background: var(--primary);
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
  }

  small {
    font-size: .8em; 
    & > a {
      text-decoration: underline;
      &:after {
        content: none; 
      }
    }
  }

  a {
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    color: var(--secondary);
    font-size: 1.2em;
    text-decoration: none;
    padding: 0 0.1em;
    position: relative;
    z-index: 0;
    transition: color 0.6s ease-in-out;

    &:after {
      content: '';
      display: block;
      background: var(--primary);
      width: 102%;
      height: 2px;
      transform: scaleX(0);
      transform-origin: left;
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: -1;
      transition: color 0.3s ease-in-out, transform .2s ease-in-out;
    }

    svg {
      display: inline; 
      max-height: 0.78em;
      max-width: 1em;
      transform: translateX(0px);
      transition: transform .3s cubic-bezier(0.46, 0, 0.28, 1.2);
    }

    &:hover {
      color: var(--primary);

      &:after {
        transform: scaleY(1);
      }

      svg {
        transform: translateX(+5px);
      }
    }
    
  }

  button {
    padding: 3px 12px 4px;
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
    &:hover {
      background: var(--white);
      color: var(--black);
    }
  }
  
  .dropplet {
    background: none; 
    box-shadow: none;
    padding: 0; 
    margin: 0; 
    position: relative;
    transition: all .4s ease-in-out;

    & svg {
      height: 1.5em;
      width: 1.5em; 
      stroke: none; 
    }

    .tooltip {
      width: max-content; 
      height: max-content;
      max-width: 97vw;
      position: absolute;
      padding: .7rem;
      box-shadow: 8px 8px 0px var(--secondary); 
      border: 4px var(--secondary) solid; 
      left: 0; 
      top: 100%;
      background: var(--tertiary);
      border-radius: 1.1rem;
      transform-origin: top left;
      transform: scale(.2) translateX(-200%);
      transition: all .4s ease-in-out;
      z-index: 1000;
  
      h5 {
        color: var(--black);
        background: var(--white);
        padding: .3rem .2rem;
        font-size: 1em;
      }
      img {
        max-width: 100%;
        margin-top: .2rem;
      }
    }

    &:hover {
      background: none; 
    }
  }

  [aria-haspopup=true] {
    .tooltip {
      transform: scale(1) translateX(0);      
    }
  }

  .twoCol {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    grid-column-gap: 2em;
    grid-template-rows: auto;
    align-items: start;
  }

  .twoFlex {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }


  blockquote {
    /* font-family:'loos-normal', sans-serif; */
    position: relative;
    padding: 1em 2em;
    margin: .3em; 
    font-style: italic;
    background: var(--tertLight);

    &:before {
      content: '"';
      font-family:'loos-normal', sans-serif;
      font-size: 3em;
      color: var(--primary);
      position: absolute;
      left:.1em;
      top: .1em; 
      line-height: 1em;
    }
    cite {
      font-weight: 500;
      color: var(--secondary);

      &:before {
        content: '–';
      }
    }
  }

  figure {
    display:flex;
    flex-wrap: wrap;
    width: inherit;
    /* max-width: 40rem; */
    margin: .3rem .3rem 1rem;
    box-shadow: 8px 8px 0 var(--tertiary);
    background: var(--mainGradient);
    border: 3px solid var(--secondary);
    position: relative;
    z-index: 1;
    
    & > * {
      flex: 1 1 auto; 
    }
    
    img {
      filter: saturate(0) contrast(1);
      transition: filter .3s ease-in-out;

      &:hover {
        filter: none;
        /* mix-blend-mode: luminosity; */
      }
    }

    .smallFig {
      /* width: 100%;
      height: 100%; */
      object-fit: contain; 
      max-height: 20rem;
    }

    figcaption {
      /* position: absolute; */
      background: var(--secondary);
      color: var(--white);
      padding: .8rem 1rem;
      width: 100%;
      z-index: 10;
      font-size: .97em;

      a {
        color: var(--white);

        &:after {
          content: none; 
        }

        &:hover {
          color: var(--primary);
        }

      }
    }
  }

  .circleCrop {
    max-width: 13rem;
    max-height: 13rem;
    position: relative;
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

    section {
      background: var(--white);
      margin: 1em 1em 1.3em;
      padding: 1.3em 2em 2.3em;
      position: relative;
      box-shadow: 8px 8px 0 var(--primary);
      @media only screen and (max-width: 600px) {
        margin: 1em 0.1em 1.4em;
        padding: 1em;
      }

      animation: fadeIn .2s forwards; 
    }

    ${({ theme }) => theme.animations.fadeIn}

    aside {
      /* background: var(--tertiary); */
      border: 4px var(--tertiary) solid; 
      padding: 1em;
      box-shadow: 9px 8px 0px 0px var(--tertiary);   
      & hr {
        border-color: var(--tertiary);
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
      margin: 0.2em 0;

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

  .drawIn {
    stroke-dasharray: 1000;
    stroke-dashoffset: 10;
    animation: draw 15s ease-in-out alternate infinite;
  }

  .typeIt {
    width: 18ch;
    animation: typing 2s steps(15), effect .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid var(--tertiary);
  }

  @keyframes typing {
    from {
      width: 0
    }
  }
      
  @keyframes effect {
    50% {
      border-color: transparent
    }
  }

  @keyframes draw {
    from {
      stroke-dashoffset: 1000;
    }

    to {
      stroke-dashoffset: 0;
    }
  }

  .colorCircle {
    max-width: 7em; 
  }

  .colorFade {
    fill: var(---tertiary);
    animation: changeColor 7s linear infinite;
  }
  
  @keyframes changeColor {
    0% {
      fill: var(--primary);
    }
    50% {
      fill: var(--secondary);
    }
    100% {
      fill: var(--tertiary);
    }
  }

  .rotate {
   transform-origin: center;
   animation: rotation 13s linear infinite;
  }
  
  @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-360deg);
    }
  }

  /* .item-to {
    animation-duration: 10s;
    animation-iteration-count: infinite;
    transform-origin: bottom;
  } */

  .bounce-1 {
    animation-name: bounce-1;
    animation-timing-function: ease;
  }

  .bounce-2 {
    animation-name: bounce-2;
    animation-timing-function: ease;
  }

  /* .bounce-3 {
    animation-name: bounce-3;
    animation-timing-function: ease;
  } */

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

  /* @keyframes bounce-3 {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(30px);
    }
    100% {
      transform: translateY(0);
    }
  } */
`;
