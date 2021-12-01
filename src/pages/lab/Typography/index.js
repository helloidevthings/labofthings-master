import Styles from './styled';
import React from 'react';

const Typography = () => {
  return (
    <Styles>
      <div className="columns">
        <article className="fluid">
          <h1>Fluid Type</h1>
          <h2>I Scale Based on Window</h2>
          <p>
            The difference between Fluid Typography and Responsive Typography
            can be seen in this example.
          </p>
          <p>
            Fluid typography is my preferred way of sizing type.You can base
            everything off of the paragraph size. Including the "letter-spacing"
            or "kerning/tracking". The space will scale with the letters rather
            than staying the same size.
          </p>
          <p>
            There are a lot of different ways to create Fluid Type. Reference
            this{' '}
            <a
              href="https://css-tricks.com/snippets/css/fluid-typography/"
              target="blank"
            >
              CSS Tricks artcle
            </a>{' '}
            for variations. The current way I am doing this now is using
            scale(). Scale is supported in older browsers and is fairly easy to
            understand.
          </p>
          <p>
            First, is that you set a minimum font-size and a maximum font-size.
            You only need to set this for the body copy or paragraph. Something
            like 14px or 16px for mobile works well and 20 or 21 for larger
            screens. (really large screens, not a laptop)
          </p>
          <p>
            Be sure to keep in mind that not every font is the same. Some fonts
            can look larger or smaller than others even though they are the same
            size. Because{' '}
            <a
              href="https://www.fonts.com/content/learning/fontology/level-1/type-anatomy/x-height"
              target="blank"
            >
              X-Height!
            </a>
          </p>
          <p>
            Ok! So now that we have our font-sizes figured out. The next thing
            we do is decide what screen sizes we want the largest and smallest
            sizes to apply. I went with 320px and 2100px–-2100px is not really a
            breakpoint it's just really large and works well.
          </p>
          <h3>Lastly, we add those numbers into an equation: </h3>
          <h5>16px + (21 - 16) * ((100vw - 320px) / (2100 - 320))</h5>
          <p>
            You can see the numbers we have set. I think the best way to think
            about it is 16/320 and 21/2100.
          </p>
          <p>
            The rest of it is just getting to the difference between these and
            creating a scale or proportion.
          </p>
          <h3>Anyway! The code looks like this:</h3>
          <h5>
            font-size: calc(16px + (21 - 16) * ((100vw - 320px) / (2100 - 320)))
          </h5>
          <p>
            And Voila! That's it. In addition to sizing type, you can size
            elements. Everything can scale proportionate to itself. It's super
            powerful.
          </p>
          <p>
            I have found issues when using it for vertical padding between
            elements. Sometimes elements don't fit on the pixel grid because
            they are between sizes and it creates a warp.
          </p>
          <p>
            Using fluid type can be taxing on the browser if you use too much of
            it, but it does take a LOT. It's good to keep in mind the way the
            browser's{' '}
            <a href="https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108">
              "Critical Rendering Path"
            </a>
            .
          </p>
        </article>
        <article className="responsive">
          <h1>Responsive Type</h1>
          <h2>I scale based on breakpoints</h2>
          <p>
            It's a subtle difference, but if you look closely you'll be able to
            see this paragraph change sizes at each breakpoint.
          </p>
          <p>
            This paragraph is utilizing 3 breakpoints. At 720px the font-size
            increases to 18px, at 1440px to 20px and at 2100px to 21px. The only
            font-size that is actually changing is the paragraph size. The
            headers scale based on the paragraph. (by using ems in this example)
          </p>
          <p>
            By basing the font-size of headers off of the paragraph everything
            scales with the same hierarchy. Hierarchy is very important for
            navigating information.
          </p>
          <p>
            You can see the letterforms increase in size as the browser window
            grows and shrinks. You may also notice that sometimes the font-size
            is a little too large or small for the window.
          </p>
          <p>
            So let's talk about{' '}
            <a href="https://webdesign.tutsplus.com/tutorials/comprehensive-guide-when-to-use-em-vs-rem--cms-23984">
              rems and ems.
            </a>{' '}
            They can be confusing for sure. By themselves they don't scale. Rem
            refers to the "root" element. The highest parent element in the{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">
              DOM.
            </a>{' '}
            Browsers by default use 16px. So you're just referencing that when
            you're using a rem. The real magic doesn't start until you reset the
            base font-size and add breakpoints.
          </p>
          <p>
            Ems are little bit more confusing, partially because they are not
            used very often and also because they can be various sizes. Ems
            refer to the parent element for their font-size.
          </p>
          <p>
            That's how I'm able to use two different types of scaling type
            inside of this example. I'm wrapping a class around each and using
            ems to have each child refer to the parent.
          </p>
        </article>
      </div>
      <footer>
        <h3>History Lesson</h3>
        <p>
          Wayyyy Back when Typography was young... We sized typography for
          legibility and readability. We spent time setting type in various
          metals...
        </p>
        <p>
          It makes me sad to see the way we size typography on the web. It's
          some of the worst typography I have ever seen... I mean aside from
          some really awful menu designs.
        </p>
        <p>
          There are still some great type designers and developers out there...
          Here are some examples!
        </p>
      </footer>
    </Styles>
  );
};

export default Typography;
