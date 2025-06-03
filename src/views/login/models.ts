import type { IconName } from '@/components/icons/models';
import type { BreakpointName } from '@/components/layout/utils/models';
import type { Component } from 'vue';

export type Position = {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
};

export type IconAdaptiveParameters = {
  position: Position;
  size: number;
};

export type AdaptiveObject<T> = {
  [key in BreakpointName]?: T;
} & {
  default: T;
};

export type Slide = {
  slide: AdaptiveObject<Component>;
  icons?: {
    iconName: IconName;
    positionAndSize: AdaptiveObject<IconAdaptiveParameters>;
  }[];
  title: string;
  subTitle: string;
};

export const SLIDER_ANIMATION_DURATION_S = 0.5;
