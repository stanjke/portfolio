import { FC } from 'react';
import { IconInstance } from './Sources';
import { IconType } from './types';

export const createIcon = (
  Icon: FC<IconType>,
  { width = '16', height = '16', viewBox = '0 0 24 24', className = '' }: IconType = {},
) => (<Icon width={width} height={height} viewBox={viewBox} className={className}/>)
