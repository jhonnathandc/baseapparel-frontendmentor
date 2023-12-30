const btnForm = document.querySelector(".btn-form");

function handleClick(e) {
  e.preventDefault();
  const form = document.querySelector(".form");

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  const inputEmail = document.getElementById("email-address");

  if (!validateEmail(inputEmail.value)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
}

btnForm.addEventListener("click", handleClick);
