import type { TPortalRow } from '@/components/portal-table/utils/models';
import type { TRow } from '../models';

export const getTableRowWithNewCell = <T>(
  row: TRow | TPortalRow<T>,
  index: number,
  newCellValue: (typeof row.cells)[number],
): typeof row => {
  const newCells = row.cells.slice();
  newCells[index] = newCellValue;
  return {
    ...row,
    cells: newCells,
  };
};
