
const nameRef = document.querySelector("#validation-input");

nameRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    event.currentTarget.value.length ===
    Number(nameRef.getAttribute("data-length"))
  ) {
    nameRef.classList.add("valid");
    nameRef.classList.remove("invalid");
    return;
  }
  nameRef.classList.add("invalid");
}