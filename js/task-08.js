
const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const { elements: { email, password } } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Усі поля мають бути заповнені!");
  }
  else {
    console.log({ "email": email.value, "password": password.value });
    event.currentTarget.reset();
    console.log(formData);
  }
}