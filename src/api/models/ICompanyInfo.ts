/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ParameterItem } from './ParameterItem';

export type ICompanyInfo = {
  /**
   * Наименование организации
   */
  name: string;
  /**
   * Параметры системы
   */
  parameters: Array<ParameterItem>;
};
