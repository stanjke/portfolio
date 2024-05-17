import { FC } from 'react';

export type IconType = {
  viewBox?: string;
  width?: string;
  height?: string;
  className?: string;
};

export type IconComponent = FC<IconType>;
