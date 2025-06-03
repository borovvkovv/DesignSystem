export enum BreakpointName {
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
  '2xl' = '2xl',
}

export type Breakpoint = { [key in BreakpointName]: string };

export const breakpoints: Breakpoint = {
  [BreakpointName.Md]: '744px',
  [BreakpointName.Lg]: '1140px',
  [BreakpointName.Xl]: '1360px',
  [BreakpointName['2xl']]: '1520px',
};
