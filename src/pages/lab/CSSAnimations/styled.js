import styled from '@emotion/styled';

export default styled.main`
  width: 100vw;
  height: 100%;
  background: linear-gradient(45deg, #01016a, #7026d3, #fc04fc);
  font-family: 'Gentium Book Basic', serif;
  /* font-family: 'Fira Sans', sans-serif; */
  /* font-family: 'Amaranth', sans-serif; */

  font-weight: 400;

  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  color: #000;
  line-height: 1.45;
  padding: 1em;

  h1 {
    font-size: 3em;
    background: #fff;
    padding: 0.1em 0.3em;
    /* font-family: 'Amaranth', sans-serif; */
    /* font-family: 'Secular One', sans-serif; */
  }

  a {
    color: #fc04fc;
  }
  article {
    background: #fff;
    margin: 1em;
    padding: 1em;
    position: relative;
    box-shadow: 8px 8px 0 #fc04fc;
  }
  code {
    background: linear-gradient(45deg, #7026d3, #fc04fc);
    color: #fff;
    padding: 0.1em 0.3em;
  }
  ul li {
    line-height: 1.6;
  }
`;
