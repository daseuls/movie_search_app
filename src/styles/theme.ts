const flexbox = (direction = "row", justify = "center", align = "center") => {
  return `
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
  `;
};

const colors = {
  white: "#FFFFFF",
  black: "#191414",
  backGroundColor: "#FFFDF9",
  navTabColor: "#DAF1F9",
  textColor: "#DEFCF9",
};

export const theme = {
  colors,
  flexbox,
};
