import styled from '@emotion/styled';

const white = '#fff';
const black = '#000';
const fuschia = '#fc04fc';
const orchid = '#a600f9';
const navy = '#01016a';
// const purple = '#7026d3';

export default styled.main`
  width: 100vw;
  height: 100%;
  background: linear-gradient(45deg, #01016a, #7028d1, #ff48ff);
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  font-family: 'Fira Sans', sans-serif;
  color: ${black};
  /* color: ${navy}; */
  line-height: 1.45;
  letter-spacing: 0em;
  padding: 1em;

  *::selection {
    color: ${black};
    background-color: #f3ccff;
  }

  h1 {
    padding: 0.1em 0.3em 0.3em;
    background: ${white};
    border: 0.2em solid ${black};
    color: ${black};
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
    color: ${orchid};
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
    background: linear-gradient(45deg, #a900ff, #5500dd);
    background: linear-gradient(45deg, #5701dd, #be40cd);
    color: #fff;
    padding: 0.1em 0.4em .2em;
    margin-left: .2em; 
    background: linear-gradient(45deg, #c59fff, #f390ff);
    color: #4b00cb;
  }

  ul li {
    line-height: 1.6;
    position: relative;
    list-style: none;
    margin-bottom: .2em; 

    &:after {
      content: '';
      display: block;
      position: absolute;
      background: ${fuschia};
      height: .3em;
      width: .3em;
      top: 0.6em;
      left: -0.8em;
      border-radius: 50%;
    }
  }
  ul {
    margin-block-start: 0;
    margin-bottom: 1em;
    padding-inline-start: 1em;

      ol {
        margin-block-start: 0;
        margin-bottom: 1em;
        padding-inline-start: 0;
        list-style: none;
        counter-reset: my-awesome-counter;
        li {
          counter-increment: my-awesome-counter;
          &:before {
            content: counter(my-awesome-counter) '. ';
            color: ${fuschia};
            font-weight: bold;
            font-family: 'loos-extended', sans-serif;
          }
          &:after {
            content: none;
          }
        }
      }
    }
  }
`;
