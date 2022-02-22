import styled from '@emotion/styled';

export default styled.main`
  --primary: var(${(props) => `--${props.currentColor}`});
  /* --primary-lightest: '94'; */

  --secondary: var(${(props) => `--${props.currentColor}Secondary`});
  --mainGradient: var(${(props) => `--${props.currentColor}Gradient`});
 
  --black: ${(props) => (props.currentColor === 'dark' ? '#fff' : '#000')};
  --white: ${(props) => (props.currentColor === 'dark' ? '#13131b' : '#fff')};
  --fuschia: #ff48ff;
  --blue: #00bbff;
  --dark: #395cba;
  --gray: #acadb9;

  --fuschiaSecondary: #a600f9;
  --blueSecondary: #01016a;
  --darkSecondary: #848489;
  --graySecondary: #292838;

  --fuschiaGradient: linear-gradient(45deg, #01016a, #7028d1, #ff48ff);
  --blueGradient: linear-gradient(45deg, #01016a, #0014ff, #009aff);
  --darkGradient: linear-gradient(45deg, #000000, #2b2a37, #2f2f59);
  --grayGradient: linear-gradient(45deg, #1e1e1e, #292838, #555768);
 
  width: 100vw;
  height: 100%;
  background: var(--mainGradient);
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  font-family: 'Fira Sans', sans-serif;
  color: var(--black);
  line-height: 1.45;
  letter-spacing: 0em;
  padding: 1em;
  transition: all .4s ease-in-out; 

  *::selection {
    color: var(--black);
    background-color: #f3ccff;
  }

  h1 {
    padding: 0.1em 0.3em 0.3em;
    background: var(--white);
    border: 0.2em solid var(--black);
    color: var(--black);
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
    color: var(--secondary);
    font-size: 1.1em;
  }

  button {
    padding: .2em .7em .4em;
    margin: 1em .2em;  
    background: var(--primary);
    color: var(--black);
    border:none; 
    border-radius: 1em; 
    font-family: 'loos-normal', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: .02em;
    box-shadow: none; 
    transition: box-shadow .4s ease-in-out;
    
    &.active {
      box-shadow: 3px 1px 0px 1px #fff;
    }
  }

  article {
    background: var(--white);
    margin: 1em 1em 1.3em;
    padding: 1em;
    position: relative;
    box-shadow: 8px 8px 0 var(--primary);
  }
  code {
    font-weight: 500;
    /* background: linear-gradient(45deg, #c59fff, #f390ff); */
    background: var(--primary);
    color: var(--black);
    padding: 0.1em 0.4em .2em;
    margin-left: .2em; 
    opacity: .8; 
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
      background: var(--primary);
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
            color: var(--primary);
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
