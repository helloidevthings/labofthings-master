import styled from '@emotion/styled';

export default styled.section`
  --fuschia: #ff48ff;
  --blue: #00bbff;
  --dark: #395cba;
  --gray: #acadb9;

  --fuschiaSecondary: #a600f9;
  --blueSecondary: #01016a;
  --darkSecondary: #fbbe5d;
  --graySecondary: #292838;

  --fuschiaGradient: linear-gradient(45deg, #01016a, #7028d1, #ff48ff);
  --blueGradient: linear-gradient(45deg, #01016a, #0014ff, #009aff);
  --darkGradient: linear-gradient(45deg, #000000, #2b2a37, #2f2f59);
  --grayGradient: linear-gradient(45deg, #1e1e1e, #292838, #555768);

  width: 100vw;
  min-height: 100%;
  background: var(--fuschiaGradient);
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  font-family: 'Fira Sans', sans-serif;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: 0em;
  padding: 1em;
  transition: all 0.4s ease-in-out;
  @media only screen and (max-width: 600px) {
    padding: 0.5em;
  }

  header {
    max-width: 50rem;
  }

  main {
    display: flex; 
    flex-wrap: wrap;
    justify-content: center; 
  }

  figure {
    max-width: 12rem;
    max-height: 12rem;
    border-radius: 100%;
    overflow: hidden; 
    object-position: 50% 50%;
    background-color: var(--primary);
    
    img {
      max-height: 12rem; 
      object-fit: cover;
      mix-blend-mode: luminosity;
    }
  }
  .title {
    transition: all 1s ease-in-out;
    z-index: 0;
    position: relative;
    }
  }

  h1 {
    font-family: 'loos-wide', sans-serif;
    font-size: 10em;
    line-height: .98;
    @media only screen and (max-width: 600px) {
      font-size: 5em;
    }
  }
  h2 {
    font-family: 'loos-wide', sans-serif;
    font-size: 5em;
    @media only screen and (max-width: 600px) {
      font-size: 3em;
    }
  }

  nav {
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 1em .1em;
    & > * {
      margin: .3em;
    }
  }

  a {
    text-decoration: none; 
    padding: 0 .1em; 
    position: relative; 
    color: #fff;
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    font-size: 1.3em;
    letter-spacing: .03em;
    z-index: 0; 
    transition: color .6s ease-in-out;

    &:after {
      content: '';
      background: var(--fuschia);
      height: 3px;
      width: 100%;
      height: 100%; 
      transform: scaleY(.1);
      transform-origin: bottom; 
      left: 0;
      position: absolute;
      bottom: 0;  
      z-index: -1;
      transition: transform .5s cubic-bezier(0.62, 0.01, 0.64, 1.32);
    }

    &:hover {
      color: var(--white);
      &:after {
        transform: scaleY(1);
      }
    }
  }

  // All Animations
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  @keyframes gradientFade {
    from {
      transform: translate(50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(50%, -50%) rotate(360deg);
    }
  }
`;
