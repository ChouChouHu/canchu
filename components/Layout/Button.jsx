import { css } from "@emotion/css";

const ButtonCss = (isBlock, bold, grey, small) => css`
  display: ${isBlock ? "block" : "inline-block"};
  ${isBlock ? "width: 100%;" : ""}
  font-weight: ${bold ? "bold" : "normal"};
  background: ${grey ? "#D0D0D0" : "var(--main-color)"};
  text-align: center;
  color: white;
  padding: ${small ? "8px 20px" : "12px 36px"};
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  /* cursor: ${grey ? "auto" : "pointer"}; */
  border: 0;
`;

function Button({ children, onClick, isBlock, bold, type, grey, small }) {
  const handleClick = (e) => {
    if (type !== 'submit') {
      e.preventDefault();
    }
    if (onClick) {
      onClick(e);
    }
  };
  return (
    <button
      className={ButtonCss(isBlock, bold, grey, small)}
      onClick={handleClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
