import { computed, ref, unref, type MaybeRef } from 'vue';
import type { LocationQueryRaw, LocationQueryValueRaw, Router } from 'vue-router';
import { SortOrderEnum } from '@/api';
import { sortISelectItems } from '@/utils/string';
import { stringToNumber } from '@/utils/number';
import { SortType } from '@/utils/compare';
import { getFirst, replaceItemInArrayByIndex, equalsOrIncludes } from '@/utils/array';
import type { ISelectItem } from '@/components/selects/models';
import {
  type ColumnSetting,
  type TColumnControl,
  type TPortalHeaderCell,
  type TPortalHeaderRow,
  type IPortalTableFilterRef,
  type PortalTableFilterInfo,
  type PortalTableFilter,
  DEFAULT_MIN_WIDTH_PX,
  type BaseColumnSetting,
  ColumnFilterMultiSelectSwitchState,
  type ColumnFilterSwitchMultiSelectForm,
  ColumnFilterSelectSwitchState,
  type ColumnFilterSwitchSelectForm,
  type ColumnFilterDateRangeForm,
  type TColumnControlFilterRangeCommon,
  type TPortalRow,
  type ISelectedOption,
} from '@/components/portal-table/utils/models';
import {
  type QueryParam,
  type TColumnControlFilterSingleCommon,
  type ColumnFilterNumberRangeForm,
} from '@/components/portal-table/utils/models';
import type { TCell, TCellCheckBox } from '@/components/table/models';

export const switchSortTypeToNext = (sortType: SortOrderEnum | undefined) => {
  switch (sortType) {
    case SortOrderEnum.Asc:
      return SortOrderEnum.Desc;
    case SortOrderEnum.Desc:
      return undefined;
    default:
      return SortOrderEnum.Asc;
  }
};
