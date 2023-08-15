import Head from "next/head";
import { css } from "@emotion/css";
import Layout from "../components/Layout";
import Sidebar from "../components/Home/Sidebar";
import useMyProfile from "../hooks/user/useMyProfile";
import breakpoints from "../shared/breakpoints";

const HomeCss = css`
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 125px;

    .feedsWall {
      width: 55vw;
      /* min-width: 500px; */

      .box {
        padding: 20px;
        margin-bottom: 20px;

        h1 {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }
      }

      a {
        display: inline-block;
        margin: 5px 0;
        color: black;
      }
    }
  }

  @media ${breakpoints.tablet} {
    .container {
      .feedsWall {
        width: 85%;
      }
    }
  }
`;

function Home() {
  const { user } = useMyProfile();
  // console.log(posts)
  return (
    <>
      <Head>
        <title>協作專案 Trellos</title>
      </Head>
      <Layout>
        <div className={HomeCss}>
          <div className="container">
            <Sidebar user={user} />
            <div className="feedsWall">
              <div className="box">
                <h1>團隊專案</h1>
                <a href="https://trello.com/b/BXw8mCvy/chitou" target="_blank" rel="noreferrer">A: ChiTou /
                  李芷萱
                  劉畇德
                  陳沛妤
                  賴心云
                </a><br />
                <a href="https://trello.com/b/XHhitDpV/joineat" target="_blank" rel="noreferrer">B: JoinEat /
                  沈尚緯
                  蔡沅格
                  童晧庭
                  陳樂燊
                </a><br />
                <a href="https://trello.com/b/P5ZYAfJd/%E9%A3%9F%E6%99%82%E5%A5%BD" target="_blank" rel="noreferrer">C: 食時好 /
                  王婷蓁
                  黃采婕
                  蘇胤翔
                  沈宜萱
                </a><br />
                <a href="https://trello.com/b/w3Zvmfuc/%E8%8D%89%E5%8B%95%E9%A2%A8%E6%B2%92%E5%90%B9" target="_blank" rel="noreferrer">D: Balance Cat /
                  吳東諺
                  林家榆
                  劉孟頡
                  鄭安倫
                </a><br />
                <a href="https://trello.com/w/daodin2" target="_blank" rel="noreferrer">E: Daodin /
                  邵鈺晽
                  陳彥融
                  劉冠甫
                  林資融
                </a><br />
                <a href="https://trello.com/w/soonsolve" target="_blank" rel="noreferrer">F: Soon Solve /
                  曾泊文
                  蘇上青
                  邱瀅靜
                  陳治宏
                  劉威廷
                </a><br />
                <a href="" target="_blank" rel="noreferrer">G: GPTQuizHub /
                  張孫琦
                  李青芳
                  蘇蓁葳
                  林郁惟
                </a><br />
                <a href="https://trello.com/b/KhkMraOi/feature" target="_blank" rel="noreferrer">H: WeShare /
                  李秉峻
                  蔣秉軒
                  黃郁潔
                  王行遠
                </a><br />
                <a href="https://www.notion.so/bensonchiu/AppWorks-School-Caf-NearU-c2cf3b45ba6f490283135d0e5e719de6" target="_blank" rel="noreferrer">I: CafeNearU /
                  邱秉辰
                  黃沛婕
                  張家華
                  陳姵彤
                </a>
              </div>
              <div className="box">
                <h1>前端 Deploy</h1>
                <a href="https://campus-summer-front-end-project-tau.vercel.app/login" target="_blank" rel="noreferrer">Jodie</a><br />
                <a href="https://campus-summer-front-end-project.vercel.app/" target="_blank" rel="noreferrer">Kelly</a><br />
                <a href="https://campus-summer-front-end-project-bnka.vercel.app/" target="_blank" rel="noreferrer">東東</a><br />
                <a href="https://canchu-ariel.vercel.app/" target="_blank" rel="noreferrer">Ariel</a><br />
                <a href="https://campus-summer-front-end-project-three.vercel.app/login" target="_blank" rel="noreferrer">Benson</a><br />
                <a href="https://campus-summer-front-end-project-t3c4.vercel.app/login" target="_blank" rel="noreferrer">Powen</a><br />
                <a href="https://campus-summer-front-end-project-27fx.vercel.app/" target="_blank" rel="noreferrer">Penny</a><br />
                <a href="https://campus-summer-front-end-project-beta.vercel.app/" target="_blank" rel="noreferrer">Joy</a><br />
                <a href="https://campus-summer-front-end-project-xi.vercel.app/ " target="_blank" rel="noreferrer">Vicky</a><br />
                <a href="https://campus-summer-front-end-project-adeliu4239.vercel.app/" target="_blank" rel="noreferrer">阿德</a><br />
                <a href="https://canchu-jacky010080.vercel.app/" target="_blank" rel="noreferrer">Jacky</a><br />
                <a href="https://campus-summer-front-end-project-jarenchi.vercel.app/" target="_blank" rel="noreferrer">Jaren</a><br />
                <a href="https://campus-summer-front-end-project-gzjk.vercel.app/" target="_blank" rel="noreferrer">Justin</a><br />
                <a href="https://canchu-m4xshen.vercel.app/" target="_blank" rel="noreferrer">Max</a><br />
                <a href="https://campus-summer-front-end-project-od58.vercel.app/" target="_blank" rel="noreferrer">秉軒</a><br />
                <a href="https://campus-summer-front-end-project-9i7y.vercel.app" target="_blank" rel="noreferrer">Brandon</a><br />
                <a href="https://canchu-five.vercel.app/" target="_blank" rel="noreferrer">Tsai</a><br />
                <a href="https://campus-summer-front-end-project-387o.vercel.app/" target="_blank" rel="noreferrer">Yvonne</a><br />
                <a href="https://canchu.vercel.app/" target="_blank" rel="noreferrer">Chou</a><br />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Home;
