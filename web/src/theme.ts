import { css } from "@linaria/core";

export const theme = {
  breakpoints: {
    xs: 0,
    md: 768,
    xl: 1200,
  },
  spacing: 8,
  typography: {
    h3: css`
      font-weight: 600;
      font-size: 18px;
      line-height: 24px;
    `,
    h4: css`
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    `,
    p: css`
      font-size: 16px;
      line-height: 24px;
    `,
    caption: css`
      color: #6e6e6e;
      font-size: 12px;
      line-height: 16px;
    `,
  },
  shadow: {
    base: css`
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12),
        0px 2px 4px rgba(0, 0, 0, 0.08);
    `,
  },
};
