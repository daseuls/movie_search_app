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
  mainColor: "#DB954",
};

export const theme = {
  colors,
  flexbox,
};
