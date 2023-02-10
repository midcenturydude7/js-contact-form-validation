const id = (id) => document.getElementById(id);
const classes = (classes) => document.getElementsByClassName(classes);

const username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");
// confirm = classes("confirm");

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

// const msgConfirm = (num, message) => {
//   if (!errorMsg[num].innerHTML !== message) {
//     confirm.style.opacity = "1";
//   }
// };
