import { RouteLocationNamedRaw, RouteRecordRaw } from 'vue-router';
import { RoutePath } from './enum';
import type { RouteNameType } from '@/router/enum/RouteName';
import { HeaderTab } from '@/views/base/models';
import { IconName } from '@/components/icons/models';

type Modify<T, R> = Omit<T, keyof R> & R;
export type StrongNamedRouteRecordRaw = Modify<
  RouteRecordRaw,
  {
    path: RoutePath;
    name: RouteNameType;
  }
>;

export type StrongRoutes = Array<RouteRecordRaw> & Array<StrongNamedRouteRecordRaw>;

export declare type LinkBase = {
  to: RouteLocationNamedRaw;
  title: string;
};

export declare interface Link extends LinkBase {
  tabs?: HeaderTab[];
  showInHeader: boolean;
  icon?: IconName;
}

export declare interface HeaderTab extends LinkBase {
  icon: IconName;
}

export declare interface PortalLink extends LinkBase {
  tabs?: HeaderTab[];
  icon: IconName;
}
