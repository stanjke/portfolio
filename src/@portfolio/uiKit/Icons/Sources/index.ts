import { FC } from 'react';

import { IconName } from '../constants';
import { IconType } from '../types';

import { GitHub } from './GitHub';
import { LinkedIn } from './LinkedIn';

export type IconInstance = {
  [Key in IconName]: FC<IconType>;
};

export const IconInstance: IconInstance = {
  GitHub,
  LinkedIn,
};
