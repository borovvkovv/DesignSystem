import { RouteName } from '@/router/enum';
import { IconName } from '@/components/icons/models';
import type { PortalLink } from '@/router/types';

export const designSystemLinks: PortalLink[] = [
  {
    to: { name: RouteName.Layout },
    title: 'Разметка',
    icon: IconName.IconDocumentFill,
  },
  {
    to: { name: RouteName.Icons },
    title: 'Иконки',
    icon: IconName.IconPipe,
  },
  {
    to: { name: RouteName.Buttons },
    title: 'Кнопки',
    icon: IconName.IconDownload,
  },
  {
    to: { name: RouteName.Checkboxes },
    title: 'Чек-боксы',
    icon: IconName.IconBoard,
  },
  {
    to: { name: RouteName.Inputs },
    title: 'Поля ввода',
    icon: IconName.IconPlus,
  },
  {
    to: { name: RouteName.Forms },
    title: 'Формы',
    icon: IconName.IconBoard,
  },
  {
    to: { name: RouteName.Links },
    title: 'Ссылки',
    icon: IconName.IconArrowRight,
  },
  {
    to: { name: RouteName.CalendarDropdown },
    title: 'Календари',
    icon: IconName.IconCalendar,
    tabs: [
      { to: { name: RouteName.CalendarDropdown }, title: 'Еденичный выбор' },
      { to: { name: RouteName.CalendarRangeDropdown }, title: 'Выбор диапазона' },
    ],
  },
  {
    to: { name: RouteName.SimpleSelect },
    title: 'Выпадающие списки',
    icon: IconName.IconPlus,
    tabs: [
      { to: { name: RouteName.SimpleSelect }, title: 'Еденичный выбор' },
      { to: { name: RouteName.MultipleSelect }, title: 'Множественный выбор' },
    ],
  },
  {
    to: { name: RouteName.Tags },
    title: 'Тэги',
    icon: IconName.IconPlus,
  },
  {
    to: { name: RouteName.Tree },
    title: 'Дерево',
    icon: IconName.IconBoard,
  },
  {
    to: { name: RouteName.Hint },
    title: 'Подсказки',
    icon: IconName.IconEyeOpen,
  },
  {
    to: { name: RouteName.DropDown },
    title: 'Разворачивающийся блок',
    icon: IconName.IconArrowDown,
  },
  {
    to: { name: RouteName.Table },
    title: 'Таблицы',
    icon: IconName.IconDocument,
    tabs: [
      { to: { name: RouteName.Table }, title: 'Обычная таблица' },
      { to: { name: RouteName.PortalTable }, title: 'Портальная таблица' },
    ],
  },
  {
    to: { name: RouteName.Accordion },
    title: 'Аккордеон',
    icon: IconName.IconConsumer,
  },
  {
    to: { name: RouteName.SnackBar },
    title: 'Мгновенные уведомления',
    icon: IconName.IconInfo,
  },
];
