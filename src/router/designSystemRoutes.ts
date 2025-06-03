import type { RouteRecordRaw } from 'vue-router';
import type { StrongNamedRouteRecordRaw } from '@/router/types';
import { RouteName, RoutePath } from '@/router/enum';

const designSystemRoutes: RouteRecordRaw & StrongNamedRouteRecordRaw = {
  path: RoutePath.DesignSystem,
  name: RouteName.DesignSystem,
  component: () => import('@/views-design-system/DesignView.vue'),
  children: [
    {
      path: RoutePath.Icons,
      name: RouteName.Icons,
      component: () => import('@/views-design-system/IconPage.vue'),
    },
    {
      path: RoutePath.Buttons,
      name: RouteName.Buttons,
      component: () => import('@/views-design-system/ButtonPage.vue'),
    },
    {
      path: RoutePath.Checkboxes,
      name: RouteName.Checkboxes,
      component: () => import('@/views-design-system/CheckboxPage.vue'),
    },
    {
      path: RoutePath.Inputs,
      name: RouteName.Inputs,
      component: () => import('@/views-design-system/InputPage.vue'),
    },
    {
      path: RoutePath.Forms,
      name: RouteName.Forms,
      component: () => import('@/views-design-system/FormPage.vue'),
    },
    {
      path: RoutePath.Layout,
      name: RouteName.Layout,
      component: () => import('@/views-design-system/LayoutPage.vue'),
    },
    {
      path: RoutePath.Links,
      name: RouteName.Links,
      component: () => import('@/views-design-system/LinkPage.vue'),
    },
    {
      path: RoutePath.CalendarDropdown,
      name: RouteName.CalendarDropdown,
      component: () => import('@/views-design-system/CalendarDropdownPage.vue'),
    },
    {
      path: RoutePath.CalendarRangeDropdown,
      name: RouteName.CalendarRangeDropdown,
      component: () => import('@/views-design-system/CalendarRangeDropdownPage.vue'),
    },
    {
      path: RoutePath.SimpleSelect,
      name: RouteName.SimpleSelect,
      component: () => import('@/views-design-system/SimpleSelectPage.vue'),
    },
    {
      path: RoutePath.MultipleSelect,
      name: RouteName.MultipleSelect,
      component: () => import('@/views-design-system/MultipleSelectPage.vue'),
    },
    {
      path: RoutePath.Tags,
      name: RouteName.Tags,
      component: () => import('@/views-design-system/TagsPage.vue'),
    },
    {
      path: RoutePath.Tree,
      name: RouteName.Tree,
      component: () => import('@/views-design-system/TreePage.vue'),
    },
    {
      path: RoutePath.Hint,
      name: RouteName.Hint,
      component: () => import('@/views-design-system/HintPage.vue'),
    },
    {
      path: RoutePath.DropDown,
      name: RouteName.DropDown,
      component: () => import('@/views-design-system/DropDownPage.vue'),
    },
    {
      path: RoutePath.Table,
      name: RouteName.Table,
      component: () => import('@/views-design-system/TablePage.vue'),
    },
    {
      path: RoutePath.PortalTable,
      name: RouteName.PortalTable,
      component: () => import('@/views-design-system/PortalTablePage.vue'),
    },
    {
      path: RoutePath.Accordion,
      name: RouteName.Accordion,
      component: () => import('@/views-design-system/AccordionPage.vue'),
    },
    {
      path: RoutePath.SnackBar,
      name: RouteName.SnackBar,
      component: () => import('@/views-design-system/SnackBarPage.vue'),
    },
  ],
};

export default designSystemRoutes;
