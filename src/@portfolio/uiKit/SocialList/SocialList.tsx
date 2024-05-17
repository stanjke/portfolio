import { Icon } from "../Icons";

import "./SocialList.scss";

export const SocialList = () => {
  return (
    <ul className="navigation__social-list">
      <li className="navigation__social-item">
        <Icon.GitHub />
      </li>
      <li className="navigation__social-item">
        <Icon.LinkedIn />
      </li>
    </ul>
  );
};
