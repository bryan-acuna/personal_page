/** True when the user has requested reduced motion at the OS level. */
export const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
