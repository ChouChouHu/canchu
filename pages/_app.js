/* eslint-disable react/jsx-filename-extension */
import emotionReset from "emotion-reset";
import { Global, css } from "@emotion/react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}

          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }

          .circleImg {
            background: #d9d9d9;
            border-radius: 50%;
            display: flex;
            align-items: center;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .segmentLine {
            background: #d9d9d9;
            height: 1px;
            margin: 20px 0;
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
