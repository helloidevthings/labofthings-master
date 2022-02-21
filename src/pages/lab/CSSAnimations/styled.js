import styled from '@emotion/styled';

export default styled.main`
  width: 100vw;
  height: 100%;
  background: linear-gradient(45deg, #01016a, #7026d3, #fc04fc);
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  font-family: 'Fira Sans', sans-serif;
  color: #000;
  line-height: 1.45;
  letter-spacing: 0em;
  padding: 1em;

  *::selection {
    color: #fff;
    background-color: #7026d3;
  }

  h1 {
    padding: 0.1em 0.3em 0.3em;
    background: #fc04fc;
    border: 0.2em solid #01016a;
    color: #01016a;
    font-family: 'loos-extended', sans-serif;
    font-size: 3em;
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

  a {
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    color: #fc04fc;
    font-size: 1.1em;
  }

  article {
    background: #fff;
    margin: 1em 1em 1.3em;
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
  ul {
    margin-block-start: 0;
    margin-bottom: 1em;
    padding-inline-start: 1em;
  }
  ol {
    margin-block-start: 0;
    margin-bottom: 1em;
    padding-inline-start: 1em;
  }
`;
