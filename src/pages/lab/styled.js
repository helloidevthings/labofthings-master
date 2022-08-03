import styled from '@emotion/styled';

export default styled.section`
 width: 100vw;
 background: var(--fuschiaGradient);
 color: #fff;
 font-family: monospace;
 font-size: 3rem;
 padding: 1rem;
 display: flex;
 justify-content: center;

 ul {
  padding-inline-start: 0;

  li {
   font-size: 2rem;
   margin-bottom: 1rem;
   list-style: none;
   a {
    text-decoration: none;
    padding: 0 0.1em;
    position: relative;
    color: #fff;
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    font-size: 1.3em;
    letter-spacing: 0.03em;
    z-index: 0;
    transition: color 0.6s ease-in-out;

    &:after {
     content: '';
     background: var(--fuschia);
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
  }

  ul li {
   font-size: 1.5rem;
  }
 }
`;
