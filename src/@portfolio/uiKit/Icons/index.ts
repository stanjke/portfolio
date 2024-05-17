import { IconName } from './constants';
import { IconInstance } from './Sources';
import { IconComponent } from './types';
import { createIcon } from './createIcon';

type Icon = Record<IconName, IconComponent>;

export const Icon: Icon = {
  [IconName.GITHUB]: createIcon(IconInstance.GitHub),
  [IconName.LINKEDIN]: createIcon(IconInstance.LinkedIn),
};
