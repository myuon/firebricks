import { css } from "@linaria/core";
import "destyle.css";
import { IndexPage } from "./pages";

const App = () => {
  return (
    <div
      className={css`
        :global() {
          html {
            color: #222;
          }
        }
      `}
    >
      <IndexPage />
    </div>
  );
};

export default App;
