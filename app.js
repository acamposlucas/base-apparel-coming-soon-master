const inputContainer = document.querySelector(".input-container");
const input = document.querySelector(".input-container__input");
const span = document.querySelector("#message");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = input.value;
  if (!validateEmail(email)) {
    input.setAttribute("aria-invalid", true);
    inputContainer.classList.add("input-container--error");
    span.textContent = `Please provide a valid email  `;
    span.style.visibility = "visible";
  } else {
    span.textContent = `Thank you for signing up!`;
    span.style.visibility = "visible";
  }
  form.reset();
});

function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(email)) return false;
  return true;
}
