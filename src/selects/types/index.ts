import type { ISelectItem, SelectKeyType } from '@/components/selects/models';
import type { Ref } from 'vue';

export type SelectQueryResult<TKey extends SelectKeyType> = {
  isLoading: Ref<false> | Ref<true> | Ref<boolean>;
  options: Ref<ISelectItem<TKey>[] | undefined>;
  optionsSelected: Ref<ISelectItem<TKey> | undefined>;
  selectedItemValue: Ref<TKey | null>;
};
