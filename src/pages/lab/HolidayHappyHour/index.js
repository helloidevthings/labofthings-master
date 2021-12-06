import Styles from './styled';
import React from 'react';

const HolidayHappyHour = () => {
  return (
    <Styles>
      <div className="columns fluid">
        <article className="fluid">
          <h1>Holiday Happy Hour</h1>
          <h2>HHH Friday Dec 16th @11am</h2>
          <p>
            Welcome! Happy Festivities! We're having a Holiday party for our
            corner of the office. The plan is to include our remote co-workers
            as well. To do so we'll have a Zoom meeting at the office at 4pm.
          </p>
          <p>
            We'll play a game online. Vote{' '}
            <a href="http://www.strawpoll.me/45879779">HERE!</a>{' '}
          </p>
          <ul>
            <h3>TL;DR</h3>
            <li>Zoom Meeting at 11am</li>
            <li>Play A Game Online</li>
            <li>Gift Exchange @Abridged at 5pm</li>
          </ul>
        </article>
        <article>
          <ul>
            <li>
              <h2>Zoom Zoom!</h2>
              <a
                href="https://helloidevthings.com/holidayhappyhour"
                target="blank"
              >
                Link to Zoom
              </a>
            </li>
            <li>
              <h2>WE'll Play a game!</h2>
              <a
                href="https://helloidevthings.com/holidayhappyhour"
                target="blank"
              >
                Vote on the game
              </a>
            </li>
            <li>
              <h2>Gifts?</h2>
              <a
                href={
                  'https://www.amazon.com/gcx/Gifts-for-Everyone/gfhz/?categoryId=adult-neutral&pd_rd_r=e1433dc5-64d3-484b-9b32-20dbc5219b7b&pd_rd_w=ttl2Y&pd_rd_wg=905Nn&pf_rd_p=cb374683-8108-4955-985d-d0a8feb2ef7c&pf_rd_r=WBQZ9D6QDQ32763YTQM7&pinnedAsins=B088X4XFNQ%2CB07F6RR2SK&priceTo=20&ref_=US_HOL21_P4_5_GW_Desk_DashQuad_GiftsByPrice_V2_ENES_20&scrollState=eyJpdGVtSW5kZXgiOjAsInNjcm9sbE9mZnNldCI6MTAxLjQ1MzEyNX0%3D&sectionManagerState=eyJzZWN0aW9uVHlwZUVuZEluZGV4Ijp7fX0%3D'
                }
                target="blank"
              >
                Ideas
              </a>
            </li>
          </ul>
        </article>
      </div>
    </Styles>
  );
};

export default HolidayHappyHour;
