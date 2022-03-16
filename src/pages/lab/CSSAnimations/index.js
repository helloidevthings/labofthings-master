import Styles from './styled';
import React, { useState } from 'react';
import Arrow from '../../../components/Icons/Arrow';
// import Dropplet from '../../../components/Icons/Dropplet';
import Circle from '../../../components/Icons/Circle';
import Launch from '../../../components/Icons/Launch';
import ColorChangeCircle from '../../../components/Icons/ColorChangeCircle';

const CSSAnimations = () => {
	const [currentColor, updateColor] = useState('fuschia');
	const [toolTip, toggleToolTip] = useState(false);
	const handleDropplet = () => {
		toolTip === true ? toggleToolTip(false) : toggleToolTip(true);
		console.log(toolTip);
	};

	return (
		<Styles currentColor={currentColor} className={currentColor}>
			<h1>CSS Animations in JavaScript {'&'} React</h1>
			<div>
				<button
					className='dropplet'
					aria-haspopup={toolTip}
					onClick={handleDropplet}
				>
					Color ? {currentColor} : {/* <Dropplet /> */}
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
			{/* <div>
        <button className='dropplet'>Text:</button>
        <button>Small</button>
      </div> */}
			<section>
				<article>
					<h2>Welcome to the Presentation</h2>
				</article>
				<article className='twoCol'>
					<div>
						<h3>It's actually a webpage...</h3>
						<br />
						<p>
							There's a lot to cover! Feel free to use this webpage as a
							resource for all of the topics we'll be covering.
						</p>
						<hr />
						<ol>
							<li>What Animation Tools Do We Have?</li>
							<li>What are the Pros {'&'} Cons to using These?</li>
							<li>How does The Browser Render Animations?</li>
							<li>What Makes Good UX Animations?</li>
							<li>CSS Transitions {'&'}</li>
							<li>JavaScript {'&'} CSS Animations</li>
							<li>React + ARIA + CSS Transitions</li>
						</ol>
						<ColorChangeCircle classes={'colorCircle'} />
						<br />
					</div>
					<aside>
						<h3 className='typeIt'>👋 Hello I'm Joyanna</h3>
						<h5>Design {'&'} Development</h5>
						<hr />
						<p>
							I have worked in design and development for over 13 years. I am
							currently working at Regal Cinemas. I have worked at Cadre5, Pyxl,
							Robin Easter, Morris Creative {'&'} DesignSensory.
						</p>
						<br />
						<p>
							I love typography, hanging out on the couch with my cat, hot yoga
							and anything cheese.
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
									Follow <Arrow />
								</a>
							</figcaption>
						</figure>
					</aside>
				</article>
			</section>
			<section>
				<h2>Preface</h2>
				<hr />
				<h3>The way we create animations</h3>
				<p>
					Web animations have changed a lot over the years. We used to use tools
					like Flash and JQuery. With the release of CSS3 and HTML5 we moved
					forward with a different way of animating. Today, we have access to a
					variety of tools for animating. Including plugins that work with
					design programs to generate code and JavaScript libraries that use
					physics-based motion.
				</p>
				<br />
				<p>
					With so many tools at our disposal, it's important to use the right
					tool for the right problem. It can be easy to over-use animations
					which impact performance and accessibility. The purpose of this talk
					is to go over some of the simple solutions for common UI patterns that
					don't require downloading packages or using libraries.
				</p>

				<br />
				<h4>References</h4>
				<p>
					<small>
						<a
							href='https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance'
							target='_blank'
							rel='noreferrer'
						>
							CSS {'&'} JavaScript Animation Performance - MDMN Web Docs • 2022
						</a>
					</small>
				</p>

				<p>
					<small>
						<a
							href='https://css-tricks.com/myth-busting-css-animations-vs-javascript/'
							target='_blank'
							rel='noreferrer'
						>
							Myth Busting: CSS Animations vs. JavaScript • 2016
						</a>
					</small>
				</p>
			</section>
			<section>
				<h2>Why Animations Matter -- Conversion User Engagement</h2>
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
						Animation in UX <Launch />
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
				<h2>🛠 Animation Tools</h2>
				<p>
					<i>
						Here are a few tools and libraries that we use to animate web.
						(Sorry if your favorite isn't listed)
					</i>
				</p>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>Design Tools</h3>
						<ul>
							<li>
								<p>
									Figma:{' '}
									<a
										href='https://help.figma.com/hc/en-us/articles/360039818874-Create-advanced-animations-with-smart-animate'
										target='_blank'
										rel='noreferrer'
									>
										Smart Animations
									</a>
								</p>
							</li>
							<li>
								<p>
									Framer:{' '}
									<a
										href='https://www.framer.com/examples/svg-animation/'
										target='_blank'
										rel='noreferrer'
									>
										SVG Animations
									</a>
								</p>
							</li>
							<li>
								<p>
									<a
										href='https://docs.animaapp.com/'
										target='_blank'
										rel='noreferrer'
									>
										Anima
									</a>
								</p>
							</li>
							<li>
								<p>
									<a
										href='https://lottiefiles.com/'
										target='_blank'
										rel='noreferrer'
									>
										Lottie Files
									</a>
								</p>
							</li>
							<li>
								<p>
									<a
										href='https://webflow.com/'
										target='_blank'
										rel='noreferrer'
									>
										Webflow
									</a>
								</p>
							</li>
						</ul>
					</div>
					<div>
						<h3>Development Tools</h3>
						<ul>
							<li>
								<p>
									<a
										href='https://www.framer.com/motion/'
										target='_blank'
										rel='noreferrer'
									>
										Framer Motion
									</a>
								</p>
							</li>
							<li>
								<p>
									<a
										href='https://react-spring.io/'
										target='_blank'
										rel='noreferrer'
									>
										React-Spring
									</a>
								</p>
							</li>
							<li>
								<p>
									<a
										href='http://velocityjs.org/'
										target='_blank'
										rel='noreferrer'
									>
										Velocity.js
									</a>
								</p>
							</li>
							<li>
								<p>
									<a
										href='https://animejs.com/'
										target='_blank'
										rel='noreferrer'
									>
										Anime.js
									</a>
								</p>
							</li>
							<li>
								<p>
									<a
										href='https://threejs.org/'
										target='_blank'
										rel='noreferrer'
									>
										Three.js
									</a>
								</p>
							</li>
						</ul>
					</div>
				</article>
			</section>
			<section>
				<h2>Design Programs: Smart Animations</h2>
				<p>
					<i>
						Smart Animate makes it easy to quickly mock-up animations from
						screen to screen.
					</i>
				</p>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>Transition between two states/frames in a component.</h3>
						<ul>
							<li>Figma: Smart Animate</li>
							<li>Framer: Smart Components</li>
						</ul>
						<h3>Fast {'&'} Easy</h3>
						<ul>
							<li>Quick solution for protoyping and communicating an idea.</li>
							<li>
								These don't necessarily export code, but there are plugins and
								other tools.
							</li>
						</ul>
						<h3>Communication</h3>
						<ul>
							<li>
								Creates clear concept of what kind of animations you would like
								the developer to create.
							</li>
							<li>
								In some cases you can export code, but most likely will need to
								be looked at.
							</li>
						</ul>
						<h4>References</h4>
						<ol>
							<li>
								<a
									href='https://uxdesign.cc/figma-5-ways-to-add-animation-to-your-designs-e3c521aa8902'
									target='_blank'
									rel='noreferrer'
								>
									Figma Animations <Launch />
								</a>
							</li>
							<li>
								<a
									href='https://www.framer.com/blog/posts/announcing-smart-components/'
									target='_blank'
									rel='noreferrer'
								>
									Framer Animations <Launch />
								</a>
							</li>
						</ol>
					</div>
					<div>
						<figure>
							<img
								src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646795927/SmartAnimateExample_v21bga.png'
								alt=''
							/>
							<figcaption>Using Prototyping + Smart Animate</figcaption>
						</figure>
						<br />
						<figure>
							<img
								className='smallFig'
								src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646852241/figma-animation_lcrtri.gif'
								alt=''
							/>
							<figcaption>
								Figma creates the transition between screens
							</figcaption>
						</figure>
					</div>
				</article>
			</section>
			<section>
				<div>
					<h2>Lottie</h2>
					<p>
						<i>
							Helps Designers be able to create complex animations. Exports JSON
							files for developers to use.
						</i>
					</p>
					<hr />
				</div>
				<article className='twoCol'>
					<div>
						<h3>It's great for complex animations!</h3>
						<ul>
							<li>Can be exported from After Effects and other programs</li>
							<li>
								Has plugin support for our favorite programs: Figma, Framer,
								Webflow, etc
							</li>
							<li>Can Be Installed with an NPM package</li>
						</ul>
						<br />
						<h4>References</h4>
						<ol>
							<li>
								<a
									href='https://webflow.com/blog/after-effects-and-lottie-meet-webflow?utm_source=google&utm_medium=search&utm_campaign=general-paid-workhorse&utm_term=keyword-targeting&utm_content=dynamic-search-ads-t1&gclid=CjwKCAiAvaGRBhBlEiwAiY-yMOCVyCJwaW7uidHYkV0TZBbdW-ojVYB5ceOjXY03ELk0KDtaDTz5xRoCHnQQAvD_BwE'
									target='_blank'
									rel='noreferrer'
								>
									Lottie + Webflow <Launch />
								</a>
							</li>
							<li>
								{' '}
								<a
									href='https://lottiefiles.com/plugins/figma?gclid=CjwKCAiAvaGRBhBlEiwAiY-yMISTBKr3Hz69zpWFmGjeUSFPGKN33fTMwyJcBW_7AOrACd4gqp06yRoCXR8QAvD_BwE'
									target='_blank'
									rel='noreferrer'
								>
									Lottie + Figma <Launch />
								</a>
							</li>
							<li>
								{' '}
								<a
									href='https://lottiefiles.com/'
									target='_blank'
									rel='noreferrer'
								>
									Lottie Files <Launch />
								</a>
							</li>
						</ol>
					</div>
				</article>
			</section>
			<section>
				<h2>Framer + Framer-Motion</h2>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>Framer</h3>
						<ul>
							<li>Is a Deisgn Program</li>
							<li>Very flexible, you can use CSS in this program</li>
						</ul>
						<h3>Framer-Motion</h3>
						<ul>
							<li>Animation Library for JavaScript</li>
							<li>Can be installed with an NPM Package</li>
						</ul>
						<br />
						<h4>References</h4>
						<a href='https://www.framer.com/' target='_blank' rel='noreferrer'>
							Framer Design Software <Launch />
						</a>
						<br />
						<a
							href='https://www.framer.com/motion/'
							target='_blank'
							rel='noreferrer'
						>
							Framer Motion Library <Launch />
						</a>
					</div>
					<figure>
						<img
							className='smallFig'
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646867435/framer-motion-example_mj34ew.gif'
							alt=''
						/>
						<figcaption>
							<a
								href='https://codesandbox.io/s/testing-framer-motion-5snsg'
								target='_blank'
								rel='noreferrer'
							>
								View Example <Arrow />
							</a>
						</figcaption>
					</figure>
				</article>
			</section>
			<section>
				<h2>💪 Powerful Tools</h2>
				<p>
					<i>
						Especially when using Libraries {'&'} Design-to-Dev plugins, we need
						to be careful of how often we use them.
					</i>
				</p>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>Should be used sparingly!</h3>
						<ul>
							<li>Can Effect Performance</li>
							<li>Not always supported in all browsers</li>
							<li>Not always UX friendly</li>
						</ul>
						<h3>Right Tool for the Right Problem</h3>
						<p>
							<i>In many cases these are exactly what you need!</i>
						</p>
						<ul>
							<li>Physics-based Motion</li>
							<li>Interactive Graphic Elements</li>
							<li>Intro Screens / Custom Animations</li>
						</ul>
					</div>
					<div>
						<h2>Why?</h2>
						<h3>because Spiderman...</h3>
						<figure>
							<img
								className='smallFig'
								src='https://media.giphy.com/media/SF9Z0shNT07T2/giphy.gif'
								alt=''
							/>
							<figcaption>
								Actual footage of the browser loading your animations...
							</figcaption>
						</figure>
					</div>
				</article>
			</section>
			<section>
				<h2>🙅🏻‍♀️ A Bad Example</h2>
				<hr />
				<h3>Rotating Circle Example</h3>
				<p>
					This shows two SVG circles that are rotated 360. One is exported using
					a plugin, the other is using CSS. For complex animations this plugin
					is perfect! In this case, we're asking the browser to use JavaScript
					to constantly re-render a transform.
				</p>
				<br />
				<h3>The "Problem"</h3>
				<p>
					The problem here isn't that we're using javascript instead of CSS. The
					problem is that we're loading an entire library to rotate a circle. If
					all we want to do is rotate a complicated svg, we can do so without
					loading an entire animation library.
				</p>
				<br />
				<br />
				<article className='twoCol'>
					<div>
						<h3>Don't do this:</h3>
						<figure>
							<source
								srcSet='https://res.cloudinary.com/labofthingsimages/image/upload/v1646774466/circle-rotation-lottie_edg4u1.gif'
								media='(min-width: 600px)'
							></source>
							<img
								src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646774466/circle-rotation-lottie_edg4u1.gif'
								alt='circle rotates as javascript constantly changes the in-line style on an svg circle'
							/>
							{/* <figcaption>Javascript re-rendering in-line CSS</figcaption> */}
						</figure>
					</div>
					<div>
						<h3>When you can do this:</h3>
						<figure>
							<source
								srcSet='https://res.cloudinary.com/labofthingsimages/image/upload/v1646788830/circle-rotation-css_vgv1le.gif'
								media='(min-width: 600px)'
							></source>
							<img
								src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646788830/circle-rotation-css_vgv1le.gif'
								alt='circle rotates as javascript constantly changes the in-line style on an svg circle'
							/>
							{/* <figcaption>In-line CSS... That's it.</figcaption> */}
						</figure>
					</div>
				</article>
			</section>
			<section>
				<h2>A Note on Performance</h2>
				<h3>
					Google penalizes you for poor performance. Check Lighthouse for your
					performance score and suggested modifications.
				</h3>

				<p>
					<i>
						It's not really a matter of JavaScript vs CSS in some cases it's
						about the same from a performance standpoint. (for most modern
						browsers)
					</i>
				</p>
				<hr />
				<article>
					<h3>It's all in the Timing!</h3>
					<p>
						With how quickly web changes, it's important to take everything with
						a grain of salt. Each application is different.
					</p>
					<br />
					<blockquote>
						CSS transitions/animations are resampling element styles in the main
						UI thread before each repaint event happens, which is almost the
						same as resampling element styles via a
						<code>requestAnimationFrame()</code> callback, also triggered before
						the next repaint. If both animations are made in the main UI thread,
						there is no difference performance-wise.
						<br />
						<cite>
							{' '}
							MDN Web Docs, CSS {'&'} JavaScript Animation Performance • 2022
						</cite>
					</blockquote>
					<br />
					<blockquote>
						Setting a transform with a 3D characteristic (like translate3d() or
						matrix3d()) triggers the browser to create a GPU layer for that
						element. So the GPU speed boost is not just for CSS animations –
						JavaScript animation can benefit too!
						<br />
						<cite>Jack Doyle • CSS Tricks • 2017</cite>
					</blockquote>

					<br />
					<h4>References</h4>
					<a
						href='https://developer.mozilla.org/en-US/docs/Web/Performance/CSS_JavaScript_animation_performance'
						target='_blank'
						rel='noreferrer'
					>
						MDN Article <Launch />
					</a>
					<br />
					<a
						href='https://css-tricks.com/myth-busting-css-animations-vs-javascript/'
						target='_blank'
						rel='noreferrer'
					>
						CSS Tricks Article <Launch />
					</a>
				</article>
			</section>
			<section>
				<h2>✨ CSS Transitions {'&'} Animations</h2>
				<h3>What are they?</h3>
				<hr />
				<article className='twoCol'>
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
						<h4>REFERENCES</h4>
						<a
							href='https://webcode.tools/generators/css/keyframe-animation'
							target='_blank'
							rel='noreferrer'
						>
							CSS3 Generator <Launch />
						</a>
					</div>
					<figure>
						<img
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647450651/CSS-Generator_cxdws8.gif'
							alt='example showing a choppy animation and a smooth one that loads in sections'
						/>
					</figure>
				</article>
			</section>
			<section>
				<h2>Basic Syntax</h2>
				<hr />
				<div className='twoFlex'>
					<div>
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
							<br />
							<h3>Animations use Keyframes to change properties</h3>
							<li>
								Using Keyframes @keyframes
								<code>{`{from {color:pink} to {color:blue}}`}</code>
							</li>
							<li>
								Keyframe % 0%
								<code>
									{`{color: pink} 50%{color: purple} 100%{color:blue}; `}
								</code>
							</li>
							<li>
								Using Keyframes @keyframes
								<code>{`{from {color:pink} to {color:blue}}`}</code>
							</li>
							<li>
								Reference the animation on the element you want to apply it to.
								<code>animation: rotation 2s ease-in-out</code>
							</li>
						</ul>
					</div>
					<figure>
						<source
							srcSet='https://res.cloudinary.com/labofthingsimages/image/upload/v1646838938/bezierCurve_eyxamd.gif'
							media='(min-width: 600px)'
						></source>
						<img
							className='smallFig'
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1646838938/bezierCurve_eyxamd.gif'
							alt='circle rotates as javascript constantly changes the in-line style on an svg circle'
						/>
					</figure>
				</div>
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
					Smooth As Butter Animations <Launch />
				</a>
			</section>
			<section>
				<h2>🍦 Utilizing Javascript + CSS Transitions</h2>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>Classic Vanilla Javascript</h3>
						<p>
							This is the typical way of using CSS transitions with Javascript.
							With the introduction of JavaScript Frameworks. We are able to
							manage state inside our application.
						</p>
						<ol>
							<li>Query The DOM</li>
							<li>Grab all the elements</li>
							<li>Turn it into an array...</li>
							<li>Loop over it</li>
							<li>Add an Event Listener</li>
							<li>Swap out the Class</li>
						</ol>
						<p>
							<em>And VOILA! You've made changes to the DOM...</em>
						</p>
					</div>
					<div>
						<h3>Toggle a Class or Data-Attribute</h3>
						<ul>
							<li>
								So now that we have classes, we can use Javascript to “toggle” a
								CSS class on an HTML element. This will make the browser
								transition between each of the properties.{' '}
								<code>{'.toggle(‘myClass’)'}</code>
							</li>
							<li>
								We can do this a variety of ways, a very easy one is to use
								Javascript to “listen” to see if an HTML element has been
								clicked. That will trigger our function which will then add or
								remove the CSS class from our element.
								<code>{'addEventListener(‘click’, myfunction);'}</code>
							</li>
						</ul>
					</div>
				</article>
				<br />
				<figure>
					<img
						src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647371334/hot-right-now-animation_dtyk1q.gif'
						alt=''
					/>
					<figcaption>
						<a
							href='https://codepen.io/joyanna/pen/jOPvoeX'
							target='_blank'
							rel='noreferrer'
						>
							View Project <Arrow />
						</a>
					</figcaption>
				</figure>
			</section>
			<section>
				<h2>🖼 Utilizing React + CSS Transitions</h2>
				<em>
					Instead of querying the DOM for our elements, we can update elements
					when there is a state change.
				</em>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>This example is using Styled Components / Emotion</h3>
						<ul>
							<li>
								You can use the
								<code>useState</code> to toggle a menu open and closed.
							</li>
							<li>
								First set up the initial state and the function...
								<code>const [isOpen, setIsOpen] = useState(true);</code>
							</li>
							<li>
								Then pass the prop to the styles, or use them directly in the
								file.
								<br />
								<code>
									{`transform: translateX( $
                {(props) => (props.isOpen ? '-100%' : '0%')}
                );`}
								</code>
								{/* <br />
              <code>
                {`transition: transform 0.6s cubic-bezier(0.59, 0, 0.11, 0.97),`}
                <br />
                {`background-color 0.7s ease-in-out; }`}
              </code> */}
							</li>
						</ul>
					</div>
					<figure>
						<img
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647451935/cadre5-menu_soxklz.gif'
							alt=''
						/>
						<figcaption>
							You can see the pre-generated classes swap out to open the menu.
						</figcaption>
					</figure>
					<br />
				</article>
				<h3>This is fine... 🤨</h3>
				<p>
					<em>Let's make it even better!</em>
				</p>
			</section>
			<section>
				<h2>Animation Examples</h2>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>This example is using SVGs and CSS classes.</h3>
						<ul>
							<li>Each class contains an animation</li>
							<li>
								You can add those classes to different SVG elements and groups
							</li>
						</ul>
						<h3>How this Example was built</h3>
						<ol>
							<li>Create a vector in your fav design program</li>
							<li>Copy as SVG</li>
							<li>Paste into your fav SVG Optimizer (SVGOMG)</li>
							<li>
								Copy and Paste the code into a browser-based code editing
								platform. (I'm using Codepen, but there many others)
							</li>
							<li>Write some fun CSS Animations. 🤩</li>
						</ol>
						<em>
							There is a lot going on in this particular example. Tons of
							absolute positioned items and pseudo elements. The point here was
							to show a few svgs animating. ☝️ It's not necessarily the most
							performant example.
						</em>

						<p>"props.theme.animation.drawIn"</p>
						<hr />
						<h4>References</h4>
						<a
							href='https://jakearchibald.github.io/svgomg/'
							target='_blank'
							rel='noreferrer'
						>
							SVGOMG <Launch />
						</a>
						<br />
						<a
							href='https://codepen.io/your-work'
							target='_blank'
							rel='noreferrer'
						>
							Codepen <Launch />
						</a>
						<br />
						<a
							href='https://codesandbox.io/?from-app=1'
							target='_blank'
							rel='noreferrer'
						>
							CodeSandbox <Launch />
						</a>
						<br />
					</div>
					<figure>
						<img
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647351457/css_svg_animations.gif'
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
				</article>
			</section>
			<section>
				<h2>SVG Pulling in Animation from Theme</h2>
			</section>
			<section>
				<h2>🔖 Accessibility: ARIA Tags</h2>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>What are ARIA tags?</h3>
						<blockquote>
							Accessible Rich Internet Applications (ARIA) is a set of
							attributes that define ways to make web content and web
							applications (especially those developed with JavaScript) more
							accessible to people with disabilities.
							<br />
							<cite> MDN Web Docs • 2022</cite>
						</blockquote>
					</div>
					<div>
						<h3>What are some good places to use ARIA Tags? </h3>
						<ul>
							<li>Drop-downs</li>
							<li>Accordions</li>
							<li>Menus</li>
							<li>Buttons</li>
							<li>Forms</li>
						</ul>
					</div>
				</article>
				<br />
				<h4>References</h4>
				<a
					href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA'
					target='_blank'
					rel='noreferrer'
				>
					Aria Tags <Launch />
				</a>
				<br />
				<a
					href='https://reactjs.org/docs/accessibility.html'
					target='_blank'
					rel='noreferrer'
				>
					React: Accessibility <Launch />
				</a>
			</section>
			<section>
				<h2>Semantic HTML</h2>
				<hr />
				<br />
				<ul>
					<li>When to use Divs, sections, articles</li>
					<li>put your text in a p tag pls.</li>
				</ul>

				<br />
				<a
					href='https://bitsofco.de/sectioning-content-in-html5/#:~:text=So%20which%20should%20you%20use,%2C%20use%20a%20.'
					target='_blank'
					rel='noreferrer'
				>
					Semantics: Article/Section/Div <Launch />
				</a>
			</section>
			<section>
				<h2>💪 ARIA + React</h2>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>The way we do thing!</h3>
						<ul>
							<li>
								Similarily we can use <code>useState</code> to set up our state.
							</li>
							<li>
								Then we can toggle <code>aria-hidden</code> and{' '}
								<code>aria-expanded</code> with our state.
							</li>
							<li>
								Using thesea attributes makes it easy for someone using a
								screenreader.{' '}
							</li>
							<li>
								Additionally you can use <code>id</code> and{' '}
								<code>aria-labelledby</code> to closely pair the button and
								content
							</li>
							<li>
								It's not required to use <code>aria-labelledby</code>, but it
								helps to create a structure that screen readers can pick up on.
								Similar to labels and inputs.
							</li>
						</ul>
						<h4>References</h4>
						<a
							href='https://www.aditus.io/patterns/accordion/'
							target='_blank'
							rel='noreferrer'
						>
							Accessible Accordions <Launch />
						</a>
						<br />
						<a
							href='https://www.w3.org/TR/wai-aria-practices-1.2/'
							target='_blank'
							rel='noreferrer'
						>
							WAI-ARIA Authoring Practices 1.2 <Launch />
						</a>
					</div>
					<figure>
						<img
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647458003/aria-expanded_rpvk4f.gif'
							alt=''
						/>
						<figcaption>
							<a
								href='https://codesandbox.io/s/accessible-accordions-react-xdjni7?file=/src/styles.css'
								target='_blank'
								rel='noreferrer'
							>
								View Project <Arrow />
							</a>
						</figcaption>
					</figure>
				</article>
			</section>
			<section>
				<h2>ARIA + React + Styled Components</h2>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>So, now that we have our Aria Tags working...</h3>
						<ul>
							<li>Let's add Styled Components in!</li>
						</ul>
					</div>
					<figure>
						<img
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647458003/aria-expanded_rpvk4f.gif'
							alt=''
						/>
						<figcaption>
							<a
								href='https://codesandbox.io/s/accessible-accordions-with-styled-components-mm66ty?file=/src/Components/AccordionItem.js'
								target='_blank'
								rel='noreferrer'
							>
								View Project <Arrow />
							</a>
						</figcaption>
					</figure>
				</article>
			</section>
		</Styles>
	);
};

export default CSSAnimations;
