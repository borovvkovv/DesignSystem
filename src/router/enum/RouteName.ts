import type { RoutePath } from './RoutePath';

export type RouteNameType = keyof typeof RoutePath;
export const RouteName: { [Value in RouteNameType]: Value } = {
  DesignSystem: 'DesignSystem',
  Icons: 'Icons',
  Buttons: 'Buttons',
  Checkboxes: 'Checkboxes',
  Inputs: 'Inputs',
  Forms: 'Forms',
  Layout: 'Layout',
  Links: 'Links',
  CalendarDropdown: 'CalendarDropdown',
  CalendarRangeDropdown: 'CalendarRangeDropdown',
  SimpleSelect: 'SimpleSelect',
  MultipleSelect: 'MultipleSelect',
  Tags: 'Tags',
  Hint: 'Hint',
  Tree: 'Tree',
  DropDown: 'DropDown',
  Table: 'Table',
  PortalTable: 'PortalTable',
  Accordion: 'Accordion',
  SnackBar: 'SnackBar',
} as const;
