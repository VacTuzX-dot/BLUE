const button = document.querySelector("button");
const container = document.querySelector("#container");
const alertContainer = document.querySelector("#alert-container");

button.addEventListener("click", () => {
  const alertBox = document.createElement("div");
  alertBox.classList.add("alert");
  alertBox.innerHTML = "You are not alone : )";
  alertContainer.appendChild(alertBox);

  setTimeout(() => {
    alertBox.classList.add("show");
  }, 10);

  setTimeout(() => {
    alertBox.classList.remove("show");
    alertBox.classList.add("hide");
    setTimeout(() => {
      alertBox.remove();
    }, 400);
  }, 1500);
});

setTimeout(() => {
  const moreInfo = document.querySelector("#more-info");
  moreInfo.classList.add("show");
}, 3000);