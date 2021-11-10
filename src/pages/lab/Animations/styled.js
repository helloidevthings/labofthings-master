import styled from '@emotion/styled';

export default styled.main`

  width: 100%;
  height: 100vh;
  background-color: #ef4723;
  line-height: 1.45;
  font-size: calc(14px + (22 - 14) * ((100vw - 300px) / (2100 - 300)));
  font-family: "Gentium Book Basic", serif;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;

  // These two elements share a space, but also use flexbox to prioritize.

.article {
  flex: 3 0 auto;
  margin: 3em;
  // max-width: 900px;
  position: relative;

  &__wrapper-text {
    max-width: 26em;
  }
}

.sidebar {
  flex: 1 5 auto;
  text-align: left;
  padding: 3em;
  background-image: linear-gradient(black, #151414);
  position: relative;
  z-index: 1;

  &__wrapper-text {
    max-width: 22em;
  }

  &:before {
    content: "";
    position: absolute;
    background-image: linear-gradient(to left, #151414, black);
    height: 13em;
    width: 13em;
    border-radius: 13em;
    top: 0;
    right: 2em;
    z-index: -1;
  }

  &__text {
    &--light {
      color: pink;
    }
  }
}

// Typography

h1 {
  font-family: "Noto Serif JP", serif;
  font-size: 3.45em;
  line-height: 1.15;
  margin-bottom: 0.4em;
}

h2 {
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-size: 1.24em;
  letter-spacing: 0.04em;
  font-weight: 800;
  line-height: 1.8;
}

h3 {
  font-family: "Noto Serif JP", serif;
  color: pink;
  font-size: 2em;
  font-weight: 800;
  margin-bottom: 0.6em;
  z-index: 1;
}

.subtitle {
  border-top: 2px black solid;
  border-bottom: 2px black solid;
  margin: 0.8em 0;
}

ul {
  li {
    list-style: none;
    margin-bottom: 0.8em;

    a {
      color: #ef4723;
      text-decoration: none;
      padding-top: 0.2em;
      padding-bottom: 0.2em;
      font-family: "Open Sans", sans-serif;
      text-transform: uppercase;
      font-size: 0.8em;
      letter-spacing: 0.24em;
      font-weight: 800;
      position: relative;
      transition: color .3s ease-in; 


      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #ef4723;
        transform: scaleX(0);
        transition: transform .8s cubic-bezier(0.6,-0.01, 0.11, 0.99);
      }

      &:before {
        top: 0;
        left: 0;
        transform-origin: top left;
      }

      &:after {
        bottom: 0;
        right: 0; 
        transform-origin: bottom right;
      }

      &:hover {
        color: pink;

        &:before,
        &:after {
          transform: scaleX(1);
        }
      }
    }
  }
}

// SVG Code

.badge {
  position: absolute;
  bottom: 2em;
  right: 2em;
  width: 10em;
  fill: #ef4723;
  z-index: -1;
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
