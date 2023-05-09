import { css } from "@emotion/css";
import Nav from "./Nav";

const LayoutCss = css`
  background: #f3f3f3;
  padding-bottom: 200px;
`;

function Layout({ children }) {
  return (
    <div className={LayoutCss}>
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
