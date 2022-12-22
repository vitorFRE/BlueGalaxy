const size = {
  xs: '400px', // mobile pequeno
  sm: '600px', // mobile
  md: '900px', // tablets
  lg: '1280px', // laptops
  xl: '1440px', // desktop
  xxl: '1920px', // bigScreens
};

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
};
