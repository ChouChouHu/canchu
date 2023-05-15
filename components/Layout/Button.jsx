import { css } from "@emotion/css";

const ButtonCss = (isBlock, bold) => css`
  display: ${isBlock ? 'block' : 'inline-block'};
  font-weight: ${bold ? 'bold' : 'normal'};
  background: var(--main-color);
  text-align: center;
  color: white;
  padding: 12px 36px;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
`;

function Button({ children, onClick, isBlock, bold }) {
  return (
    <div className={ButtonCss(isBlock, bold)} onClick={() => onClick()}>
      {children}
    </div>
  );
}

export default Button;
