import { css } from "@emotion/css";
import Link from "next/link";
import { user } from "../mockData";

const FeedCss = css`
  max-width: 80vw;
  min-width: 700px;
  margin: 0px 0px 23px 0px;
  font-size: 13px;

  .user {
    display: flex;
    margin: 20px 40px;

    .avatar {
      border-radius: 50%;
      border: 1px solid #d9d9d9;
      width: 75px;
      height: 75px;
      margin-right: 15px;
      cursor: pointer;
    }

    .userData {
      display: flex;
      flex-direction: column;
      justify-content: center;

      a {
        color: black;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      .userName {
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        margin-bottom: 5px;

        &:hover {
          text-decoration: underline;
        }
      }

      .timeStamp {
        color: #909090;
        cursor: pointer;
        font-size: 14px;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .feedText {
    font-size: 16px;
    margin: 5px 40px;
    min-height: 100px;
  }

  .functionList {
    position: relative;
    display: flex;
    margin: 0px 35px;
    border-top: 1px solid #d9d9d9;
    border-bottom: 1px solid #d9d9d9;
    padding: 8px 5px;

    .likeBtn,
    .commentBtn,
    .shareBtn {
      width: 20px;
      height: 30px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      /* border: 1px solid #d9d9d9; */

      img {
        width: 100%;
      }
    }
  }

  .likeBtn {
    /* background-color: #f85c53; */
    /* border-color: #f85c53; */
    margin-right: 10px;
  }

  .isLiked {
    img {
      filter: invert(45%) sepia(53%) saturate(761%) hue-rotate(314deg)
        brightness(98%) contrast(99%);
    }
  }

  .shareBtn {
    position: absolute;
    right: 5px;
  }

  .interactionStatus {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 35px;
  }

  .whoLikes {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .whoLikes:hover .namesOfLikes {
    text-decoration: underline;
  }

  .friendPhotos {
    display: flex;
    margin-right: 7px;
  }

  .friendPhoto {
    border: 1px solid white;
    background: #d9d9d9;
    border-radius: 50%;
    width: 19px;
    height: 19px;
    margin-left: -7px;
  }

  .friendPhoto:first-child {
    margin-left: 0;
  }

  .namesOfLikes,
  .numberOfComments,
  .numberOfSharings {
    font-size: 16px;
    color: #5c5c5c;
    cursor: pointer;
  }

  .interactionInfo {
    display: flex;
    position: absolute;
    right: 0;
  }

  .numberOfComments:hover,
  .numberOfSharings:hover {
    text-decoration: underline;
  }

  .numberOfComments {
    margin-right: 15px;
  }

  .commentArea {
    border-top: 1px solid #d9d9d9;
    padding: 20px 40px;
  }

  .leaveComment {
    display: flex;
  }

  .myAvatar {
    display: block;
    min-width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #a4c3d3;
    margin-right: 20px;
  }

  .leaveComment .commentBtn {
    padding: 10px 0;
    border-radius: 50px;
    background: #f0f0f0;
    color: #777;
    font-size: 20px;
    text-align: center;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

function Feed({
  id,
  picture,
  name,
  createdAt,
  context,
  isLiked,
  likeCount,
  commentCount
}) {
  return (
    <div className={`${FeedCss} box`}>
      <div className="user">
        <Link href={`/user/${user.id}`} className="avatar circleImg">
          <img src={picture} alt="avatar" />
        </Link>
        <div className="userData">
          <Link href={`/user/${user.id}`} className="userName">
            {name || "Error"}
          </Link>
          <Link href={`/posts/${id}`} className="timeStamp">{createdAt}</Link>
        </div>
      </div>
      <div className="feedText">{context}</div>
      <div className="functionList">
        <div className={`likeBtn${isLiked ? " isLiked" : ""}`}>
          <img src="/images/heart.svg" alt="liked" />
        </div>
        <div className="commentBtn">
          <img src="/images/comment.svg" alt="comment button" />
        </div>
        <div className="shareBtn" />
      </div>
      <div className="interactionStatus">
        <div className="whoLikes">
          {/* <div className="friendPhotos">
            <div className="friendPhoto" />
            <div className="friendPhoto" />
            <div className="friendPhoto" />
          </div> */}
          <div className="namesOfLikes"> {likeCount} 人喜歡這則貼文</div>
        </div>
        <div className="interactionInfo">
          <div className="numberOfComments">{commentCount} 則留言</div>
          {/* <div className="numberOfSharings">5 次分享</div> */}
        </div>
      </div>
      <div className="commentArea">
        <div className="leaveComment">
          <div className="myAvatar circleImg">
            <img src={user.picture} alt="my avatar" />
          </div>
          <div className="commentBtn">留個言吧</div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
