import { IconComponent, IconType } from './types';

export const createIcon = (
  Icon: IconComponent,
  {
    width: defaultWidth = '16',
    height: defaultHeight = '16',
    viewBox: defaultViewBox = '0 0 24 24',
    className: defaultClassName = '',
  }: IconType = {},
): IconComponent => {
  const IconWrapper: IconComponent = ({
    className,
    height,
    viewBox,
    width,
  }: IconType) => {
    const props: IconType = {
      className: className ?? defaultClassName,
      height: height ?? defaultHeight,
      viewBox: viewBox ?? defaultViewBox,
      width: width ?? defaultWidth,
    };

    return <Icon {...props} />;
  };

  return IconWrapper;
};
