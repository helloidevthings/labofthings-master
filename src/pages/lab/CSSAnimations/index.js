import Styles from './styled';
import React, { useState } from 'react';
import Arrow from '../../../components/Icons/Arrow';
import Dropplet from '../../../components/Icons/Dropplet';
import Circle from '../../../components/Icons/Circle';
import Launch from '../../../components/Icons/Launch';
import ColorChangeCircle from '../../../components/Icons/ColorChangeCircle';

const CSSAnimations = () => {
  const [currentColor, updateColor] = useState('fuschia');

  return (
    <Styles currentColor={currentColor} className={currentColor}>
      <h1>CSS Animations in JavaScript {'&'} React</h1>
      <div>
        <button className='dropplet'>
          <Dropplet />
          <div className='tooltip'>
            <h5>🪄 Options to Change colors!</h5>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645648886/xhy81P_iy1rnt.gif'
              alt='gif of two fairies in an argument about whether a dress should be blue or pink.'
            />
          </div>
        </button>
        <button
          className={currentColor === 'fuschia' ? 'active' : null}
          onClick={() => {
            updateColor('fuschia');
          }}
        >
          Pink
        </button>
        <button
          className={currentColor === 'blue' ? 'active' : null}
          onClick={() => {
            updateColor('blue');
          }}
        >
          Blue
        </button>
        <button
          className={currentColor === 'dark' ? 'active' : null}
          onClick={() => {
            updateColor('dark');
          }}
        >
          Dark
        </button>
        <button
          className={currentColor === 'gray' ? 'active' : null}
          onClick={() => {
            updateColor('gray');
          }}
        >
          Gray
        </button>
      </div>
      <section className='twoCol'>
        <article>
          <h2>This is a Presentation</h2>
          <h3>(That's actually a webpage)</h3>
          <p>
            We'll cover animation libraries, animation software and using CSS to
            quickly code animations.
          </p>
          <ColorChangeCircle classes={'colorCircle'} />
        </article>
        <article>
          <h2>👋 Hello I'm Joyanna</h2>
          <h3>Design {'&'} Development</h3>
          <p>
            I have worked in design and development for over 13 years. I am
            currently working at Regal Cinemas, but I have worked at Cadre5,
            Pyxl, Robin Easter, Morris Creative {'&'} DesignSensory.
          </p>
          <Circle color={currentColor} />
          <figure className='circleCrop'>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645566998/Screen_Shot_2022-02-22_at_4.56.10_PM_oeu3be.png'
              alt='Joyanna in a hat and jean jacket'
            />
            <figcaption>
              <a
                href='https://twitter.com/joyannahirst'
                target='_blank'
                rel='noreferrer'
              >
                Follow
                <Arrow />
              </a>
            </figcaption>
          </figure>
        </article>
      </section>
      <section>
        <h2>The Problem</h2>
        <hr />
        <h3>The way we create animations</h3>
        <p>
          As designers we use a variety of programs to create interactions. Some
          of these can produce simple code, some of these do not. As developers
          we can import libraries and packages to create animations. Some of
          these are simple... some are not!
        </p>
        <p>
          The purpose of this talk is to go over some of the easy solutions
          using simple CSS to trigger accessible animations. I'll also go over
          how we can do this when using React.
        </p>
        <ul>
          <li>First we'll talk about X</li>
          <li>Then we'll talk about Y</li>
        </ul>
      </section>
      <section className='twoCol'>
        <article>
          <h2>Various Design Tools with Figma</h2>
          <h3>Figma has built in tools for Animations</h3>
          <ul>
            <li>Smart Animations using Prototypes</li>
            <li>
              <p>
                <a
                  href='https://lottiefiles.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Lottie Plugin
                </a>{' '}
                for Figma
              </p>
            </li>
            <li>
              <p>
                <a href='https://webflow.com/' target='_blank' rel='noreferrer'>
                  Webflow
                </a>
              </p>
            </li>
          </ul>
          <a
            href='https://uxdesign.cc/figma-5-ways-to-add-animation-to-your-designs-e3c521aa8902'
            target='_blank'
            rel='noreferrer'
          >
            Figma Animations <Launch />
          </a>
        </article>
        <figure>
          <img
            src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646787154/figma-animation_zrmsf6.gif'
            alt=''
          />
        </figure>
      </section>
      <section className='twoCol'>
        <article>
          <h2>Lottie</h2>
          <h3>👍 It's great for complex animations!</h3>
          <ul>
            <li>Can be exported from After Effects and other programs</li>
            <li>
              Has plugin support for our favorite programs: Figma, Framer,
              Webflow, etc
            </li>
            <li>Install NPM package to work with exported files</li>
          </ul>
          {/* <figure>
            <source
              srcSet='https://res.cloudinary.com/labofthingsimages/image/upload/v1646788830/circle-rotation-css_vgv1le.gif'
              media='(min-width: 600px)'
            ></source>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646788830/circle-rotation-css_vgv1le.gif'
              alt='circle rotates as javascript constantly changes the in-line style on an svg circle'
            />
            <figcaption>CSS does not Re-Render</figcaption>
          </figure> */}
        </article>
        <article>
          <h3>👎 Not as good for simple animations</h3>
          <ul>
            <li>Powerful in-line CSS that's updated by Javascript</li>
            <li>Can impact performance if not used sparingly</li>
          </ul>
          <figure>
            <source
              srcSet='https://res.cloudinary.com/labofthingsimages/image/upload/v1646774466/circle-rotation-lottie_edg4u1.gif'
              media='(min-width: 600px)'
            ></source>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646774466/circle-rotation-lottie_edg4u1.gif'
              alt='circle rotates as javascript constantly changes the in-line style on an svg circle'
            />
            <figcaption>Javascript re-rendering in-line CSS</figcaption>
          </figure>
        </article>
      </section>
      <section className='twoCol'>
        <div>
          <h2>Before We Dive Into the Code</h2>
          <h3>Let's talk about GOOD Animations</h3>
          <ul>
            <li>Choreography in interfaces animation</li>
            <li>Equal interaction</li>
          </ul>
          <a
            href='https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9'
            target='_blank'
            rel='noreferrer'
          >
            Ref: Animation in UX <Launch />
          </a>
        </div>
        <figure>
          <img
            src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645645406/Screen_Shot_2022-02-23_at_2.43.20_PM_khyo5a.png'
            alt='example showing a choppy animation and a smooth one that loads in sections'
          />
        </figure>
      </section>
      <section>
        <h2>✨ CSS Transitions {'&'} Animations</h2>
        <h3>What are they?</h3>
        <hr />
        <div className='twoCol'>
          <div>
            <h3>Transitions</h3>
            <ul>
              <li>Change between one state and another</li>
              <li>
                Using Ease or a Bezier Curve defines how the browser transitions
                between each state
              </li>
            </ul>
            <h3>Animations</h3>
            <ul>
              <li>Uses Keyframes</li>
              <li>Using Ease or a Bezier Curve define animation</li>
            </ul>
          </div>
          <figure>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645644394/beziercurve_aohk3q.png'
              alt='curve with handles known as the bezier curve'
            />
          </figure>
        </div>
      </section>
      <section>
        <h2>The First Thing Anyone Ever Does...</h2>
        <h3>Trying to Animate Height or Width</h3>
        <ul>
          <li>
            If you've ever tried doing this you've probably walked away annoyed
            with CSS.
          </li>
        </ul>
      </section>
      <section>
        <h2>🍿 Buttery Smooth CSS Transitions</h2>
        <hr />
        <h3>Understanding How the Browser Works: Critical Rendering Path</h3>
        <ul>
          <li>
            {`Styles > Layout > Paint > Composite`}
            <ol>
              <li>
                Styles:
                <em> calculates styles/fonts</em>
              </li>
              <li>
                Layout:
                <em> width/height; left/right/top/bottom;</em>
              </li>
              <li>
                Paint:
                <em> border-radius;box-shadow; color; background-color;</em>
              </li>
              <li>
                Composite:
                <em> transform:translate/scale/rotate; opacity;</em>
              </li>
            </ol>
          </li>
          <li>
            Creating 60fps by using properties that paint at the end of the
            process.{' '}
            <i>
              “...avoid using transitions with the left/top/right/bottom
              properties. Those don’t create a fluid animation because they have
              the browser creating layouts each time, which will affect all of
              their children.”
            </i>
          </li>
        </ul>
        <a
          href='https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108'
          target='_blank'
          rel='noreferrer'
        >
          Smooth As Butter Animations
        </a>
      </section>
      <section>
        <h2>Basic Syntax of Transitions</h2>
        <hr />
        <h3>The browser transitions from one property to another</h3>
        <ul>
          <li>
            Common Transitions <code>transition: all 3s ease-in-out;</code>
          </li>
          <li>
            Calling out a property
            <code>
              transition: color .2s ease-in, transform 8s ease-in-out;{' '}
            </code>
          </li>
          <li>
            Can be combined with hover-states and pseudo elements
            <code>
              {`a { color: blue;  
                  transform: color .2s ease-in; 
                  &:hover {color: pink}
              }`}
            </code>
          </li>
        </ul>
      </section>
      <section>
        <h2>Transition Examples</h2>
        <hr />
        <h3>Used on Buttons, Accordions {'&'} Many More!</h3>
        <button>Example of a button</button>
      </section>
      <section>
        <h2>Basic Syntax of Animations</h2>
        <hr />
        <h3>Animations use Keyframes to change properties</h3>
        <ul>
          <li>
            Using Keyframes
            <code>{`@keyframes {from {color:pink} to {color:blue}}`}</code>
          </li>
          <li>
            Keyframe %
            <code>{`0%{color: pink} 50%{color: purple} 100%{color:blue};`}</code>
          </li>
        </ul>
      </section>
      <section>
        <h2>Animation Examples</h2>
        <hr />
        <div className='twoCol'>
          <h3>This example is using SVGs with CSS classes.</h3>
          <ul>
            <li>Each class contains an animation</li>
          </ul>
          <figure className='exampleImg'>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645551608/Screen_Shot_2022-02-22_at_12.35.06_PM_a7gkih.png'
              alt=''
            />
            <figcaption>
              <a
                href='https://codepen.io/joyanna/pen/NWGYLNW'
                target='_blank'
                rel='noreferrer'
              >
                View Project <Arrow />
              </a>
            </figcaption>
          </figure>
        </div>
      </section>
      <section>
        <h2>Utilizing Javascript + CSS Transitions</h2>
        <hr />
        <h3>Toggle a Class or Data-Attribute</h3>
        <ul>
          <li>
            So now that we have classes, we can use Javascript to “toggle” a CSS
            class on an HTML element. This will make the browser transition
            between each of the properties. <code>{'.toggle(‘myClass’)'}</code>
          </li>
          <li>
            We can do this a variety of ways, a very easy one is to use
            Javascript to “listen” to see if an HTML element has been clicked.
            That will trigger our function which will then add or remove the CSS
            class from our element.
            <code>{'addEventListener(‘click’, myfunction);'}</code>
          </li>
        </ul>
      </section>
      <section>
        <h2>Example of Javascript + CSS Transitions</h2>
        <hr />
        <div className='twoCol'>
          <h3>Changing a class on a button</h3>
          <ul>
            <li>
              This example shows a light to dark color swap using a transition.
            </li>
            <li></li>
            <li>
              This is purely an example and isn't how you would normally do
              this.
            </li>
          </ul>
          <figure className='exampleImg'>
            <img
              src='https://res.cloudinary.com/labofthingsimages/image/upload/v1645560375/Screen_Shot_2022-02-22_at_3.06.02_PM_ddir9h.png'
              alt=''
            />
            <figcaption>
              Link to this:{' '}
              <a href='https://codepen.io/joyanna/pen/jOPvoeX'>Click this!</a>
            </figcaption>
          </figure>
        </div>
      </section>
      <section>
        <h2>Utilizing React + CSS Transitions</h2>
        <hr />
        <h3>The same class can be tied to State</h3>
        <ul>
          <li>
            Instead of querying the DOM for our elements we can have each of
            those elements update when there is a state change.
          </li>
        </ul>
      </section>
      <section>
        <h2>Example of React + CSS Transition</h2>
        <h3>Updating State now changes the class</h3>
      </section>
      <section>
        <h2>Using Aria Tags Instead</h2>
        <h3>Aria Tags</h3>
        <ul>
          <li>Used for accessability</li>
        </ul>
      </section>
      <section>
        <h2>Example of Aria Tag Usage</h2>
        <h3>Used on Accordion</h3>
      </section>
      <section>
        <h2>Combine all this with Plugins</h2>
        <h3>Dynamic Animation ability... </h3>
        <ul>
          <li>Loop over these elements</li>
          <li>Each style can be multiplied by the ID of the el</li>
        </ul>
      </section>
    </Styles>
  );
};

export default CSSAnimations;
