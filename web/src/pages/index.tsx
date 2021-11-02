import { css } from "@linaria/core";
import { theme } from "../theme";

const Header = () => {
  return (
    <nav
      className={css`
        max-width: ${theme.breakpoints.xl}px;
        margin: ${theme.spacing * 3}px auto;

        display: flex;
        justify-content: space-between;

        ul {
          display: flex;
          gap: ${theme.spacing * 4}px;
        }
      `}
    >
      <ul>
        <li>
          <a
            className={css`
              font-weight: bold;
            `}
            href="/"
          >
            FIREBRICKS
          </a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
      </ul>

      <div>Logged in as Anonymous</div>
    </nav>
  );
};

export const IndexPage = () => {
  return (
    <div>
      <Header />

      <div
        className={css`
          max-width: ${theme.breakpoints.xl}px;
          margin: 0 auto;
          margin-top: ${theme.spacing * 4}px;
        `}
      >
        hello, world!
      </div>
    </div>
  );
};
