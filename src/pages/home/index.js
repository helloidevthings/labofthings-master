import { React } from 'react';
import styled from '@emotion/styled';

// import CircleOutline from '../../components/Icons/CircleOutline';
// import AbstractLines from '../../components/Icons/AbstractLines';

const MainStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100vw;
  min-height: 100%;
  /* background: linear-gradient(
    56deg,
    #01016a,
    #2615a6,
    #3f28cf,
    #5c37df,
    #9b43f7,
    #f750ff
  ); */
  /* background: linear-gradient(56deg, #000000, #272338, #1a1341); */
  background: linear-gradient(56deg, #000000, #343337);
  font-family: 'Fira Sans', sans-serif;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: 0em;
  overflow: hidden;

  *::selection {
    background: #250e8b;
    color: white;
  }

  .show {
    opacity: 1;
    transform: translateY(0px);
  }

  .hide {
    opacity: 0;
    transform: translateY(20px);
  }

  .slide {
    /* background: linear-gradient(45deg, #250e8b, #5d21bf); */
  }
  .slide-alt {
    flex-direction: row-reverse;
    /* background: linear-gradient(45deg, #5d21bf, #250e8b); */
  }

  nav {
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 1em 0.1em;
    & > * {
      margin: 0.3em;
    }

    transition: all 1s ease-in-out;
  }

  a {
    text-decoration: none;
    padding: 0 0.1em;
    position: relative;
    color: #fff;
    font-family: 'loos-normal', sans-serif;
    font-weight: 700;
    font-size: 1.25em;
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

  // All Animations
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

const Hero = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const MyName = styled.h2`
  font-size: 3.5em;
  transition: all 0.5s ease-in-out;
`;

const SiteTitle = styled.h1`
  font-size: 2em;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: all 0.8s ease-in-out;
`;

const TypeIt = styled.div`
  width: 18ch;
  animation: typing 2s steps(15), effect 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  line-height: 1.5;
  font-size: 2.3em;
  border-right: 3px solid var(--tertiary);
  transition: all 0.3s ease-in-out;

  @keyframes typing {
    from {
      /* width: 0; */
    }
  }
`;

const ImgGrid = styled.section`
  display: grid;
  width: 100%;
  max-width: 100vw;
  --auto-grid-min-size: 16rem;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--auto-grid-min-size), 1fr)
  );
  grid-gap: 1rem;
`;

const ImgCard = styled.article`
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  background: black;
  border-radius: 0.5rem;
  overflow: hidden;
  padding: 1rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  h3 {
    margin-top: 1rem;
  }
`;

const Home = () => {
  return (
    <MainStyles>
      <Hero>
        <header>
          <TypeIt>Welcome!</TypeIt>
          <MyName>Joyanna</MyName>
          <SiteTitle>Unlimited Usesr</SiteTitle>
          <nav>
            <a
              href="https://www.joyannahirst.com"
              target="blank"
              rel="noreferrer"
            >
              CTA Link 1
            </a>
            <a href="/lab">CTA Link 2</a>
          </nav>
        </header>
      </Hero>
      <section>
        <h2>What's Next?</h2>
        <ImgGrid>
          <ImgCard>
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1669719268/6a5024a75e559576d8a089feab69f9aa_original_h5wcsx.jpg"
              alt="Placeholder Cat"
            />
            <h3>This Movie Title</h3>
          </ImgCard>
          <ImgCard>
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1669719268/6a5024a75e559576d8a089feab69f9aa_original_h5wcsx.jpg"
              alt="Placeholder Cat"
            />
            <h3>This Movie Title</h3>
          </ImgCard>
          <ImgCard>
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1669719268/6a5024a75e559576d8a089feab69f9aa_original_h5wcsx.jpg"
              alt="Placeholder Cat"
            />
            <h3>This Movie Title</h3>
          </ImgCard>
        </ImgGrid>
      </section>
    </MainStyles>
  );
};
export default Home;
