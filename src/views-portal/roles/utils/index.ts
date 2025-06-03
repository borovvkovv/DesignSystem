import { unref, type MaybeRef } from 'vue';
import { checkStringIncludesSubstring } from '@/utils/string';
import type { GroupRoleDetailedInfo, PrivilegeInfo, EditRole } from './models';
import { allPrivilegeGroups } from '@/views-portal/roles/utils/consts';
import type { TPortalRow } from '@/components/portal-table/utils/models';
import type { TTableData } from '@/components/table/models';
import { compareByStringKey } from '@/utils/compare';

/**
 * Содержит ли описание групповой роли строку для поиска
 * @param role Групповая роль
 * @param pattern Строка для поиска
 * @returns true- содержит, иначе - false
 */
export const checkGroupRoleIncludesPattern = (role: GroupRoleDetailedInfo, pattern: string) =>
  checkStringIncludesSubstring(role.groupDescription, pattern);

/**
 * Содержит ли хотя бы одна группа ролей строку для поиска
 * @param privilegeInfos Роли(привилегии)
 * @param pattern Строка для поиска
 * @returns true- содержит, иначе - false
 */
export const checkRolesGroupIncludesPattern = (privilegeInfos: PrivilegeInfo[], pattern: string) =>
  privilegeInfos.some((role) => checkStringIncludesSubstring(role.group, pattern));

/**
 * Содержит ли имя роли строку для поиска
 * @param privilege Роль(привилегия)
 * @param pattern Строка для поиска
 * @returns true- содержит, иначе - false
 */
export const checkRoleIncludesPattern = (privilege: PrivilegeInfo, pattern: string) =>
  checkStringIncludesSubstring(privilege.description, pattern);

/**
 * Есть ли хотя бы одна роль имя которой содержит строку для поиска
 * @param privilegeInfos Роли(привилегии)
 * @param pattern Строка для поиска
 * @returns true- содержит, иначе - false
 */
export const isAnyPrivilegeInGroupIncludesPattern = (privilegeInfos: PrivilegeInfo[], pattern: MaybeRef<string>) =>
  privilegeInfos.some((role) => checkRoleIncludesPattern(role, unref(pattern)));

/**
 * Сгруппировтаь роли по группам
 * @param privileges Роли
 * @returns Словарь, где ключ - имя группы, значение - роль
 */
export const getRolesByGroup = <T extends PrivilegeInfo>(privileges: T[]) => {
  const resultMap = new Map<string, T[]>();
  allPrivilegeGroups.forEach((privilegeGroup) => {
    const groupPrivileges = privileges
      .filter((privilege) => privilege.group === privilegeGroup)
      .sort(compareByStringKey<PrivilegeInfo>('description'));
    if (groupPrivileges.length > 0) {
      resultMap.set(privilegeGroup, groupPrivileges);
    }
  });

  return resultMap;
};

/**
 * Формирование данных для таблицы ролей в группе
 * @param groupRole Групповая роль
 * @param pattern Строка для поиска
 * @returns  TPortalData Данные для отображения таблицы ролей.
 */
export const rolesTableBuilder = (groupRole: GroupRoleDetailedInfo, pattern: MaybeRef<string>): TTableData => {
  const rows: TPortalRow<GroupRoleDetailedInfo>[] = [];

  const isRoleIncludesPattern = checkGroupRoleIncludesPattern(groupRole, unref(pattern));
  const privilegesByGroup = getRolesByGroup(groupRole.roles ?? []);

  privilegesByGroup?.forEach((groupPrivileges, group) => {
    const isGroupPrivilegeIncludesPattern = checkRolesGroupIncludesPattern(groupPrivileges, unref(pattern));

    if (
      isRoleIncludesPattern ||
      isGroupPrivilegeIncludesPattern ||
      isAnyPrivilegeInGroupIncludesPattern(groupPrivileges, unref(pattern))
    )
      rows.push({
        cells: [
          {
            type: 'search',
            pattern: unref(pattern),
            text: group,
            modifier: {
              border: ['border-t', 'border-b', 'border-blueGrey-5'],
              text: 'text-size-6',
              other: 'px-4',
            },
          },
        ],
        modifier: {
          textColor: 'text-grey-1',
          other: ['bg-grey-6', 'font-bold'],
        },
      });

    groupPrivileges.forEach((privilege) => {
      const isPrivilegeIncludesPattern = checkRoleIncludesPattern(privilege, unref(pattern));

      if (isRoleIncludesPattern || isGroupPrivilegeIncludesPattern || isPrivilegeIncludesPattern)
        rows.push({
          cells: [
            {
              type: 'search',
              pattern: unref(pattern),
              text: privilege.description,
              modifier: {
                border: ['border-t', 'border-b', 'border-blueGrey-5'],
                text: 'text-size-6',
                other: 'px-4',
              },
            },
          ],
        });
    });
  });

  return {
    header: [],
    rows,
  };
};
