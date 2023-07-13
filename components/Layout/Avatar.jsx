import { css } from "@emotion/css";

const AvatarCss = css`
  width: 100%;
  height: 100%;
  .default {
    margin-bottom: -35%;
  }
`;

function Avatar({ picture }) {
  return (
    <div className={AvatarCss}>
      {picture ? (
        <img src={picture} alt="userphoto" />
      ) : (
        <img className="default" src="/images/user.png" alt="userphoto" />
      )}
    </div>
  );
}

export default Avatar;
