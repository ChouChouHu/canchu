import { css } from "@emotion/css";
import Link from "next/link";
import { useState } from "react";
import { friends } from "../../mockData";

const SidebarCss = css`
  position: relative;
  min-width: 370px;
  padding: 20px 25px;
  margin-right: 30px;

  .function {
    display: flex;
    align-items: center;
    a {
      display: flex;
      align-items: center;
      color: black;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
    height: 40px;
    font-size: 18px;
    font-weight: bold;
    margin: 8px 0;
    cursor: pointer;
    .circleImg {
      width: 40px;
      height: 40px;
      margin-right: 15px;
    }
    .icon {
      background: transparent;
      img {
        object-fit: none;
      }
    }
  }
  .functionTitle {
    color: #767676;
    cursor: auto;
  }
  .info {
    position: absolute;
    transform: translateY(40px);
    width: 100%;
    left: 0;
    padding: 0 25px; // same to sidebar
    line-height: 24px;
  }
`;

function Sidebar({user}) {
  const [showAllFriends, setShowAllFriend] = useState(false);
  return (
    <div className={`${SidebarCss} box`}>
      <div className="function">
        <Link href={`/user/${user.id}`}>
          <div className="circleImg">
            <img src={user.picture} alt="userphoto" />
          </div>
          {user.name}
        </Link>
      </div>
      {/* <div className="function">
        <div className="circleImg"></div>
        好友邀請
      </div> */}
      <div className="segmentLine" />
      <div className="function functionTitle">
        <div className="circleImg icon">
          <img src="/images/user.svg" alt="user icon" />
        </div>
        我的好友
      </div>
      {friends.map(
        (friend, index) =>
          (index < 6 || showAllFriends) && (
            <div className="function" key="friend.id">
              <Link href={`/user/${friend.id}`}>
                <div className="circleImg">
                  <img src={friend.picture} alt="friend img" />
                </div>
                {friend.name}
              </Link>
            </div>
          )
      )}
      {!showAllFriends && (
        <div className="function" onClick={() => setShowAllFriend(true)}>
          <div className="circleImg icon">
            <img src="/images/hamburger.svg" alt="hamburger" />
          </div>
          查看全部
        </div>
      )}
      <div className="info">
        關於我們 · 隱私權條款 · Cookie 條款 · © 2023 CanChu, Inc.
      </div>
    </div>
  );
}

export default Sidebar;
