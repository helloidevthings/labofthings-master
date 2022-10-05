import { React } from 'react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

import CircleOutline from '../../components/Icons/CircleOutline';
import AbstractLines from '../../components/Icons/AbstractLines';

const MainStyles = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100vw;
  min-height: 100%;
  background: linear-gradient(
    56deg,
    #01016a,
    #2615a6,
    #3f28cf,
    #5c37df,
    #9b43f7,
    #f750ff,
    #fe8dfe
  );
  background: linear-gradient(
    56deg,
    #01016a,
    #2615a6,
    #3f28cf,
    #5c37df,
    #9b43f7,
    #f750ff
  );
  font-family: 'Fira Sans', sans-serif;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: 0em;
  overflow: hidden;

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

const HeroImg = styled.div`
  flex: 1 1 auto;
  position: relative;
  z-index: 1;
  margin: 2rem auto;
  transition: all 0.5s cubic-bezier(0.76, 0.27, 0.68, 1.43);

  .image1 {
    max-width: 300px;
  }
  .image2 {
    max-width: 150px;
    position: absolute;
    top: -4rem;
    right: -1rem;
    ${(props) => props.theme.animations.itemTo}
    ${(props) => props.theme.animations.bounce3}
  }

  &:after {
    content: '';
    background: linear-gradient(45deg, #280de373, #e871ff66);
    height: 300px;
    width: 300px;
    border-radius: 100%;
    position: absolute;
    left: 10%;
    top: 10%;
    transform: rotate(0deg);
    z-index: -1;
    animation: rotation 12s alternate infinite;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
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

const QuoteSection = styled.section`
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 1rem 3rem;
  color: #cbadfa;
  text-align: center;
  background: linear-gradient(45deg, #070082, #482dd4);

  blockquote {
    transition: all 1s ease-in-out;
    max-width: 40em;
  }

  &:after {
    content: '';
    background: #614add;
    height: 3px;
    width: 200px;
    animation: grow-shrink 5s infinite alternate;

    @keyframes grow-shrink {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }
  }
`;

const Slide = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100vw;
  padding: 2rem 1rem;
  transition: all 0.5s ease-in-out;
  z-index: 1;
  & > * {
    flex: 1 1 auto;
  }
`;

const SlideImg = styled.div`
  max-width: 300px;
  position: relative;
  z-index: 1;

  .image1 {
    max-width: 250px;
  }
  .image2 {
    position: absolute;
    max-width: 150px;
    left: -2em;
    top: -5em;
    ${(props) => props.theme.animations.itemTo}
    ${(props) => props.theme.animations.bounce3}
  }

  svg {
    width: 100%;
    max-width: 100vw;
    left: -4em;
    top: 0;
    z-index: -1;
  }
`;

const SlideText = styled.div`
  max-width: 40rem;
  line-height: 1.4;
  z-index: 10;
  transition: all 0.8s ease-in-out;

  h3 {
    font-size: 2.5em;
    color: #ab9bff;
    line-height: 1.5;
  }

  ul {
    margin-block-start: 0;
    margin-inline-start: 0;
    padding-inline-start: 1.3em;

    li {
      position: relative;
      font-size: 1.25em;
      list-style: none;
      margin-bottom: 0.8em;

      &:before {
        content: '•';
        color: var(--fuschia);
        position: absolute;
        left: -0.7em;
      }
    }
  }

  strong {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9em;
    letter-spacing: 0.09em;
    font-family: 'loos-wide', sans-serif;
    color: #ab9bff;
  }
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

const Home = () => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <MainStyles>
      <Hero>
        <header>
          <TypeIt ref={ref} className={entry ? 'show' : 'hide'}>
            Welcome!
          </TypeIt>
          <MyName ref={ref} className={entry ? 'show' : 'hide'}>
            Joyanna
          </MyName>
          <SiteTitle ref={ref} className={entry ? 'show' : 'hide'}>
            UX UI Design
          </SiteTitle>
          <nav ref={ref} className={entry ? 'show' : 'hide'}>
            <a
              href="https://www.joyannahirst.com"
              target="blank"
              rel="noreferrer"
            >
              Portfolio
            </a>
            <a href="/lab">Dev Lab</a>
            {/* <a
              href="https://docs.google.com/document/d/10CsHlp-yCXwk11CaAkOvtcKkqlhtP07MlPs5xXnNhfg/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a> */}
            {/* <a href='/css-animations'>CSS Animations</a> */}
          </nav>
        </header>
        <HeroImg className={entry ? 'show' : 'hide'}>
          <figure className="image2">
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1658948384/triangle_raztfw.png"
              alt="floating 3d triangle"
            />
          </figure>
          <figure className="image1">
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1658948938/phone3d4_rsqylc.png"
              alt="floating 3d phone"
            />
          </figure>
        </HeroImg>
      </Hero>
      <QuoteSection>
        <blockquote ref={ref} className={inView ? 'show' : 'hide'}>
          I create designs and CSS animations. The Dev Lab is a testing ground
          for animations and other projects.
        </blockquote>
      </QuoteSection>
      <Slide className="slide">
        <SlideImg>
          <figure className="image1">
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1659454578/triangle_square_ffb8wt.png"
              alt="floating 3d objects"
            />
          </figure>
          <figure className="image2">
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1659454594/circle_cywwfb.png"
              alt="floating 3d objects"
            />
          </figure>
          <CircleOutline
            strokeColor={'#614add'}
            className="image2"
            style={{ position: 'absolute' }}
          />
        </SlideImg>
        <SlideText>
          <h3>Design</h3>
          <p>
            <strong>Work Experience</strong> Robin Easter, Pyxl, Cadre5 {'&'}{' '}
            Regal Cinemas. Internships at Morris Creative {'&'} Designsensory
          </p>
          <br />
          <ul>
            <li>
              Creating User Flows, Conducting User Interviews, Usability Testing
              and User Research
            </li>
            <li>Setting Style guides and working with Design Systems</li>
            <li>Communicating with stakeholders and developers</li>
            <li>Training mid and junior designers on best practices</li>
            <li>Fine-tuning animations and interactions</li>
            <li>Branding, Photoshoots {'&'} Illustration</li>
            <li>
              Familiar with the Adobe Creative Suite: Photoshop, Illustrator,
              InDesign, and After Effects
            </li>
          </ul>
        </SlideText>
      </Slide>
      <Slide className="slide-alt">
        <SlideImg>
          <figure className="image2">
            <img
              src="https://res.cloudinary.com/labofthingsimages/image/upload/v1659556383/circle-purple_zai3h9.png"
              alt="floating 3d circle"
            />
          </figure>
          <AbstractLines strokeColor={'#614add'} />
        </SlideImg>
        <SlideText>
          <h3>Development</h3>
          <p>
            <strong>Work Experience </strong>Pyxl, Cadre5 {'&'} Regal Cinemas
          </p>
          <br />
          <ul>
            <li>React, Styled Components</li>
            <li>CSS/SCSS, Transitions {'&'} Animations</li>
            <li>Forms {'&'} ADA Compliance</li>
            <li>Experience using SCRUM</li>
            <li>Experience using Git</li>
            <li>
              CMS Experience: including an in-depth knowledge of Wordpress using
              Advanced Custom Fields.
            </li>
          </ul>
        </SlideText>
      </Slide>
      <QuoteSection>
        <blockquote>Over 10yrs Industry Experience</blockquote>
      </QuoteSection>
    </MainStyles>
  );
};
export default Home;
