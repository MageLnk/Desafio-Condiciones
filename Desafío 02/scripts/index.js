let firstStickerNumberGroup = 0;
let secondStickerNumberGroup = 0;
let thirdStickerNumberGroup = 0;

const handleStickerSum = (firstValue, secondValue, thirdValue) => {
  let sum = firstValue + secondValue + thirdValue;
  if (sum <= 10) {
    document.querySelector(
      "#stickerApproval"
    ).innerHTML = `Llevas ${sum} stickers hasta ahora. ${firstValue} del primer grupo, ${secondValue} del segundo grupo y ${thirdValue} del tercer grupo`;
  } else {
    document.querySelector(
      "#stickerApproval"
    ).innerHTML = `¡Llevas demasiados stickers!`;
  }
};

const numberValidation = (firstValue, secondValue, thirdValue) => {
  let firstCheck = +firstValue;
  let secondCheck = +secondValue;
  let thirdCheck = +thirdValue;
  if (!firstCheck || !secondCheck || !thirdCheck) {
    console.log("Dentro del if");
    document.querySelector("#stickerApproval").innerHTML =
      "Por favor, ingrese solo números";
    return;
  }
  handleStickerSum(firstCheck, secondCheck, thirdCheck);
};

const handleStickerCheck = () => {
  firstStickerNumberGroup = document.querySelector(
    "#firstQuantityStickerInput"
  ).value;
  secondStickerNumberGroup = document.querySelector(
    "#secondQuantityStickerInput"
  ).value;
  thirdStickerNumberGroup = document.querySelector(
    "#thirdQuantityStickerInput"
  ).value;
  console.log(firstStickerNumberGroup);

  numberValidation(
    firstStickerNumberGroup,
    secondStickerNumberGroup,
    thirdStickerNumberGroup
  );
};
