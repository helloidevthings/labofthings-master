import styled from '@emotion/styled';

export default styled.section`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Roboto', sans-serif;
  position: relative;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #01006b 0%, #000000 100%);
  color: #efadff;
  text-align: center;
  z-index: 0;

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
    z-index: 1;
    opacity: 0.5;
    animation: rotation 7s linear infinite;
  }

  main {
    z-index: 2;
    transition: all 1s ease-in-out;

    &:after {
      content: '';
      position: absolute;
      display: block;
      height: 20em;
      width: 20em;
      border-radius: 100%;
      top: 50%;
      right: 30%;
      z-index: 3;
      background: linear-gradient(180deg, #3a03ca 0%, #04fcfc 100%);
      opacity: 0.8;
    }
    &:hover {
      color: white;

      &:after {
        background: radial-gradient(
          50% 50% at 50% 50%,
          #3a03ca 0%,
          rgba(58, 3, 202, 0) 100%
        );
      }
    }
  }

  h1 {
    font-size: 8em;
    line-height: 1.45;
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

  @keyframes gradient-fade {
    from {
      transform: translate(50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(50%, -50%) rotate(360deg);
    }
  }
`;
