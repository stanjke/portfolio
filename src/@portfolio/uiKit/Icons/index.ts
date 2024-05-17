import { FC } from "react";

import { IconName } from "./constants";
import { IconInstance } from "./Sources";
import { IconType } from "./types";

type Icon = {
  [Key in IconName]: FC<IconType>;
};

export const Icon: Icon = {
  [IconName.GITHUB]: IconInstance.GitHub,
  [IconName.LINKEDIN]: IconInstance.LinkedIn,
};
