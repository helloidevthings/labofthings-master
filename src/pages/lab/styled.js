import styled from '@emotion/styled';

export default styled.section`
  width: 100vw;
  background: linear-gradient(180deg, #01006b 0%, #000000 100%);
  color: #efadff;
  font-family: monospace;
  font-size: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: center;

  ul {
    padding-inline-start: 0;

    li {
      font-size: 2.4rem;
      margin-bottom: 1rem;
      list-style: none;

      & a {
        &:hover {
          color: pink;
        }
      }

      ul li {
        font-size: 1.5rem;
      }
    }
  }
`;
