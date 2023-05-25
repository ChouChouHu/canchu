import { css } from "@emotion/css";
import Link from "next/link";
import { useState } from "react";
import useLogout from "../../hooks/useLogOut";
import useNotifications from "../../hooks/useNotifications";
import useSearchUsers from "../../hooks/user/useSearchUsers";
import useMyProfile from "../../hooks/user/useMyProfile";

const NavCss = css`
  position: fixed;
  width: 100vw;
  height: 100px;
  min-width: 1326px; // temp
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
    margin-left: 23px;

    .searchInputContainer {
      display: flex;
      align-items: center;
      .searchImg {
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
        font-size: 16px;
      }
    }
    .searchList {
      position: absolute;
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      .user {
        display: flex;
        align-items: center;
        padding: 18px 20px;
        border-bottom: 1px solid #d9d9d9;
        cursor: pointer;
        color: black;
        text-decoration: none;
        &:hover {
          background: #eeeeee;
          .circleImg {
            background: white;
          }
        }
        .circleImg {
          width: 25px;
          height: 25px;
          margin-right: 8px;
        }
      }
      .user:last-child {
        border: 0;
      }
    }
  }

  .hoverBtn {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    .hoverArea {
      /* background: red; */
      padding-top: 44px;
    }
    .hoverContainer {
      display: none;
      position: absolute;
      margin-top: 36px;
    }
    &:hover {
      .hoverContainer {
        display: block;
      }
    }
  }

  .functions {
    position: absolute;
    right: 140px;
    display: flex;
    .notificationBtn,
    .avatarBtn {
      width: 36px;
      height: 36px;
      cursor: pointer;
      margin-right: 16px;
      .circleImg {
        height: 100%;
        width: 100%;
      }
    }
    .notificationBtn {
      .circleImg {
        width: 36px;
        height: 36px;
        img {
          width: 60%;
          height: 60%;
        }
      }

      .notifications {
        width: 330px;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .notificationTitle {
          background: var(--main-color);
          font-weight: bold;
          color: white;
          display: flex;
          align-items: center;
          padding: 15px 25px;

          .circleImg {
            margin-right: 10px;
            background: white;
          }
        }
        .notification {
          padding: 15px 0px;
          margin: 0 25px;
          border-bottom: 1px solid #d1cace;
          line-height: 24px;

          /* .eventFunction {
            position: absolute;
            right: 10px;
            margin-top: -45px; // temp
            display: flex;
            .check,
            .cancel {
              width: 20px;
              height: 20px;
              border-radius: 50%;
              background: var(--main-color);
              color: white;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 8px;
              font-weight: bold;
            }
          } */

          p {
            font-size: 16px;
          }
          b {
            font-size: 14px;
            font-weight: bold;
            color: var(--main-color);
          }
        }
        .notification:last-child {
          border: 0;
        }
        .showMoreNotification {
          padding: 10px 0;
          text-align: center;
          /* text-decoration: underline; */
          b {
            display: inline-block;
            position: relative;
            &::after {
              content: "";
              position: absolute;
              left: 0;
              bottom: -1px; /* 調整此值以控制下劃線與文字之間的距離 */
              width: 100%;
              height: 1px;
              background-color: currentColor;
            }
          }
        }
      }
    }
    .avatarBtn {
      .box {
        width: 150px;
        display: flex;
        flex-direction: column;
      }
      .btn {
        padding: 15px 0px;
        margin: 0 25px;
        border-bottom: 1px solid #d1cace;
        line-height: 24px;
        color: black;
        text-decoration: none;
      }
      .btn:last-child {
        border: 0;
      }
    }
  }
`;

function Nav() {
  const { logOut } = useLogout();
  const { user } = useMyProfile();
  const { events } = useNotifications();
  const [searchKeyword, setSearchKeyword] = useState("");
  const searchUsers = useSearchUsers(searchKeyword);
  const [isSearchFocused, setSearchIsFocused] = useState(false);
  return (
    <div className={NavCss}>
      <Link href="/">
        <img className="logo" src="/images/logo.svg" alt="logo" />
      </Link>
      <div className="search">
        <div className="searchInputContainer">
          <img className="searchImg" src="/images/search.png" alt="search" /> 
          {/* temp */}
          <input
            placeholder="搜尋"
            onChange={(e) => setSearchKeyword(e.target.value)}
            onFocus={() => setSearchIsFocused(true)}
            onBlur={() =>
              setTimeout(() => {
                setSearchIsFocused(false);
              }, 200)
            }
          />
        </div>
        {isSearchFocused && searchUsers.length !== 0 && (
          <div className="searchList box">
            {searchUsers?.map((searchUser) => (
              <Link href={`/user/${searchUser.id}`} className="user">
                <div className="circleImg">
                  {searchUser.picture && (
                    <img src={searchUser.picture} alt="user avatar" />
                  )}
                </div>
                {searchUser.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="functions">
        <div className="notificationBtn hoverBtn">
          <div className="circleImg">
            <img src="/images/notification.svg" alt="notification" />
          </div>
          <div className="hoverContainer">
            <div className="hoverArea">
              <div className="notifications box">
                <div className="notificationTitle">
                  <div className="circleImg">
                    <img
                      src="/images/notification_colored.svg"
                      alt="notification"
                    />
                  </div>
                  我的通知
                </div>
                {events?.map((event) => (
                  <div className="notification">
                    <p>{event.summary}</p>
                    <b>{event.created_at}</b>
                    {/* <div className="eventFunction">
                      <div className="check">v</div>
                      <div className="cancel">x</div>
                    </div> */}
                  </div>
                ))}
                {events?.length >= 6 && (
                  <div className="showMoreNotification">
                    <b>查看全部通知</b>
                  </div>
                )}
                {events && events.legnth === 0 && "沒有任何通知"}
              </div>
            </div>
          </div>
        </div>
        <div className="avatarBtn hoverBtn">
          <div className="circleImg">
            {user?.picture ? <img src={user?.picture} alt="userphoto" /> : null}
          </div>
          <div className="hoverContainer">
            <div className="hoverArea">
              <div className="box">
                <Link href={`/user/${user?.id}`} className="btn">
                  查看個人檔案
                </Link>
                <div className="btn" onClick={() => logOut()}>
                  登出
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
