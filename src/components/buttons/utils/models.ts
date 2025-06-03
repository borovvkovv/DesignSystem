import type { AppColor, Size } from '@/enums';
import type { IconName } from '@/components/icons/models';

export enum IconPosition {
  Left,
  Right,
}

export interface IBaseButtonProps {
  size?: Size.M | Size.S | Size.XS;
  color?: AppColor.DarkBlue | AppColor.Blue | AppColor.Grey | AppColor.Red;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface ITextButtonProps extends IBaseButtonProps {
  text: string;
  isLoading?: boolean;
}

export interface IIconTextButtonProps extends ITextButtonProps {
  iconName: IconName;
  iconPosition?: IconPosition;
  for?: string;
}

export interface IIconButtonProps extends IBaseButtonProps {
  iconName: IconName;
  isLoading?: boolean;
  popupText?: string;
}

export type Switcher<T> = {
  left: {
    text: string;
    value: T;
  };
  right: {
    text: string;
    value: T;
  };
};
