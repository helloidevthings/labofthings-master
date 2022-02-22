import styled from '@emotion/styled';

export default styled.main`
  --primary: var(${(props) => `--${props.currentColor}`});
  /* --primary-lightest: '94'; */

  --secondary: var(${(props) => `--${props.currentColor}Secondary`});
  --mainGradient: var(${(props) => `--${props.currentColor}Gradient`});

  --black: ${(props) => (props.currentColor === 'dark' ? '#fff' : '#000')};
  --white: ${(props) => (props.currentColor === 'dark' ? '#13131b' : '#fff')};
  --fuschia: #ff48ff;
  --blue: #00bbff;
  --dark: #395cba;
  --gray: #acadb9;

  --fuschiaSecondary: #a600f9;
  --blueSecondary: #01016a;
  --darkSecondary: #848489;
  --graySecondary: #292838;

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
    background-color: #f3ccff;
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

  a {
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    color: var(--secondary);
    font-size: 1.1em;
  }

  button {
    padding: 0.2em 0.7em 0.4em;
    margin: 1em 0.2em;
    background: var(--primary);
    color: var(--black);
    font-size: 1em;
    font-family: 'loos-normal', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.02em;
    border: none;
    border-radius: 1em;
    box-shadow: none;
    transition: box-shadow 0.4s ease-in-out;

    &.active {
      box-shadow: 3px 1px 0px 1px #fff;
    }
  }

  .circleCrop {
    max-width: 12rem;
    max-height: 12rem;
    border-radius: 100%;
    overflow: hidden; 
    object-position: 50% 50%;
    
    img {
      max-height: 12rem; 
      object-fit: cover;
    }
  }

  article {
    background: var(--white);
    margin: 1em 1em 1.3em;
    padding: 1em;
    position: relative;
    box-shadow: 8px 8px 0 var(--primary);
    @media only screen and (max-width: 600px) {
      margin: 1em 0.1em 1.4em;
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
