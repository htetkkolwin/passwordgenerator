const inputpassword = document.querySelector("#password");
const eyeicon = document.querySelector(".eyeicon");
const strengthMessage = document.querySelector("#message");
// pasword strength
inputpassword.addEventListener("input", (e) => {
  let passwordValue = e.target.value;
  let passwordLength = passwordValue.length;
  let messageValue = "";
  if (passwordLength === 0) {
    messageValue;
  } else if (passwordLength < 6) {
    messageValue = "weak";
  } else if (passwordLength < 8) {
    messageValue = "middle";
  } else {
    messageValue = "strong";
  }
  strengthMessage.textContent = messageValue;
});
// eyeicon
eyeicon.addEventListener("click", () => {
  //    get input's attribute
  const inputType = inputpassword.getAttribute("type");
  if (inputType === "text") {
    inputpassword.setAttribute("type", "password");
  } else {
    inputpassword.setAttribute("type", "text");
  }
});
