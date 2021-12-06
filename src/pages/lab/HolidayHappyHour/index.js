import Styles from './styled';
import React from 'react';

const HolidayHappyHour = () => {
  return (
    <Styles>
      <div className="columns fluid">
        <article className="fluid">
          <h1>Holiday Happy Hour</h1>
          <h2>HHH Thursday Dec 15th @4pm 🎄</h2>
          <p>
            Welcome! Happy Festivities! We're having a Holiday party for our
            corner of the office. The plan is to include our remote co-workers
            as well. To do so we'll have a small game on Slack before lunch. The
            game is called "Do You Hear What I Hear?--Nope, because there isn't
            a Teams Meeting." Just kidding...
          </p>
          <p>
            The Slack Game is very simple and shouldn't take more than 15mins or
            so. It's really just a poll that everyone can vote on. We'll have 5
            pre-determined contestants that will provide the poll options.
            Everyone else can vote!
          </p>
          <p>
            The Gift Exchange will take place after work hours at HiWire at 5pm.
            If you would like to join that portion of the party feel free to
            bring a gift. You can also hang out if you aren't feeling gifty. 😁{' '}
            <small>
              <em>Remotees Check your inboxes for this part!</em>
            </small>
          </p>
          <ul>
            <h3>TL;DR</h3>
            <li>Slack Game before lunch at 11:30am</li>
            <li>Gift Exchange @HiWire 5pm</li>
          </ul>
        </article>
        <article>
          <ul>
            <h1>Gift Exchange</h1>
            <h2>What To buy?</h2>
            <li>
              <a
                href={
                  'https://www.amazon.com/gcx/Gifts-for-Everyone/gfhz/?categoryId=adult-neutral&pd_rd_r=e1433dc5-64d3-484b-9b32-20dbc5219b7b&pd_rd_w=ttl2Y&pd_rd_wg=905Nn&pf_rd_p=cb374683-8108-4955-985d-d0a8feb2ef7c&pf_rd_r=WBQZ9D6QDQ32763YTQM7&pinnedAsins=B088X4XFNQ%2CB07F6RR2SK&priceTo=20&ref_=US_HOL21_P4_5_GW_Desk_DashQuad_GiftsByPrice_V2_ENES_20&scrollState=eyJpdGVtSW5kZXgiOjAsInNjcm9sbE9mZnNldCI6MTAxLjQ1MzEyNX0%3D&sectionManagerState=eyJzZWN0aW9uVHlwZUVuZEluZGV4Ijp7fX0%3D'
                }
                target="blank"
              >
                Ideas
              </a>
            </li>
            <h2>Regular Rules</h2>
            <li>Pricing: $25 Limit</li>
            <li>Gift can be stolen 3x</li>
            <li>Work Appropriate...</li>
            <h2>Epic Winners from Last Year</h2>
            <small>
              <em>
                Ok, it's not a competition but we all know there are winners...
              </em>
            </small>
            <li>That strange blanket with Shane's Face</li>
            <li>Bryan's Covetted Checkered Cutting Block</li>
            <li></li>
          </ul>
        </article>
      </div>
    </Styles>
  );
};

export default HolidayHappyHour;
