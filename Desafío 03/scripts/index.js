const respond = (respond, selectedPassword) => {
  if (respond === true) {
    document.querySelector(
      "#respond"
    ).innerHTML = `La ${selectedPassword} contraseña es correcta`;
    document.querySelector("#respond").style.color = "blue";
    setInterval(() => {
      document.querySelector("#respond").innerHTML = "";
    }, 2500);
  } else {
    document.querySelector("#respond").innerHTML =
      "La contraseña es incorrecta";
    document.querySelector("#respond").style.color = "red";
    setInterval(() => {
      document.querySelector("#respond").innerHTML = "";
    }, 2500);
  }
};

const checkDigits = () => {
  let firstDigit = document.querySelector("#firstDigit").value;
  let secondDigit = document.querySelector("#secondDigit").value;
  let thirdDigit = document.querySelector("#thirdDigit").value;
  let sum = firstDigit + secondDigit + thirdDigit;
  switch (sum) {
    case "911":
      respond(true, "primera");
      break;
    case "714":
      respond(true, "segunda");
      break;
    default:
      respond(false);
  }
};

/* Creo que se marea un poco los tiempos con el setInterval, a veces, creo */
