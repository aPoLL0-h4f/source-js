window.addEventListener("load", function () {
  const passwordInput = document.querySelector(".input");
  passwordInput.addEventListener("input", function (e) {
    const value = e.target.value;
    const checkLengthClass = e.target.parentNode.querySelector(".check-length");
    const checkUpperClass = e.target.parentNode.querySelector(".check-upper");
    const checkNumberClass = e.target.parentNode.querySelector(".check-number");
    const checkSpecialClass =
      e.target.parentNode.querySelector(".check-special");
    const checkItem = e.target.parentNode.querySelectorAll(".check-item");
    if (value === "") {
      [...checkItem].forEach((item) => {
        item.classList.remove("unactive");
        item.classList.remove("active");
      });
      return;
    }

    if (value.length < 8) {
      checkLengthClass.classList.add("unactive");
      checkLengthClass.classList.remove("active");
    } else {
      checkLengthClass.classList.add("active");
      checkLengthClass.classList.remove("unactive");
    }
    passwordInputVadilation(checkUpperClass, value, /[A-Z]/);
    passwordInputVadilation(checkNumberClass, value, /[0-9]/);
    passwordInputVadilation(checkSpecialClass, value, /[~!@#$%^&*(){}[\]]/);
  });

  function passwordInputVadilation(selector, value, regex) {
    if (regex.test(value)) {
      selector.classList.add("active");
      selector.classList.remove("unactive");
    } else {
      selector.classList.add("unactive");
      selector.classList.remove("active");
    }
  }
});
