import { ref, type MaybeRef, watchEffect, unref, getCurrentScope, onScopeDispose, type Ref, computed } from 'vue';
import { BreakpointName, breakpoints } from '@/components/layout/utils/models';

export function useMediaQuery(query: MaybeRef<string>) {
  let mediaQuery: MediaQueryList | undefined;
  const matches = ref(false);

  const handler = (event: MediaQueryListEvent) => {
    matches.value = event.matches;
  };

  const cleanup = () => {
    if (!mediaQuery) return;
    mediaQuery.removeEventListener('change', handler);
  };

  const stopWatch = watchEffect(() => {
    cleanup();
    mediaQuery = window.matchMedia(unref(query));
    mediaQuery.addEventListener('change', handler);
    matches.value = mediaQuery.matches;
  });

  tryOnScopeDispose(() => {
    stopWatch();
    cleanup();
    mediaQuery = undefined;
  });

  return matches;
}

export function increaseWithUnit(target: string, delta: number): string | number {
  if (typeof target === 'number') return target + delta;
  const value = target.match(/^-?[0-9]+\.?[0-9]*/)?.[0] || '';
  const unit = target.slice(value.length);
  const result = Number.parseFloat(value) + delta;

  if (Number.isNaN(result)) {
    return target;
  }

  return result + unit;
}

export function useBreakpoints() {
  function getValue(breakpointName: BreakpointName, delta?: number) {
    let breakpointValue: string | number = breakpoints[breakpointName];

    if (delta != null) {
      breakpointValue = increaseWithUnit(breakpointValue, delta);
    }

    if (typeof breakpointValue === 'number') breakpointValue = `${breakpointValue}px`;

    return breakpointValue;
  }

  function match(query: string): boolean {
    return window.matchMedia(query).matches;
  }

  const greaterOrEqual = (breakpointName: BreakpointName) => {
    return useMediaQuery(`(min-width: ${getValue(breakpointName)})`);
  };

  const shortcutMethods = Object.keys(breakpoints).reduce((shortcuts, breakpointName) => {
    Object.defineProperty(shortcuts, breakpointName, {
      get: () => greaterOrEqual(breakpointName as BreakpointName),
      enumerable: true,
      configurable: true,
    });
    return shortcuts;
  }, {} as Record<BreakpointName, Ref<boolean>>);

  return Object.assign(shortcutMethods, {
    greater(breakpointName: BreakpointName) {
      return useMediaQuery(`(min-width: ${getValue(breakpointName, 0.1)})`);
    },
    greaterOrEqual,
    smaller(breakpointName: BreakpointName) {
      return useMediaQuery(`(max-width: ${getValue(breakpointName, -0.1)})`);
    },
    smallerOrEqual(breakpointName: BreakpointName) {
      return useMediaQuery(`(max-width: ${getValue(breakpointName)})`);
    },
    between(breakpointNameMin: BreakpointName, breakpointNameMax: BreakpointName) {
      return useMediaQuery(
        `(min-width: ${getValue(breakpointNameMin)}) and (max-width: ${getValue(breakpointNameMax, -0.1)})`,
      );
    },
    isGreater(breakpointName: BreakpointName) {
      return match(`(min-width: ${getValue(breakpointName, 0.1)})`);
    },
    isGreaterOrEqual(breakpointName: BreakpointName) {
      return match(`(min-width: ${getValue(breakpointName)})`);
    },
    isSmaller(breakpointName: BreakpointName) {
      return match(`(max-width: ${getValue(breakpointName, -0.1)})`);
    },
    isSmallerOrEqual(breakpointName: BreakpointName) {
      return match(`(max-width: ${getValue(breakpointName)})`);
    },
    isInBetween(breakpointNameMin: BreakpointName, breakpointNameMax: BreakpointName) {
      return match(`(min-width: ${getValue(breakpointNameMin)}) and (max-width: ${getValue(breakpointNameMax, -0.1)})`);
    },
    current() {
      const points = Object.keys(breakpoints).map(
        (breakpointName) => [breakpointName, greaterOrEqual(breakpointName as BreakpointName)] as const,
      );
      return computed(() =>
        points
          .filter(([, isWindowWiderBreakpoint]) => isWindowWiderBreakpoint.value)
          .map(([breakpointName]) => breakpointName),
      );
    },
  });
}

export function tryOnScopeDispose(fn: () => void) {
  if (getCurrentScope()) {
    onScopeDispose(fn);
    return true;
  }
  return false;
}
