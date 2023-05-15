import { css } from "@emotion/css";
import Button from "./Layout/Button";

const PostAPostCss = css`
  margin: 0px 0px 23px 0px;
  padding: 20px;
  display: flex;

  .avatar {
    min-width: 75px;
    min-height: 75px;
    width: 75px;
    height: 75px;
    margin: 0 25px 0 5px;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    textarea {
      width: 100%;
      background: #f0f2f5;
      border: 1px solid #d9d9d9;
      border-radius: 10px;
      padding: 15px;
      font-size: 18px;
      min-height: 100px;
      margin-bottom: 15px;
    }
  }
`;

function PostAPost({ user }) {
  return (
    <div className={`${PostAPostCss} box`}>
      <div className="avatar circleImg">
        <img src={user.picture} alt="userphoto" />
      </div>
      <div className="form">
        <textarea placeholder="說點什麼嗎？" />
        <Button onClick={() => alert("post!")}>發佈貼文</Button>
      </div>
    </div>
  );
}

export default PostAPost;
