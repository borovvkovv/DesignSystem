<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="svgProp.viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      :d="svgProp.path.d1"
      fill="#C4EAFF"
    />
    <rect
      :x="svgProp.rect1.x"
      :y="svgProp.rect1.y"
      :width="svgProp.rect1.width"
      :height="svgProp.rect1.height"
      rx="5"
      stroke="#0079C2"
      stroke-width="2"
    />
    <rect
      :x="svgProp.rect2.x"
      :y="svgProp.rect2.y"
      :width="svgProp.rect2.width"
      :height="svgProp.rect2.height"
      fill="#C4EAFF"
    />
    <rect
      :x="svgProp.rect3.x"
      :y="svgProp.rect3.y"
      :width="svgProp.rect3.width"
      :height="svgProp.rect3.height"
      fill="#C4EAFF"
    />
    <rect
      :x="svgProp.rect4.x"
      :y="svgProp.rect4.y"
      :width="svgProp.rect4.width"
      :height="svgProp.rect4.height"
      stroke="#0079C2"
      stroke-width="2"
    />
    <rect
      :x="svgProp.rect5.x"
      :y="svgProp.rect5.y"
      :width="svgProp.rect5.width"
      :height="svgProp.rect5.height"
      stroke="#0079C2"
      stroke-width="2"
    />
    <rect
      :x="svgProp.rect6.x"
      :y="svgProp.rect6.y"
      :width="svgProp.rect6.width"
      :height="svgProp.rect6.height"
      stroke="#0079C2"
      stroke-width="2"
    />
    <line
      :x1="svgProp.line1.x1"
      :y1="svgProp.line1.y1"
      :x2="svgProp.line1.x2"
      :y2="svgProp.line1.y2"
      stroke="#0079C2"
      stroke-width="2"
    />
    <line
      :x1="svgProp.line2.x1"
      :y1="svgProp.line2.y1"
      :x2="svgProp.line2.x2"
      :y2="svgProp.line2.y2"
      stroke="#0079C2"
      stroke-width="2"
    />
    <line
      :x1="svgProp.line3.x1"
      :y1="svgProp.line3.y1"
      :x2="svgProp.line3.x2"
      :y2="svgProp.line3.y2"
      stroke="#0079C2"
      stroke-width="2"
    />
    <path
      :d="svgProp.path.d2"
      fill="#C4EAFF"
      stroke="#0079C2"
      stroke-width="2"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconEquipmentColor',
});
</script>

<script setup lang="ts">
import { computed } from 'vue';

const prop = defineProps({
  size: {
    type: Number,
    required: false,
    default: 48,
  },
});

const svgProp = computed(() => {
  if (prop.size <= 48) {
    return {
      viewBox: '0 0 48 48',
      path: {
        d1: 'M36 13.0415C36 11.9369 35.1046 11.0415 34 11.0415L8.13351 11.0415C7.71626 11.0415 7.45327 10.5874 7.65739 10.2235C8.61889 8.50926 9.46546 6.99994 10.9625 6.99994L36.8386 6.99994C37.2458 6.99994 37.6348 7.09991 37.9918 7.28185C38.1033 7.33867 38.216 7.3936 38.332 7.44046C39.9187 8.08138 41 9.35591 41 10.8236L41 40.6477C41 42.1642 39.4921 44.144 37.873 45.1395C36.9321 45.718 36 44.8738 36 43.7692L36 13.0415Z',
        d2: 'M25.5388 32.0591L25.7159 33.745L27.1058 32.7744C27.315 32.6284 27.7693 32.3657 28.2794 32.1252C28.4357 32.0515 28.5852 31.9857 28.7246 31.9287C28.8345 32.2431 28.9423 32.5229 29.0453 32.781C29.1049 32.9304 29.1606 33.067 29.2131 33.1958C29.3397 33.5063 29.4477 33.7715 29.5481 34.061C29.808 34.8113 30 35.6909 30 37.4767C30 38.3088 29.5183 39.1653 28.5302 39.8553C27.5455 40.5429 26.1316 41 24.5224 41C22.9132 41 21.4993 40.5429 20.5146 39.8553C19.5265 39.1653 19.0448 38.3088 19.0448 37.4767V37.4119L19.0364 37.3476C18.8075 35.589 19.6766 33.4882 20.9245 31.2691C21.341 30.5284 21.774 29.8166 22.1974 29.1205C22.3985 28.7899 22.5974 28.4629 22.7914 28.138C23.0375 27.7258 23.277 27.3149 23.4947 26.913C23.6254 27.1056 23.7626 27.3177 23.9016 27.5469C24.6221 28.7352 25.357 30.3294 25.5388 32.0591Z',
      },
      rect1: {
        x: 8,
        y: 7,
        width: 32,
        height: 38,
      },
      rect2: {
        x: 29,
        y: 2,
        width: 5,
        height: 6,
      },
      rect3: {
        x: 14,
        y: 2,
        width: 6,
        height: 6,
      },
      rect4: {
        x: 14,
        y: 3,
        width: 5,
        height: 4,
      },
      rect5: {
        x: 29,
        y: 3,
        width: 5,
        height: 4,
      },
      rect6: {
        x: 14,
        y: 15,
        width: 20,
        height: 5,
      },
      line1: {
        x1: 23.9286,
        y1: 14.9642,
        x2: 23.9286,
        y2: 20.7142,
      },
      line2: {
        x1: 19,
        y1: 14.9642,
        x2: 19,
        y2: 20.7142,
      },
      line3: {
        x1: 28.8571,
        y1: 14.9642,
        x2: 28.8571,
        y2: 20.7142,
      },
    };
  }

  return {
    viewBox: '0 0 64 64',
    path: {
      d1: 'M53 15.0311C53 12.2525 50.7614 10 48 10C48 10 48 10 48 10C48 10 48 10.0001 48 10.0001C47.9927 10 47.9855 10 47.9782 10L14.7987 10C13.2642 10 12.7567 10.9545 12.0923 12.2041C11.686 12.9683 12.2389 14 13.1044 14L46 14C47.1046 14 48 14.8954 48 16L48 58C48 59.1046 48.9356 59.9549 49.8715 59.3683C51.4911 58.3531 53 56.2694 53 54.2733L53 15.0311Z',
      d2: 'M33.5079 41.6951L33.6849 43.3851L35.0764 42.4098C35.3479 42.2196 35.9192 41.8889 36.5544 41.5883C36.8333 41.4564 37.0993 41.3424 37.3387 41.2516C37.4996 41.7308 37.6578 42.1456 37.808 42.5234C37.8798 42.7038 37.9474 42.8704 38.0116 43.0285C38.1686 43.4149 38.305 43.7509 38.4307 44.1149C38.7611 45.0719 39 46.1859 39 48.4124C39 49.5401 38.3492 50.6627 37.091 51.5445C35.8359 52.4242 34.0488 53 32.0276 53C30.0063 53 28.2193 52.4242 26.9641 51.5445C25.706 50.6627 25.0551 49.5401 25.0551 48.4124V48.3478L25.0468 48.2838C24.7538 46.025 25.8641 43.3668 27.399 40.6275C27.9135 39.7091 28.4501 38.8237 28.9724 37.9619C29.2193 37.5544 29.4631 37.1522 29.6998 36.7543C30.0717 36.1291 30.4283 35.5112 30.7368 34.917C30.9612 35.2347 31.2082 35.606 31.46 36.0228C32.3564 37.5065 33.2791 39.5102 33.5079 41.6951Z',
    },
    rect1: {
      x: 12,
      y: 10,
      width: 40,
      height: 49,
    },
    rect2: {
      x: 40,
      y: 4,
      width: 6,
      height: 7,
    },
    rect3: {
      x: 20,
      y: 4,
      width: 6,
      height: 7,
    },
    rect4: {
      x: 19,
      y: 5,
      width: 6,
      height: 5,
    },
    rect5: {
      x: 39,
      y: 5,
      width: 6,
      height: 5,
    },
    rect6: {
      x: 20,
      y: 21,
      width: 24,
      height: 7,
    },
    line1: {
      x1: 32,
      y1: 21,
      x2: 32,
      y2: 28,
    },
    line2: {
      x1: 26,
      y1: 21,
      x2: 26,
      y2: 28,
    },
    line3: {
      x1: 38,
      y1: 21,
      x2: 38,
      y2: 28,
    },
  };
});
</script>