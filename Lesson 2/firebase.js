// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC26GkPh7_17wBcRUVnjw7xaFDtVVKS5-Q",
  authDomain: "pxl-jsi05.firebaseapp.com",
  projectId: "pxl-jsi05",
  storageBucket: "pxl-jsi05.appspot.com",
  messagingSenderId: "172527617036",
  appId: "1:172527617036:web:97d7e891ba2eb5d32b1a29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const register = document.getElementById("register");
register.addEventListener("submit", (event) => {
  event.preventDefault();
  let userNameInput = document.getElementById("userName").value;
  let passwordInput = document.getElementById("pw").value;

  if (passwordInput.length < 6) {
    alert("mat khau can hon 6 ki tu");
  } else {
    createUserWithEmailAndPassword(auth, userNameInput, passwordInput)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }
});
