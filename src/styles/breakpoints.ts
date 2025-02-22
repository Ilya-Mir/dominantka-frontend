export const breakpoints = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1600px',
}

export const media = {
  mobile: `@media (max-width: ${breakpoints.tablet})`,
  tablet: `@media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop})`,
  desktop: `@media (min-width: ${breakpoints.desktop})`,
}
