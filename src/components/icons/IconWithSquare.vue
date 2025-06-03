<template>
  <svg
    :class="styles.sizeAndPosition"
    viewBox="0 0 160 160"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect
      :width="160"
      :height="160"
      fill="#0079C2"
      :class="styles.borderRadius"
    />

    <g :class="styles.center">
      <svg
        x="50%"
        y="50%"
        :width="70"
        :height="70"
      >
        <rect
          :width="70"
          :height="70"
          fill="none"
          stroke="#0079C2"
          stroke-width="0"
        />
        <AppIcon
          :icon="icon"
          :animate="isIconAnimate"
          :delay="animationIconDelay"
          width="100%"
          height="100%"
        />
      </svg>
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconWithSquare',
});
</script>

<script setup lang="ts">
import { computed, useCssModule } from 'vue';
import type { IconName } from '@/components/icons/models';
import AppIcon from '@/components/AppIcon.vue';
import type { AdaptiveObject, IconAdaptiveParameters } from '@/views/login/models';
import { BreakpointName } from '@/components/layout/utils/models';

const props = withDefaults(
  defineProps<{
    icon: IconName;
    isIconAnimate?: boolean;
    animationIconDelay?: number;
    isSquareAnimate?: boolean;
    iconPositionAndSize: AdaptiveObject<IconAdaptiveParameters>;
  }>(),
  {
    isIconAnimate: false,
    animationIconDelay: 0,
    isSquareAnimate: false,
  },
);

const defaultIconSize = 20;
const defaultPosition = 'auto';

const defaultIconPositionAndSize = computed(() => props.iconPositionAndSize.default);
const iconPositionAndSizeMd = computed(
  () => props.iconPositionAndSize[BreakpointName.Md] ?? defaultIconPositionAndSize.value,
);
const iconPositionAndSizeLg = computed(
  () => props.iconPositionAndSize[BreakpointName.Lg] ?? iconPositionAndSizeMd.value,
);
const iconPositionAndSizeXl = computed(
  () => props.iconPositionAndSize[BreakpointName.Xl] ?? iconPositionAndSizeLg.value,
);

const styles = useCssModule();
</script>

<style lang="scss" module>
@import '@/assets/styles/mediaQuery.module';

.sizeAndPosition {
  width: v-bind('`${defaultIconPositionAndSize?.size ?? defaultIconSize}px`');
  height: v-bind('`${defaultIconPositionAndSize?.size ?? defaultIconSize}px`');

  @include respond-to(md) {
    width: v-bind('`${iconPositionAndSizeMd?.size ?? defaultIconSize}px`');
    height: v-bind('`${iconPositionAndSizeMd?.size ?? defaultIconSize}px`');
  }

  @include respond-to(lg) {
    width: v-bind('`${iconPositionAndSizeLg?.size ?? defaultIconSize}px`');
    height: v-bind('`${iconPositionAndSizeLg?.size ?? defaultIconSize}px`');
  }

  @include respond-to(xl) {
    width: v-bind('`${iconPositionAndSizeXl?.size ?? defaultIconSize}px`');
    height: v-bind('`${iconPositionAndSizeXl?.size ?? defaultIconSize}px`');
  }

  top: v-bind(
    'defaultIconPositionAndSize?.position?.top ? `${defaultIconPositionAndSize?.position?.top}px` : defaultPosition'
  );
  right: v-bind(
    'defaultIconPositionAndSize?.position?.right ? `${defaultIconPositionAndSize?.position?.right}px` : defaultPosition'
  );
  bottom: v-bind(
    'defaultIconPositionAndSize?.position?.bottom ? `${defaultIconPositionAndSize?.position?.bottom}px` : defaultPosition'
  );
  left: v-bind(
    'defaultIconPositionAndSize?.position?.left ? `${defaultIconPositionAndSize?.position?.left}px` : defaultPosition'
  );

  @include respond-to(md) {
    top: v-bind('iconPositionAndSizeMd?.position?.top ? `${iconPositionAndSizeMd?.position?.top}px` : defaultPosition');
    right: v-bind(
      'iconPositionAndSizeMd?.position?.right ? `${iconPositionAndSizeMd?.position?.right}px` : defaultPosition'
    );
    bottom: v-bind(
      'iconPositionAndSizeMd?.position?.bottom ? `${iconPositionAndSizeMd?.position?.bottom}px` : defaultPosition'
    );
    left: v-bind(
      'iconPositionAndSizeMd?.position?.left ? `${iconPositionAndSizeMd?.position?.left}px` : defaultPosition'
    );
  }

  @include respond-to(lg) {
    top: v-bind('iconPositionAndSizeLg?.position?.top ? `${iconPositionAndSizeLg?.position?.top}px` : defaultPosition');
    right: v-bind(
      'iconPositionAndSizeLg?.position?.right ? `${iconPositionAndSizeLg?.position?.right}px` : defaultPosition'
    );
    bottom: v-bind(
      'iconPositionAndSizeLg?.position?.bottom ? `${iconPositionAndSizeLg?.position?.bottom}px` : defaultPosition'
    );
    left: v-bind(
      'iconPositionAndSizeLg?.position?.left ? `${iconPositionAndSizeLg?.position?.left}px` : defaultPosition'
    );
  }

  @include respond-to(xl) {
    top: v-bind('iconPositionAndSizeXl?.position?.top ? `${iconPositionAndSizeXl?.position?.top}px` : defaultPosition');
    right: v-bind(
      'iconPositionAndSizeXl?.position?.right ? `${iconPositionAndSizeXl?.position?.right}px` : defaultPosition'
    );
    bottom: v-bind(
      'iconPositionAndSizeXl?.position?.bottom ? `${iconPositionAndSizeXl?.position?.bottom}px` : defaultPosition'
    );
    left: v-bind(
      'iconPositionAndSizeXl?.position?.left ? `${iconPositionAndSizeXl?.position?.left}px` : defaultPosition'
    );
  }
}
.borderRadius {
  rx: 10px;
  ry: 10px;

  @include respond-to(md) {
    rx: 12px;
    ry: 12px;
  }

  @include respond-to(lg) {
    rx: 20px;
    ry: 20px;
  }
}

.center {
  transform: translate(-50%, -50%);
  transform-box: fill-box;
}
.circleAnimation {
  animation: circleAnimationFrames 1500ms linear 1 normal forwards 0.3s;
  transform-origin: center;
  transform: scale(0, 0);
}
@keyframes circleAnimationFrames {
  0% {
    transform: scale(0, 0);
  }
  33.333333% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
</style>
