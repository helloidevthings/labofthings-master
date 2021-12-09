import styled from '@emotion/styled';

export default styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #01006b 0%, #000000 100%);
  color: #efadff;
  text-align: center;
  z-index: 0;

  .title {
    transition: all 1s ease-in-out;
    z-index: 0;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      display: block;
      height: 30em;
      width: 30em;
      border-radius: 100%;
      top: 30%;
      left: 30%;
      background: linear-gradient(180deg, #9e04fc 0%, #fc04fc 100%);
      z-index: -1;
      opacity: 0.5;
      animation: rotation 7s linear infinite;
    }

    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 20em;
      width: 20em;
      border-radius: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      background: linear-gradient(180deg, #3a03ca 0%, #007b93 100%);
      opacity: 0.8;
      animation: rotation 4s linear infinite;
    }

    &:hover {
      color: white;
      /* &:after {
        background: radial-gradient(
          50% 50% at 50% 50%,
          #3a03ca 0%,
          rgba(58, 3, 202, 0) 100%
        ); */
      }
    }
  }

  h1 {
    font-size: 8em;
    line-height: .98;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      padding: 1rem;
    }
  }

  nav {
    z-index: 1;
  }

  &:where(nav) a {
    font-size: 2rem;
    &:after {
      height: 3px;
    }
  }
  a {
    text-decoration: none;
    position: relative; 

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: 0; 
      right: 0;
      height: 2px;
      width: 100%;
      background: linear-gradient(90deg, #9e04fc 0%, #fc04fc 100%);
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease-in-out;
      z-index: -1;
    }
    &:hover {
      &:after {
        transform: scaleX(1);
      }
    }
  }

  .thing1 {
    transform-origin: center;
    animation: rotation 7s linear infinite;
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
