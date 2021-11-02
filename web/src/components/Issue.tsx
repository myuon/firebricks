import { css, cx } from "@linaria/core";
import { theme } from "../theme";

export const Issue: React.FC<{ title: string; caption: string }> = ({
  title,
  children,
  caption,
}) => {
  return (
    <div
      className={cx(
        css`
          border: 1px solid #eee;
          border-radius: 4px;
          padding: ${theme.spacing * 2}px;

          display: flex;
          flex-direction: column;
          gap: ${theme.spacing}px;
        `
      )}
    >
      <span className={theme.typography.h4}>{title}</span>
      <p
        className={cx(
          theme.typography.p,
          css`
            font-size: 14px;
          `
        )}
      >
        {children}
      </p>
      <span className={theme.typography.caption}>{caption}</span>
    </div>
  );
};
