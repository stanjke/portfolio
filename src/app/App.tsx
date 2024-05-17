import { FC } from "react";

import { AppComponent } from "./AppComponent";
import { Root } from "./root";

export const App: FC = () => {
  return (
    <Root>
      <AppComponent />
    </Root>
  );
};
