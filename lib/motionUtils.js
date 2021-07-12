export const fadeInVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const hoverVariant = {
  whileHover: { scale: 1.1 },
};
// applied on a ul will cause the li to stagger animate
export const slideRightVaraint = {
  initial: { x: "-100vw" },
  animate: { x: 0 },
  exit: { x: "600px" },
};
