import Styles from './styled';
import React from 'react';
import WorkHard from '../../../components/Icons/WorkHard';

const Animation = () => {
  const links = [
    {
      title: 'Smooth As Butter',
      src: 'https://medium.com/outsystems-experts/how-to-achieve-60-fps-animations-with-css3-db7b98610108',
    },
    {
      title: 'Good Animation Speed',
      src: 'https://uxdesign.cc/the-ultimate-guide-to-proper-use-of-animation-in-ux-10bd98614fa9',
    },
    {
      title: 'Learn About SVGs',
      src: 'https://www.pluralsight.com/authors/sarah-drasner?aid=701j0000001heIoAAI&promo=&utm_source=non_branded&utm_medium=digital_paid_search_google&utm_campaign=US_Dynamic&utm_content=&gclid=CjwKCAjwte71BRBCEiwAU_V9hyoo881PG7KxzppCMz4_nFr0Ouf4TdW_h_geKFzGKdcQwQ9adDdkpRoCficQAvD_BwE',
    },
    {
      title: 'Clean your dirty svgs',
      src: 'https://jakearchibald.github.io/svgomg/',
    },
    { title: 'SVG to React', src: 'https://react-svgr.com/' },
    { title: 'EX: HOwdy', src: '/howdy' },
    { title: 'Framer Motion', src: 'https://www.framer.com/motion/' },
  ];
  return (
    <Styles>
      <article className="article">
        <div className="article__wrapper-text">
          <h1 className="title">I Like to Animate by Utlizing...</h1>
          <h2 className="subtitle">CSS Animations {`&`} Transitions!</h2>
          <p className="content">
            There are a lot of options when it comes to animationg on the web.
            You can use JavaScript libraries or export directly from design
            programs like After Effects. Some JavaScript libraries make it
            easier to use CSS transitions and animations, while others can be
            bulky and take a long time to download. I find that quickly writing
            a few lines of CSS tends to do the trick in most cases.
          </p>
        </div>
      </article>
      <div className="sidebar">
        <div className="sidebar__wrapper-text">
          <h3>Resources {`&`} Links</h3>
          <ul>
            {links.map(({ title, src }, i) => {
              return (
                <li key={`item ${i}`}>
                  <a href={`${src}`} key={`link ${i}`}>
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="badge">
          <WorkHard />
        </div>
      </div>
    </Styles>
  );
};

export default Animation;
