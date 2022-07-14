const modifyBorder = (img) => {
  if (!img.style.border) {
    img.style.border = "2px solid red";
    return;
  }
  img.style.border = "";
};
