import { css } from "@emotion/css";

const AvatarCss = css`
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
