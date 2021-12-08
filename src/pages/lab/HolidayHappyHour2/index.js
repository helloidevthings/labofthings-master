import Styles from './styled';
import React from 'react';

const HolidayHappyHour2 = () => {
  return (
    <Styles>
      <div className="columns fluid">
        <article>
          <h1>Gift Exchange</h1>
          <h2>Dec 22nd 🎄</h2>
          <p>Again this year! We're having a gift exchange.</p>
          <p>
            On Wednesday December 22nd join us for a White Elephant Gift
            Exchange. 🎅 This will take place at Token Game Tavern at 5pm. You
            can also hang out if you aren't feeling gifty. 🎮{' '}
            <small>
              <em>Plenty of Games to Play!</em>
            </small>
          </p>
          <ul>
            <h3>TL;DR</h3>
            <li>Gift Exchange @5:00pm December 22nd @Token</li>
          </ul>
        </article>
        <article>
          <ul>
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
          </ul>
          <ul>
            <h2>What {'&'} Where is Token?</h2>
            <li>Token is a barcade in West Knoxville</li>
            <li>They have arcade games, board games and pinball machines</li>
            <li>
              <a
                href={
                  'https://www.google.com/maps/place/Token+Game+Tavern/@35.9119309,-84.1005939,15z/data=!4m2!3m1!1s0x0:0x952536d67001ef6d?sa=X&ved=2ahUKEwik_YqB6NL0AhWczDgGHQKdDCoQ_BJ6BQiKARAF'
                }
                target="blank"
              >
                Token's Address
              </a>
            </li>
          </ul>
          <ul>
            <h2>Regular Rules</h2>
            <li>Pricing: $25 Limit</li>
            <li>
              You can't steal the same gift twice. (Meaning you can steal any
              gift 1x)
            </li>
            <li>Work Appropriate...</li>
          </ul>
          <ul>
            <h2>Epic Winners from Last Year</h2>
            <small>
              <em>
                Ok, it's not a competition but we all know there are winners...
              </em>
            </small>
            <li>That strange blanket with Shane's Face</li>
            <li>Bryan's Hand-maid Checkered Cutting Board</li>
            <li>Unicorn Water Bottle</li>
          </ul>
        </article>
        <article className="center">
          <h2>See you There!</h2>
          <p>🎁</p>
        </article>
      </div>
    </Styles>
  );
};

export default HolidayHappyHour2;
