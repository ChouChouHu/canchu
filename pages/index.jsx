import Head from "next/head";
import { css } from "@emotion/css";
import Feed from "../components/Feed";
import { posts, user } from "../mockData";
import Layout from "../components/Layout";
import Sidebar from "../components/Home/Sidebar";
import PostAPost from "../components/PostAPost";

const HomeCss = css`
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 125px;

    .posts {
      min-width: 50%;
    }
  }
`;

function Home() {
  return (
    <>
      <Head>
        <title>CanChu</title>
      </Head>
      <Layout>
        <div className={HomeCss}>
          <div className="container">
            <Sidebar user={user} />
            <div className="posts">
              <PostAPost user={user} />
              {posts.map((post) => (
                <Feed
                  key={post.id}
                  id={post.id}
                  picture={post.picture}
                  name={post.name}
                  createdAt={post.created_at}
                  context={post.context}
                  isLiked={post.is_liked}
                  likeCount={post.like_count}
                  commentCount={post.comment_count}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
