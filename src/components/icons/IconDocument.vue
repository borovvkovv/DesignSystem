<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProps.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      :id="maskId"
      fill="#fff"
    >
      <path :d="svgProps.pathMask" />
    </mask>
    <path
      :d="svgProps.path"
      fill="currentColor"
      :mask="`url(#${maskId})`"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'IconDocument',
});
</script>

<script setup lang="ts">
import { createGuid } from '@/utils/guid';
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 20,
  },
});

const maskId = createGuid();

const svgProps = computed(() => {
  if (props.size <= 20) {
    return {
      viewBox: '0 0 20 20',
      path: 'M10 2v4h2V2h-2zm2 6h4V6h-4v2zm-2-2a2 2 0 0 0 2 2V6h-2zm4.5-2.5 1.414-1.414L14.5 3.5zm-2.207-2.207-1.414 1.414 1.414-1.414zm4.414 4.414 1.414-1.414-1.414 1.414zM16 17H4v4h12v-4zM5 18V2H1v16h4zM4 3h7.586v-4H4v4zm6.879-.293 2.207 2.207 2.828-2.828-2.207-2.207-2.828 2.828zm2.207 2.207 2.207 2.207 2.828-2.828-2.207-2.207-2.828 2.828zM15 6.414V18h4V6.414h-4zM11.586 3a1 1 0 0 1-.707-.293L13.707-.12A3 3 0 0 0 11.586-1v4zM4 17a1 1 0 0 1 1 1H1a3 3 0 0 0 3 3v-4zm12 4a3 3 0 0 0 3-3h-4a1 1 0 0 1 1-1v4zm-.707-13.879A1 1 0 0 1 15 6.414h4a3 3 0 0 0-.879-2.121L15.293 7.12zM5 2a1 1 0 0 1-1 1v-4a3 3 0 0 0-3 3h4z',
      pathMask:
        'M3 2a1 1 0 0 1 1-1h7.586a1 1 0 0 1 .707.293L14.5 3.5l2.207 2.207a1 1 0 0 1 .293.707V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2z',
    };
  }

  return {
    viewBox: '0 0 32 32',
    path: 'M16.5714 3.55556V10.3333H18.5714V3.55556H16.5714ZM18.5714 12.3333H25.4286V10.3333H18.5714V12.3333ZM16.5714 10.3333C16.5714 11.4379 17.4669 12.3333 18.5714 12.3333V10.3333V10.3333H16.5714ZM23.0714 5.88889L21.6644 7.31026L23.0714 5.88889ZM19.4351 2.28931L20.8421 0.867939L19.4351 2.28931ZM26.7035 9.48428L28.1105 8.06291L26.7035 9.48428ZM26 28H6V32H26V28ZM7 29V3H3V29H7ZM6 4H18.7316V0H6V4ZM18.0281 3.71069L21.6644 7.31026L24.4784 4.46751L20.8421 0.867939L18.0281 3.71069ZM21.6644 7.31026L25.2965 10.9057L28.1105 8.06291L24.4784 4.46751L21.6644 7.31026ZM25 10.195V29H29V10.195H25ZM18.7316 4C18.4682 4 18.2153 3.89603 18.0281 3.71069L20.8421 0.867939C20.2804 0.311904 19.522 0 18.7316 0V4ZM6 28C6.55228 28 7 28.4477 7 29H3C3 30.6569 4.34315 32 6 32V28ZM26 32C27.6569 32 29 30.6569 29 29H25C25 28.4477 25.4477 28 26 28V32ZM25.2965 10.9057C25.1068 10.7178 25 10.4619 25 10.195H29C29 9.39404 28.6797 8.62637 28.1105 8.06291L25.2965 10.9057ZM7 3C7 3.55229 6.55228 4 6 4V0C4.34315 0 3 1.34314 3 3H7Z',
    pathMask:
      'M5 3C5 2.44771 5.44772 2 6 2H18.7316C18.9951 2 19.2479 2.10397 19.4351 2.28931L23.0714 5.88889L26.7035 9.48428C26.8932 9.6721 27 9.92799 27 10.195V29C27 29.5523 26.5523 30 26 30H6C5.44772 30 5 29.5523 5 29V3Z',
  };
});
</script>
