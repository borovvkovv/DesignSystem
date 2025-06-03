import type { ISelectItem } from '@/components/selects/models';
import { getEnumRecordKeys } from '@/utils/array';
import type { GroupRoleBaseInfo, IRoleBaseInfo } from '@/api';
import { SortType } from '@/utils/compare';
import { allPrivilegeGroups } from '@/views-portal/roles/utils/consts';

const SORT_BY_NAME_TITLE: Record<SortType, string> = {
  [SortType.Asc]: 'По наименованию (А_Я)',
  [SortType.Desc]: 'По наименованию (Я_А)',
};

export const getSortOption = (sortType: SortType): ISelectItem => ({
  title: SORT_BY_NAME_TITLE[sortType],
  value: sortType,
});

export const getSortOptions = (): ISelectItem[] => getEnumRecordKeys(SORT_BY_NAME_TITLE).map(getSortOption);

export type PrivilegeInfo = IRoleBaseInfo & {
  group: (typeof allPrivilegeGroups)[number];
};

export type GroupRoleDetailedInfo = GroupRoleBaseInfo & {
  roles?: Array<PrivilegeInfo>;
};

export type EditRole = PrivilegeInfo & {
  isEnabled: boolean;
};
