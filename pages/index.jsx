import Head from "next/head";
import { css } from "@emotion/css";
import Feed from "../components/Feed";
import { posts } from "../mockData";

const HomeCss = css`
  background: #f3f3f3;
`;

function Home() {
  return (
    <>
      <Head>
        <title>CanChu</title>
      </Head>
      <div>
        <div className={HomeCss}>
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

export default Home;
