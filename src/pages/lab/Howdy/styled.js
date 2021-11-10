import styled from '@emotion/styled';

export default styled.main`
  background: #000;
  padding: 3rem;
  height: 100vh;
  width: 100vw;
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  article {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
  }

  .howdy {
    max-width: 50em;
    margin: 0 auto;
  }

  .foodDrink {
    max-width: 30em;
  }

  /* Draw In 1x and Stop */
  .drawIn1x {
    stroke-dasharray: 3000;
    animation: drawIn1x 4s ease-in-out;
    animation-iteration-count: 1;
  }
  .drawIn1xSlow {
    stroke-dasharray: 3000;
    animation: drawIn1x 6s ease-in-out;
    animation-iteration-count: 1;
  }

  @keyframes drawIn1x {
    from {
      stroke-dashoffset: 3000;
    }
    to {
      stroke-dashoffset: 0;
    }
  }

  .flicker0 {
    opacity: 1;
    animation: flicker 5s step-end;
    animation-delay: 4s;
  }

  .flicker1 {
    opacity: 1;
    animation: flicker 2.3s 2s step-end;
    animation-delay: 0.2s;
  }
  .flicker2 {
    opacity: 1;
    animation: flicker 3s step-end infinate;
    animation-delay: 4s;
  }
  .flicker3 {
    opacity: 1;
    animation: flicker 1s step-end;
    animation-delay: 2s;
  }
  .flicker4 {
    opacity: 1;
    animation: flicker 2s step-end;
    animation-delay: 5s;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    3% {
      opacity: 0.4;
    }
    6% {
      opacity: 1;
    }
    7% {
      opacity: 0.4;
    }
    8% {
      opacity: 1;
    }
    9% {
      opacity: 0.4;
    }
    10% {
      opacity: 1;
    }
    89% {
      opacity: 1;
    }
    90% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.4;
    }
  }
`;
