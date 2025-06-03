import { Size } from '@/enums';

export default (style: Record<string, string>, size: Size | undefined) => {
  const styles = [style.icon];

  if (size === Size.XS) {
    styles.push(style.icon_xs);
  }

  return styles;
};
