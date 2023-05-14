import { css } from "@emotion/css";
import Link from "next/link";
import { user } from "../../mockData";

const NavCss = css`
  position: fixed;
  width: 100vw;
  height: 100px;
  background: white;
  border-bottom: 1px solid #d9d9d9;
  padding: 25px 150px;
  display: flex;
  align-items: center;
  z-index: 99;

  .logo {
    width: 113px;
  }
  .search {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 23px;

    img {
      position: absolute;
      width: 17px;
      left: 13px;
    }
    input {
      color: #566470;
      background: #f0f2f5;
      border: 1px solid #d9d9d9;
      border: 0;
      padding: 12px 20px 12px 35px;
      border-radius: 10px;
      min-width: 270px;
    }
  }

  .functions {
    position: absolute;
    right: 140px;
    display: flex;
    .notifications,
    .avatar {
      width: 36px;
      height: 36px;
      cursor: pointer;
      margin-right: 16px;
    }
    .notifications {
      img {
        width: 60%;
        height: 60%;
      }
    }
  }
`;

function Nav() {
  return (
    <div className={NavCss}>
      <Link href="/">
        <img className="logo" src="/images/logo.svg" alt="logo" />
      </Link>
      <div className="search">
        <img src="/images/search.png" alt="search" />
        <input placeholder="搜尋" />
      </div>
      <div className="functions">
        <div className="notifications circleImg">
          <img src="/images/notification.svg" alt="notification" />
        </div>
        <Link href={`/${user.id}`}>
          <div className="avatar circleImg">
            <img src={user.picture} alt="user avatar" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
