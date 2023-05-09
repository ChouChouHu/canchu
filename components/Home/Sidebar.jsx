import { css } from "@emotion/css";
import Link from "next/link";
import { friends , user } from "../../mockData";

const SidebarCss = css`
  min-width: 370px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
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
  }
  .functionTitle {
    color: #767676;
    cursor: auto;
    .circleImg {
      background: transparent;
      img {
        object-fit: none;
      }
    }
  }
`;

function Sidebar() {
  return (
    <div className={SidebarCss}>
      <div className="function">
        <Link href="/myname">
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
        <div className="circleImg">
          <img src="/images/user.svg" alt="user icon" />
        </div>
        我的好友
      </div>
      {friends.map((friend) => (
        <div className="function" key="friend.id">
          <div className="circleImg">
            <img src={friend.picture} alt="friend img" />
          </div>
          {friend.name}
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
