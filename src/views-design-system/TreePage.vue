<template>
  <div class="m-20">
    <BaseTreeNode
      v-for="i in [...Array(nodesCount).keys()]"
      :key="i"
      :is-last-node="isLastNode(i)"
      :icon="IconName.IconParentNode"
      is-relative-nodes-connected
    >
      <template #title>
        <span class="text-size-2">Соседние узлы соединены</span>
      </template>
      <template #content>
        <span class="text-size-5 text-grey-1">Содержимое</span>
      </template>
      <template #childNodes>
        <BaseTreeNode
          v-for="j in [...Array(nodesCount).keys()]"
          :key="j"
          is-child-node
          :is-last-node="isLastNode(j)"
          :icon="IconName.IconChildNode"
        >
          <template #title>
            <span class="text-size-3">Соседние узлы разъединены</span>
          </template>
          <template #childNodes>
            <BaseTreeNode
              is-child-node
              is-important
              :icon="IconName.IconChildNode"
            >
              <template #title>
                <span>Узел помечен как важный</span>
              </template>
              <template #childNodes>
                <BaseTreeNode
                  is-child-node
                  is-last-node
                  :icon="IconName.IconChildNode"
                >
                  <template #title>
                    <span>Узел пустой</span>
                  </template>
                </BaseTreeNode>
              </template>
            </BaseTreeNode>
            <BaseTreeNode
              is-child-node
              :icon="IconName.IconChildNode"
              is-disabled
            >
              <template #title>
                <span>Узел недоступен</span>
              </template>
            </BaseTreeNode>
            <BaseTreeNode
              is-child-node
              is-last-node
              :icon="IconName.IconChildNode"
            >
              <template #title>
                <span>Узел пустой</span>
              </template>
            </BaseTreeNode>
          </template>
        </BaseTreeNode>
      </template>
    </BaseTreeNode>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TreePage',
});
</script>

<script setup lang="ts">
import { IconName } from '@/components/icons/models';
import BaseTreeNode from '@/components/tree/BaseTreeNode.vue';

const nodesCount = 3;
const isLastNode = (counter: number) => counter === nodesCount - 1;
</script>
