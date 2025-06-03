import type { IconName } from '@/components/icons/models';

export enum SnackBarStatus {
  Success,
  Alert,
  Normal,
}

export interface SnackBarProps {
  id?: string;
  status?: SnackBarStatus;
  message: string;
  timer?: number;
}

export interface SnackBarPropsStrict {
  id: string;
  status: SnackBarStatus;
  message: string;
  timer: number;
}

export interface SnackBarParameters {
  borderColor: string;
  backgroundColor: string;
  icon: IconName;
}
