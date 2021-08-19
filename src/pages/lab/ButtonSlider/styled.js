import styled from '@emotion/styled';

export default styled.nav`
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  background: linear-gradient(to right, #ffadff, #92a9ff);
  box-shadow: 0px 2px 7px 2px #59008e;
  border-radius: 4rem;
  z-index: 1;

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    padding: 0.8rem 1.2rem;
    border-radius: 4rem;
    font-size: 1rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.125rem;
    color: #4f008a;
    z-index: 2;
    transition: color 0.3s ease-in-out;

    &.active {
      color: white;
    }
  }
`;
