/* eslint-disable no-use-before-define */
import Head from "next/head";
import { css } from "@emotion/css";
import Feed from "../components/Feed";
// import {
//   basicStyles,
//   otherStyles,
//   someMoreBasicStyles,
//   someCssAsObject,
//   combinedAsArray,
//   cxExample,
//   keyframesExample,
// } from '../shared/styles'

const feeds = [1, 2, 3, 4, 5];

function Home() {
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      <div>
        {/* <h1>Emotion Vanilla example</h1>
      <div className={basicStyles}>Basic styles using emotion</div>
      <div className={otherStyles}>Some more styles using emotion</div>
      <div className={someMoreBasicStyles}>Well why not here is some more</div>
      <div className={someCssAsObject}>Object styles using emotion css</div>
      <div className={combinedAsArray}>Array of styles using emotion css</div>
      <div className={cxExample}>cx example from emotion</div>
      <div className={keyframesExample} /> */}
        <div className={FeedsCss}>
          {feeds.map(() => (
            <Feed />
          ))}
        </div>
      </div>
    </>
  );
}

const FeedsCss = css`
  margin-left: 20%;
  margin-top: 100px;
`;

export default Home;
