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
  backGroundColor: "#FFFDF9",
  navTabColor: "#DAF1F9",
  textColor: "#DEFCF9",
  heartIconColor: "#EDA1C1",
  movieItemBackGroundColor: "#ffefef",
  dropDownItemBackGroundColor: "#f6e5f5",
};

export const theme = {
  colors,
  flexbox,
};
