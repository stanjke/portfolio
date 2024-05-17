import { Container } from "../../../uiKit/Container/Container";
import { Logo } from "../../../uiKit/Logo/Logo";
import { Navigation } from "../../../uiKit/Navigation/Navigation";

import "./Header.scss";
export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header-wrapper">
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};
