import styled from '@emotion/styled';

export default styled.nav`
 position: relative;
 overflow: hidden;
 margin-top: 1rem;
 background: linear-gradient(45deg, #c8c8c8, #ffffff);
 box-shadow: 0px 2px 7px 2px #b4b4b4;
 border-radius: 4rem;
 z-index: 1;
 max-width: max-content;

 button {
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  padding: 0.8rem 1.2rem;
  border-radius: 4rem;
  font-family: 'loos-normal', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.125rem;
  color: #000;
  z-index: 2;
  transition: color 0.3s ease-in-out;

  &.active {
   color: white;
  }
 }
`;
