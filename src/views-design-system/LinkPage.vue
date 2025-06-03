<template>
  <table>
    <tr>
      <td class="header">Styles name</td>
      <td class="header">Default</td>
      <td class="header">Disable</td>
    </tr>
    <tr
      v-for="(type, index) in links"
      :key="index"
      :class="type.linkStyle === LinksStyles.Style8 && 'bg-blue-1 text-white'"
    >
      <td>{{ type.linkStyle }}</td>
      <td>
        <AppLink
          :to="type.href"
          :link-style="type.linkStyle"
        >
          {{ type.name }}
        </AppLink>
      </td>
      <td>
        <AppLink
          :to="type.href"
          :link-style="type.linkStyle"
          :is-disabled="true"
        >
          {{ type.name }}
        </AppLink>
      </td>
    </tr>
  </table>
  <table>
    <tr>
      <td class="header">Styles name</td>
      <td class="header">Default</td>
      <td class="header">Disable</td>
    </tr>
    <tr
      v-for="(type, index) in links"
      :key="index"
      :class="type.linkStyle === LinksStyles.Style8 && 'bg-blue-1 text-white'"
    >
      <td>{{ type.linkStyle }}</td>
      <td>
        <RouterLink
          :class="`link_${type.linkStyle}`"
          :to="type.href"
        >
          {{ type.name }}
        </RouterLink>
      </td>
      <td>
        <RouterLink
          :class="`link_${type.linkStyle}`"
          :to="type.href"
          disabled
        >
          {{ type.name }}
        </RouterLink>
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
export default {
  name: 'LinkPage',
};
</script>

<script setup lang="ts">
import { LinksStyles } from '@/components/app-link/utils/models';
import AppLink from '@/components/app-link/AppLink.vue';
import { RouteName } from '@/router/enum';

const links = [
  {
    linkStyle: LinksStyles.Style1,
    name: 'Icons',
    href: { name: RouteName.Icons },
  },
  {
    linkStyle: LinksStyles.Style3,
    name: 'Buttons',
    href: { name: RouteName.Buttons },
  },
  {
    linkStyle: LinksStyles.Style4,
    name: 'Checkboxes',
    href: { name: RouteName.Checkboxes },
  },
  {
    linkStyle: LinksStyles.Style5,
    name: 'Inputs',
    href: { name: RouteName.Inputs },
  },
  {
    linkStyle: LinksStyles.Style6,
    name: 'Yandex!',
    href: 'https://ya.ru',
  },
  {
    linkStyle: LinksStyles.Style7,
    name: 'Yandex!',
    href: 'https://ya.ru',
  },
  {
    linkStyle: LinksStyles.Style8,
    name: 'Yandex!',
    href: 'https://ya.ru',
  },
  {
    linkStyle: LinksStyles.Style9,
    name: 'Yandex!',
    href: 'https://ya.ru',
  },
  {
    linkStyle: LinksStyles.Style10,
    name: 'Yandex!',
    href: 'https://ya.ru',
  },
];
</script>

<style scoped>
table {
  margin: 20px;
}

td {
  padding: 15px 15px 15px 100px;
}

.header {
  padding-bottom: 30px;
}
</style>
