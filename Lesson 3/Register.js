import {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
} from "./firebase.js";

const formRegister = document.getElementById("formRegister");
formRegister.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;

  if (email.length == 0 || password.length == 0) {
    alert("Enter your email or password");
  } else {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        window.location.href = "./Login.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
  formRegister.reset();
});
