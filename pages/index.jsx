import Head from "next/head";
import { css } from "@emotion/css";
import Feed from "../components/Feed";
import Layout from "../components/Layout";
import Sidebar from "../components/Home/Sidebar";
import PostAPost from "../components/PostAPost";
import usePosts from "../hooks/post/usePosts";
import useMyProfile from "../hooks/user/useMyProfile";
import Posts from "../components/Posts";

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
  const { user } = useMyProfile();
  // console.log(posts)
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
              {user && <Posts />}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
