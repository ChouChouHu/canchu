import { css } from "@emotion/css";
import Link from "next/link";

const NavCss = css`
  position: fixed;
  width: 100vw;
  height: 100px;
  background: white;
  border-bottom: 1px solid #d9d9d9;
  padding: 25px 140px;
  display: flex;
  align-items: center;
  z-index: 99;

  .logo {
    width: 113px;
  }
`;

function Nav() {
  return (
    <div className={NavCss}>
      <Link href="/">
        <img src="/images/logo.svg" alt="logo" />
      </Link>
    </div>
  );
}

export default Nav;
