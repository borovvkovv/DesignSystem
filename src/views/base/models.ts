import type { HeaderTab, LinkBase } from '@/router/types';

export declare type BaseHeaderProps = {
  title: string;
  breadCrumbs: LinkBase[];
  tabs?: HeaderTab[];
};

export declare type MainModalsMethods = {
  openModal: () => void;
  closeModal: () => void;
  modalContainer?: HTMLElement;
};
