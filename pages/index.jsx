/* eslint-disable no-use-before-define */
import Head from "next/head";
import { css } from "@emotion/css";
import Feed from "../components/Feed";
import { posts } from "../mockData";

function Home() {
  return (
    <>
      <Head>
        <title>Example</title>
      </Head>
      <div>
        <div className={FeedsCss}>
          {posts.map((post) => (
            <Feed
              createdAt={post.created_at}
              context={post.context}
              isLiked={post.is_liked}
              likeCount={post.like_count}
              commentCount={post.comment_count}
            />
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
