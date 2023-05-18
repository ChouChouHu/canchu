import { css } from "@emotion/css";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import PostAPost from "../../components/PostAPost";
import Button from "../../components/Layout/Button";
// import Feed from "../../components/Feed";
import useUserProfile from "../../hooks/user/useUserProfile";
// import usePosts from "../../hooks/post/usePosts";
import useMyProfile from "../../hooks/user/useMyProfile";
import useSendFriendRequest from "../../hooks/friends/useSendFriendRequest";
import Posts from "../../components/Posts";
import useAgreeFriend from "../../hooks/friends/useAgreeFriend";
import useUploadAvatar from "../../hooks/user/useUploadAvatar";

const UserPageCss = css`
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
        position: relative;
        width: 180px;
        height: 180px;
        margin-left: 20px;
        margin-right: 45px;
        overflow: hidden;
      }
      .myAvatar {
        cursor: pointer;
        .editBtn {
          display: none;
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
          height: 100%;
          justify-content: center;
          align-items: center;
          input {
            background: red;
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }
        }
        &:hover {
          .editBtn {
            position: absolute;
            display: flex;
          }
        }
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
          margin-bottom: 12px;
          margin-top: 10px;
          font-weight: bold;
        }
        b {
          display: block;
          margin-bottom: 8px;
        }
        .icon {
          width: 15px;
          height: 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 10px;
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

function UserPage() {
  // profile
  const [userId, setUserId] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.query.userId) setUserId(router.query.userId);
  }, [router.query.userId]);
  const { user } = useUserProfile(userId);

  // authorize
  const { user: myProfile } = useMyProfile();
  const isMyself = () => myProfile && user && myProfile.id === user.id;
  const { sendFriendRequest } = useSendFriendRequest();
  const { agreeFriend } = useAgreeFriend();

  // upload avatar
  const { uploadAvatar } = useUploadAvatar();
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      uploadAvatar(e.target.files[0]);
      // if (response) {
      //   console.log("圖片上傳成功:", response);
      // }
    }
  };

  return (
    <Layout>
      <div className={UserPageCss}>
        <div className="profile">
          <div className="info">
            <div className={`avatar circleImg${isMyself() ? " myAvatar" : ""}`}>
              {user?.picture ? (
                <img src={user?.picture} alt="userphoto" />
              ) : null}
              {isMyself() && (
                <div className="editBtn">
                  {" "}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                  />
                  編輯
                </div>
              )}
            </div>
            <div className="nameAndFriends">
              <h1>{user?.name}</h1>
              <i>{user?.friend_count} 位朋友</i>
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
            {isMyself() && (
              <Button isBlock bold>
                編輯個人檔案
              </Button>
            )}
            {!isMyself() && user && !user.friendship && (
              <Button isBlock bold onClick={() => sendFriendRequest(user.id)}>
                邀請成為好友
              </Button>
            )}
            {!isMyself() && user && user.friendship?.status === "requested" && (
              <Button isBlock bold grey>
                已送出邀請
              </Button>
            )}
            {!isMyself() && user && user.friendship?.status === "pending" && (
              <Button
                isBlock
                bold
                onClick={() => agreeFriend(user.friendship.id)}
              >
                答應好友邀請
              </Button>
            )}
            <div className="info">
              <div className="intro">
                <h3>自我介紹</h3>
                {user?.introduction}
                {/* <b className="university">
                  <div className="icon">
                    <img src="/images/education.svg" alt="education" />
                  </div>
                  就讀的大學
                </b>
                <b className="city">
                  <div className="icon">
                    <img src="/images/location.svg" alt="location" />
                  </div>
                  我生活的城市
                </b> */}
              </div>
              {/* <div className="jobs">
                <h3>職業經歷</h3>
                <b>曾在 AppWorks School 擔任學員</b>
                <b>曾在 Poo Panda 擔任外送員</b>
              </div> */}
              <div className="interesting">
                <h3>興趣</h3>
                {/* 寫程式 · 吸貓 · 藝術 · 寫作 · 靈性 */}
                {user?.tags}
              </div>
            </div>
          </div>
          <div className="posts">
            {isMyself() && <PostAPost user={myProfile} />}
            {user && <Posts userId={user.id} />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserPage;
