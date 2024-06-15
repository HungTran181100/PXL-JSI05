import {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "./firebase.js";

const formLogin = document.getElementById("formLogin");
formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  let email = document.getElementById("emailInput").value;
  let password = document.getElementById("passwordInput").value;

  if (email.length == 0 || password.length == 0) {
    alert("Enter your email or password");
  } else {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.location.href = "./admin.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
});
