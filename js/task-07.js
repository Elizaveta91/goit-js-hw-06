const nameRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

nameRef.addEventListener("input", onChangeInput);

function onChangeInput(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}