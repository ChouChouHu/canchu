import { css } from "@emotion/css";
import Layout from "../../components/Layout";
import { posts, user } from "../../mockData";
import PostAPost from "../../components/PostAPost";
import Button from "../../components/Layout/Button";
import Feed from "../../components/Feed";

const TemplateCss = css`
  .profile {
    position: relative;
    background: white;
    padding: 0 135px;
    padding-top: 145px;

    .info {
      display: flex;
      align-items: center;
      padding-bottom: 65px;
      .avatar {
        width: 180px;
        height: 180px;
        margin-left: 20px;
        margin-right: 45px;
      }
      .nameAndFriends {
        h1 {
          font-size: 40px;
          line-height: 54px;
          font-weight: bold;
          margin-bottom: 5px;
        }
        i {
          font-size: 20px;
        }
      }
    }
    .tabs {
      border-top: 1px #c8c8c8 solid;
      .tab {
        display: inline-block;
        padding: 25px;
        cursor: pointer;
        color: var(--main-color);
        font-weight: bold;
      }
      .active {
        padding-bottom: 21px;
        border-bottom: 4px solid var(--main-color);
      }
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 35px 135px;

    .sidebar {
      margin-right: 30px;
      padding: 25px 15px;
      width: 350px; // can be shrink
      min-width: 320px;

      .info {
        padding: 12px 10px;
        font-size: 16px;
        line-height: 24px;
        h3 {
          color: #525252;
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 6px;
          margin-top: 10px;
          font-weight: bold;
        }
        b {
          display: block;
          margin-bottom: 4px;
        }
        .intro {
          color: var(--main-color);
        }
      }
    }
    .posts {
      width: 100%;
    }
  }
`;

function Template() {
  return (
    <Layout>
      <div className={TemplateCss}>
        <div className="profile">
          <div className="info">
            <div className="avatar circleImg">
              <img src={user.picture} alt="avatar" />
            </div>
            <div className="nameAndFriends">
              <h1>{user.name}</h1>
              <i>{user.friend_count} 位朋友</i>
            </div>
          </div>
          <div className="tabs">
            <div className="tab active">
              <h2>貼文</h2>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="sidebar box">
            <Button isBlock bold>
              編輯個人檔案
            </Button>
            <div className="info">
              <div className="intro">
                <h3>自我介紹</h3>
                <b className="university">就讀的大學</b>
                <b className="city">我生活的城市</b>
              </div>
              <div className="jobs">
                <h3>職業經歷</h3>
                <b>曾在 AppWorks School 擔任學員</b>
                <b>曾在 Poo Panda 擔任外送員</b>
              </div>
              <div className="interesting">
                <h3>興趣</h3>
                寫程式  ·  吸貓  ·  藝術  ·  寫作  ·  靈性
              </div>
            </div>
          </div>
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
  );
}

export default Template;
