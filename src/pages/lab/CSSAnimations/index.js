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
	// const progress = window.innerHeight;

	return (
		<Styles currentColor={currentColor} className={currentColor}>
			{/* <div className='progressBar' style={{ width: `${progress}` }}></div> */}
			<h1>CSS Animations in JavaScript {'&'} React</h1>
			<div>
				<button
					className='dropplet'
					aria-haspopup={toolTip}
					onClick={handleDropplet}
				>
					💄 Color : {/* <Dropplet /> */}
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
				<article>{/* <h2>Welcome to the Presentation</h2> */}</article>
				<article className='twoCol'>
					<div>
						<h2 className='typeIt'>It's actually a webpage...</h2>
						<h3>
							<code>joyanna.dev/css-animations</code>
						</h3>
						<br />
						<p>
							There's a lot to cover! Feel free to use this webpage as a
							resource for all of the topics we'll be covering.
						</p>
						<hr />
						<ol>
							<li>Why do Animations Matter?</li>
							<li>What Animation Tools Do We Have?</li>
							<li>What are the Pros {'&'} Cons to using These Tools?</li>
							<li>How do Animations affect Performance {'&'} SEO</li>
							<li>How does The Browser Render Animations?</li>
							<li>Improving Accessibility</li>
							<li>Quick Tip: Themed Animations</li>
						</ol>
						<ColorChangeCircle classes={'colorCircle'} />
						<br />
					</div>
					<aside>
						<h3>👋 Hello I'm Joyanna</h3>
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
				<h2>✨ Why Animations Matter</h2>
				<em>Animation Drives User Engagement and Conversion</em>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>It grabs the User's Attention</h3>
						<ul>
							<li>"The human visual system is sensitive to motion..."</li>
							<li>Which can be a good thing... or a bad thing</li>
							<li>
								Subtle animations provide user feedback. It shows the user your
								app is actually "doing" something.{' '}
							</li>
							<li>
								Either way! If you're using animations, studies show that your
								users are paying attention. Unless... you're using too much, and
								then they are annoyed.
							</li>
						</ul>
						<br />
						<h4>References</h4>
						<a
							href='https://www.nngroup.com/articles/animation-purpose-ux/'
							target='_blank'
							rel='noreferrer'
						>
							The Role of Animation... <Launch />
						</a>
					</div>
					<blockquote>
						In UX, motion and animation can be helpful and communicative, if
						used with restraint. Motion is most often appropriate as a form of
						subtle feedback for microinteractions, rather than to induce delight
						or entertain users.
						<br />
						<cite>Page Laubheimer, Nielson Norman Group • 2020</cite>
					</blockquote>
				</article>
			</section>
			<section>
				<h2>🐌 Let's talk about GOOD Animation Practices</h2>
				<hr />
				<article className='twoCol'>
					<div>
						<ul>
							<li>Our brains are in-tune with the subtlety of animations.</li>
							<li>UI elements should enhance an app.</li>
							<li>
								Animations shouldn't get in the way of the functionality of the
								UI elements
							</li>
							<li>Animations are different from Mobile to Web</li>
							<li>
								The goal is to animate in a way that makes sense to our brains,
								by mimicing what we see in the real world.{' '}
							</li>
							<li>Material Design has guidelines</li>
							<li>No "Content Shifts", Negative for Usability</li>
							<li>Use a Lazy Loader instead</li>
						</ul>
						<br />
						<h4>References</h4>
						<a
							href='https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9'
							target='_blank'
							rel='noreferrer'
						>
							The Ultimate Guide... <Launch />
						</a>
						<br />
						<a
							href='https://material.io/design/motion/speed.html'
							target='_blank'
							rel='noreferrer'
						>
							Material Design: Motion <Launch />
						</a>
					</div>
					<blockquote>
						So, if we sum up all of the above-mentioned rules and principles,
						the animation in the interface should reflect the movements that we
						know from the physical world — friction, acceleration, etc.
						Imitating the behavior of objects from the real world we can create
						a sequence that allows users to understand what to expect from the
						interface.
						<br />
						<cite>Taras Skytskyi • UX Collective • 2018</cite>
					</blockquote>
				</article>
			</section>
			<hr className='dotted' />
			<section className='twoCol'>
				<div>
					<h2>Back In MY Day...</h2>
					<h3>We used JQuery And we LIKED it.</h3>
					<hr />
					<h3>The way we create USED to create animations</h3>
					<ul>
						<li>Flash?</li>
						<li>JQuery?</li>
						<li>Dreamweaver? (you know to swap a photo on hover)</li>
					</ul>
					<br />
					<h3>With the Release of CSS3 {'&'} HTML5 web changed a lot...</h3>
					<ul>
						<li>CSS3: 60FPS {'&'} GPU Rendering</li>
						<li>JavaScript Animation Libraries</li>
					</ul>
				</div>
				<figure>
					<img
						className='smallFig'
						src='https://media.giphy.com/media/xUNda2iBiYqk4mKDRu/giphy.gif'
						alt='grandpa saying back in my day'
					/>
				</figure>
			</section>
			<hr className='dotted' />
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
							<li>Quick solution for prototyping and communicating an idea.</li>
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
								alt='Figma Smart Animate Tool'
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
							<li>Is a Design Program</li>
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
							alt='Framer Motion example of animations'
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
							<li>Can Effect Performance {'&'} SEO</li>
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
								alt='Holding back a train'
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
				<h2>📝 A Note on Performance</h2>
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
					<ul>
						<li>
							With how quickly web changes, it's important to take everything
							with a grain of salt.
						</li>
						<li>Each application is different.</li>
					</ul>
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
				<h2>🍿 Buttery Smooth CSS Transitions</h2>
				<hr />
				<h3>Understanding How the Browser Works: Critical Rendering Path</h3>
				<article className='twoCol'>
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
							Creating 60FPS by using properties that paint at the end of the
							process.{' '}
						</li>
					</ul>
					<blockquote>
						“...avoid using transitions with the left/top/right/bottom
						properties. Those don’t create a fluid animation because they have
						the browser creating layouts each time, which will affect all of
						their children.”
					</blockquote>
				</article>
				<br />
				<hr />
				<h4>References</h4>
				<a
					href='https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108'
					target='_blank'
					rel='noreferrer'
				>
					Smooth As Butter Animations <Launch />
				</a>
			</section>
			<hr className='dotted' />

			<section className='twoCol'>
				<div>
					<h2>Oooooooo!</h2>
					<h3>This is what we want.</h3>
					<p>Smooth animations that load quickly.</p>
					<br />
				</div>
				<figure>
					<img
						className='smallFig'
						src='https://c.tenor.com/CeS8QsJa_u4AAAAC/oh-toy-story.gif'
						alt='aliens saying oooo ahhh'
					/>
					<figcaption>Users on your application...</figcaption>
				</figure>
			</section>
			<hr className='dotted' />

			<section>
				<h2>💯 Google, SEO {'&'} Lighthouse</h2>
				<em>
					We want all these to be good... Therefore we need to pay attention to
					our performance.
				</em>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>Bad UX affects Rankings</h3>
						<em>
							Many factors can play into a site's SEO, it's good to stay
							up-to-date on what is being calculated.{' '}
						</em>
						<ul>
							<li>Google penalizes you for poor performance.</li>
							<li>Users on Mobile Devices with a slow network.</li>
							<li>First Contentful Paint</li>
							<li>HTML Structure {'&'} Quality</li>
							<li>
								Check Lighthouse for your performance score and suggested
								modifications.
							</li>
							<li>☝️ Use Semantic HTML</li>
						</ul>
						<br />
						<h4>References</h4>
						<a
							href='https://developers.google.com/web/tools/lighthouse'
							target='_blank'
							rel='noreferrer'
						>
							Lighthouse <Launch />
						</a>
						<br />
						<a
							href='https://support.google.com/webmasters/thread/104436075/core-web-vitals-page-experience-faqs-updated-march-2021'
							target='_blank'
							rel='noreferrer'
						>
							Core Web Vitals... <Launch />
						</a>
					</div>
					<blockquote>
						Lighthouse is an open-source, automated tool for improving the
						quality of web pages. You can run it against any web page, public or
						requiring authentication. It has audits for performance,
						accessibility, progressive web apps, SEO and more.
						<br />
						<cite>Tools for Web Developers • 2021</cite>
					</blockquote>
				</article>
			</section>
			<section>
				<h2>🤦🏻‍♀️ Wait... What's Semantic HTML?</h2>
				<em>
					Semantic HTML relates the structure of the content to the browser.
				</em>
				<hr />
				<article className='twoCol'>
					<div>
						<h3>Visual Hierarchy is well... Visual 👀</h3>
						<ul>
							<li>
								Limited time for crawlers to gain benneficial content from your
								site
							</li>
							<li>Text should be in a tag that relates that it is text.</li>
							<li>Negative Scoring will Impact SEO</li>
							<li>
								You can use plugins to test your accessibility. Axe Dev Tools is
								a good one.
							</li>
							<li>You can test your semantic validation. (see link below)</li>
						</ul>
						<br />
						<h4>References</h4>
						<a
							href='https://developer.mozilla.org/en-US/docs/Glossary/Semantics'
							target='_blank'
							rel='noreferrer'
						>
							MDN Docs: Semantics <Launch />
						</a>
						<br />
						<a
							href='https://validator.w3.org/'
							target='_blank'
							rel='noreferrer'
						>
							Markup Validation Service <Launch />
						</a>
						<br />
						<a
							href='https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US&utm_term=axe%20plugin&utm_campaign=Search%20-%20axe%20DevTools%20-%20Branded&utm_source=adwords&utm_medium=ppc&hsa_src=g&hsa_ad=567862381916&hsa_tgt=aud-604281216905:kwd-1186988429728&hsa_mt=p&hsa_ver=3&hsa_acc=7854167720&hsa_kw=axe%20plugin&hsa_grp=122011560847&hsa_cam=12428499999&hsa_net=adwords&gclid=Cj0KCQjwuMuRBhCJARIsAHXdnqOhpoZCD0-7tHYrvYIM2wqyCoEux1TBbyEAm99U3AQXyYSEoDNnS4AaAskXEALw_wcB'
							target='_blank'
							rel='noreferrer'
						>
							Axe DevTools <Launch />
						</a>
						<hr />
					</div>
					<div>
						<h3>Example:</h3>
						<br />
						<code>{'<div class="wrapper">'}</code>
						<br />
						<code>{'<div>Important Headline</div>'}</code>
						<br />
						<code>{'<div>Paragraph that explains our headline.</div>'}</code>
						<br />
						<code>{'</div>'}</code> 👎
						<hr />
						<code>{'<section>'}</code>
						<br />
						<code>{'<h2>Important Headline</h2>'}</code>
						<br />
						<code>{'<p>Paragraph that explains our headline.</p>'}</code>
						<br />
						<code>{'</section>'}</code> 👍
					</div>
				</article>
			</section>
			<hr className='dotted' />
			<section className='twoCol'>
				<h2 className='center'>Wait... NO DIVs?</h2>
				<figure>
					<img
						className='smalFig'
						src='https://media.giphy.com/media/zrmTqopWm4W5cPg8Ah/giphy.gif'
						alt='man saying wait what?'
					/>
				</figure>
			</section>
			<hr className='dotted' />
			<section>
				<h2>What! No DIVs?</h2>
				<em>
					you can still use divs, but there are a few things to keep in mind.
				</em>
				<hr />

				<article className='twoCol'>
					<div>
						<h3>When to use which thing? </h3>
						<ul>
							<li>
								Is the content semantically related? or is the content self
								contained.
							</li>
							<li>When in doubt, decide if it's a content or a wrapper.</li>
						</ul>
						<br />
						<h3>☝️ Take Aways</h3>
						<ul>
							<li>Use a tag that fits the content</li>
							<li>Stop using so many DIVS!</li>
						</ul>
						<br />
						<hr />
						<h4>References</h4>
						<a
							href='https://dev.to/kenbellows/stop-using-so-many-divs-an-intro-to-semantic-html-3i9i'
							target='_blank'
							rel='noreferrer'
						>
							Stop Using so MANY DIVs! <Launch />
						</a>
						<br />
						<a
							href='https://bitsofco.de/sectioning-content-in-html5/#:~:text=So%20which%20should%20you%20use,%2C%20use%20a%20.'
							target='_blank'
							rel='noreferrer'
						>
							Semantics: Article/Section/Div <Launch />
						</a>
					</div>
					<blockquote>
						When approaching which markup to use, ask yourself, "What element(s)
						best describe/represent the data that I'm going to populate?" For
						example, is it a list of data?; ordered, unordered?; is it an
						article with sections and an aside of related information?; does it
						list out definitions?; is it a figure or image that needs a
						caption?; should it have a header and a footer in addition to the
						global site-wide header and footer?; etc.
						<br />
						<cite>MDN Web Docs • 2021</cite>
					</blockquote>
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
									transition: color .2s ease-in, transform .6s ease-in-out;{' '}
								</code>
							</li>
							<li>
								Can be combined with hover-states and pseudo elements
								{/* <code>
									{`a { color: blue;  
                  transform: color .2s ease-in; 
                  &:hover {color: pink}
              }`}
								</code> */}
							</li>
						</ul>
						<br />
						<h3>Animations use Keyframes to change properties</h3>
						<ul>
							<li>
								Using Keyframes @keyframes
								<code>{`{from {color:pink} to {color:blue}}`}</code>
							</li>
							<li>
								Keyframe %
								<code>
									{`0%{color: pink} 50%{color: purple} 100%{color:blue}; `}
								</code>
							</li>
							<li>
								Using Keyframes
								<code>{`@keyframes { from {color: pink} to {color: blue} }`}</code>
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
			<hr className='dotted' />
			<section className='twoCol'>
				<div>
					<h2>So that's cool and all... now what?</h2>
					<hr />
					<h3>Let's look at Practical Applications</h3>
					<br />
					<h4>Examples</h4>
					<ul>
						<li>Vanilla Javascript: Toggle a Class!</li>
						<li>React + Styled Components: Toggle State!</li>
						<li>React + Accessibility: Update ARIA Tag!</li>
					</ul>
					<br />
					<hr />
					<h3>All of these based on CSS Transitions</h3>
				</div>
				<figure>
					<img
						className='smallFig'
						src='https://media.giphy.com/media/SVH9y2LQUVVCRcqD7o/giphy.gif'
						alt='kid with thumbs up saying very cool'
					/>
				</figure>
			</section>
			<hr className='dotted' />
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
						<br />
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
						alt='button toggles light and dark'
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
								<br />
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
							</li>
						</ul>
					</div>
					<figure>
						<img
							src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647451935/cadre5-menu_soxklz.gif'
							alt='menu opens when clicked and classes change out'
						/>
						<figcaption>
							You can see the pre-generated classes swap out to open the menu.
						</figcaption>
					</figure>
				</article>
			</section>
			<hr className='dotted' />
			<section className='twoCol'>
				<div>
					<h2>This is fine... 🤨</h2>
					<p>
						<em>Let's make it even better!</em>
					</p>
					<ul>
						<li>What if I told you we can make this better? </li>
						<li>...And more Accessible!</li>
					</ul>
				</div>
				<figure>
					<img
						className='smallFig'
						src='https://media.giphy.com/media/yZSrHChwJFmZq/giphy.gif'
						alt='man saying better'
					/>
				</figure>
			</section>
			<hr className='dotted' />
			<section>
				<h2>🏷 Accessibility: ARIA Tags</h2>
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
							<li>Buttons</li>
							<li>Forms</li>
							<li>Tool-Tips</li>
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
								Using these attributes makes it easy for someone using a screen
								reader.{' '}
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
							alt='example of an accordion opening and closing'
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
			<hr className='dotted' />
			<section className='twoCol'>
				<div>
					<h2>It's a lot!</h2>
					<h3>It's super useful for users.</h3>
					<p>
						It impacts Lighthouse scoring and the ability to easily navigate a
						page with a screen reader.{' '}
					</p>
					<hr />
					<h3>One Last Example! Using CSS Animations</h3>
					<ul>
						<li>Animations + SVGs</li>
					</ul>
				</div>
				<figure>
					<img
						className='smallFig'
						src='https://media.giphy.com/media/yS2AMt4LX13Mc/giphy.gif'
						alt='dog blinking with mouth open'
					/>
				</figure>
			</section>
			<hr className='dotted' />
			<section>
				<h2>SVG Animation Examples</h2>
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
								platform.
							</li>
							<li>Write some fun CSS Animations. 🤩</li>
						</ol>
						<em>
							There is a lot going on in this particular example. Tons of
							absolute positioned items and pseudo elements. The point here was
							to show a few svgs animating. ☝️ It's not necessarily the most
							performant example.
						</em>
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
							alt='animations with SVGs example'
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
				<h2>Themed Animations</h2>
				<em>
					One way to utlized Styled Components and Animated SVGs is to save your
					animations to your theme file.
				</em>
				<hr />
				<article>
					<h3>Importing Themed Animations</h3>
					<ul>
						<li>You can import small utility animations into your SVGS</li>
						<li>
							By doing this you don't have to load all of your animations in
							your global style sheet.
						</li>
						<li>
							That way you only load animations when they are present on the
							page.
						</li>
					</ul>
					<div className='twoCol'>
						<figure>
							<img
								className='smallFig'
								src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647916251/utility-animatons_m4r7wk.png'
								alt='theme file with animations in it'
							/>
							<figcaption>Amimation Classes in Theme</figcaption>
						</figure>
						<figure>
							<img
								src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647531690/theme-to-svg_rmogge.png'
								alt='importing from the theme to the SVG component'
							/>
							<figcaption>
								Example of bringing animation classes into the svg
							</figcaption>
						</figure>
						<figure>
							<img
								className='smallFig'
								src='https://res.cloudinary.com/labofthingsimages/image/upload/v1647526322/circle-animation_ecmsde.gif'
								alt='SVG moves up and down'
							/>
							<figcaption>Animation Result...</figcaption>
						</figure>
					</div>
				</article>
			</section>
			<section>
				<h2>Conclusion: The Manifesto!</h2>
				<hr />
				<article>
					<h3>Let's make GOOD Animations</h3>
					<ul>
						<li>Keeping in mind that PERFORMANCE changes our SEO scores!</li>
						<li>Using ARIA tags to make a better user experience</li>
						<li>
							If we use libraries or plugins, let's make sure it's justified.
						</li>
						<li>
							Animations add to our UX, let's be mindful of how we use them.
						</li>
					</ul>
				</article>
				<br />
				<hr />
				<h2>THANK YOUUUUUU! 🙏</h2>
			</section>
			<section>
				<hr />
				<h2>Questions?</h2>
			</section>
			{/* <section>
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
			</section> */}
		</Styles>
	);
};

export default CSSAnimations;
