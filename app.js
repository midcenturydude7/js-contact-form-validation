const emailReg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon"),
  confirm = classes("confirm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  validateEmail(
    email,
    1,
    "You have entered an invalid email address. Please try again"
  );
  engine(password, 2, "Password cannot be blank");
});

const engine = (id, num, message) => {
  if (id.value.trim() === "") {
    errorMsg[num].innerHTML = message;
    failureIcon[num].style.opacity = "1";
    successIcon[num].style.opacity = "0";
    return false;
  } else {
    errorMsg[num].innerHTML = "";
    failureIcon[num].style.opacity = "0";
    successIcon[num].style.opacity = "1";
    confirm[num].style.opacity = "1";
    username.innerHTML = username.placeholder;
  }
};

const validateEmail = (email, num, message) => {
  const mailformat = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.value.match(mailformat)) {
    errorMsg[num].innerHTML = "";
    failureIcon[num].style.opacity = "0";
    successIcon[num].style.opacity = "1";
  } else {
    errorMsg[num].innerHTML = message;
    failureIcon[num].style.opacity = "1";
    successIcon[num].style.opacity = "0";
  }
};

function validate(e) {
  let target = e.target;

  if (target.name === "email") {
    if (emailReg.test(target.value)) {
      target.classList.add("valid");
      target.classList.remove("invalid");
    } else {
      target.classList.add("invalid");
      target.classList.remove("valid");
    }
  }
}

email.addEventListener("input", validate);

console.log(username.placeholder);
