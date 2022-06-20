const inputContainer = document.querySelector(".input-container");
const input = document.querySelector(".input-container__input");
const span = document.querySelector("#error-message");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!input.value) {
    input.setAttribute("aria-invalid", true);
    inputContainer.classList.add("input-container--error");
    span.style.visibility = "visible";
  }
});
