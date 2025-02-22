export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1280px',
}

export const media = {
  mobile: `@media (max-width: ${breakpoints.tablet})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
}
