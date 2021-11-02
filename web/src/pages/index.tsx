import { css } from "@linaria/core";
import { Issue } from "../components/Issue";
import { Header } from "../templates/Header";
import { theme } from "../theme";

export const IndexPage = () => {
  return (
    <div>
      <Header />

      <div
        className={css`
          max-width: ${theme.breakpoints.xl}px;
          margin: 0 auto;
          margin-top: ${theme.spacing * 4}px;

          display: grid;
          grid-template-columns: auto 300px;
          gap: ${theme.spacing * 2}px;
        `}
      >
        <Issue
          title="#1 ドッグフーディングを行う"
          caption="- 2021年10月21日 15:22:13"
        >
          タスク管理サービスを作って、タスク管理サービスのタスクをそのサービスで管理するのみんな考えるやつっぽさがある
          <br />
          わかりみ
        </Issue>

        <div>Sidebar</div>
      </div>
    </div>
  );
};
