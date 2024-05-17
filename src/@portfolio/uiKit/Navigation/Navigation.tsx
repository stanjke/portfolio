import { SocialList } from "../SocialList/SocialList";
import { ThemeButton } from "../ThemeButton/ThemeButton";

import "./Navigation.scss";

export const Navigation = () => {
  return (
    <div className="navigation__wrapper">
      <ul className="navigation__list">
        <li>Home</li>
        <li>About</li>
        <li>Tech Stack</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <ThemeButton />
      <SocialList />
    </div>
  );
};
