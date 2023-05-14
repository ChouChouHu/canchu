import { css } from "@emotion/css";

const ButtonCss = css`
  display: inline-block;
  background: var(--main-color);
  color: white;
  padding: 12px 36px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`;

function Button({ children, onClick }) {
  return (
    <div className={ButtonCss} onClick={() => onClick()}>
      {children}
    </div>
  );
}

export default Button;
