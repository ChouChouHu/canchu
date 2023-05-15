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
    .notificationBtn,
    .avatar {
      width: 36px;
      height: 36px;
      cursor: pointer;
      margin-right: 16px;
    }
    .notificationBtn {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
      .circleImg {
        width: 36px;
        height: 36px;
        img {
          width: 60%;
          height: 60%;
        }
      }

      .notificationHoverArea {
        /* background: red; */
        padding-top: 80px;
      }

      .notificationContainer {
        display: none;
        position: absolute;

        .notifications {
          width: 330px;
          display: flex;
          flex-direction: column;
          background: #f7f7f7;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 20px;
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
            }
          }
          .notification {
            padding: 15px 0px;
            margin: 0 25px;
            border-bottom: 1px solid #d1cace;
            line-height: 24px;

            p {
              font-size: 16px;
            }
            b {
              font-size: 14px;
              font-weight: bold;
              color: var(--main-color);
            }
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

      &:hover {
        .notificationContainer {
          display: block;
        }
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
        <div className="notificationBtn">
          <div className="circleImg">
            <img src="/images/notification.svg" alt="notification" />
          </div>
          <div className="notificationContainer">
            <div className="notificationHoverArea">
              <div className="notifications">
                <div className="notificationTitle">
                  <div className="circleImg">
                    <img
                      src="/images/notification_colored.svg"
                      alt="notification"
                    />
                  </div>
                  我的通知
                </div>
                <div className="notification">
                  <p>通知訊息</p>
                  <b>時間</b>
                </div>
                <div className="notification">
                  <p>通知訊息</p>
                  <b>時間</b>
                </div>
                <div className="showMoreNotification">
                  <b>查看全部通知</b>
                </div>
              </div>
            </div>
          </div>
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
