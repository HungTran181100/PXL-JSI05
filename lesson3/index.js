import {
  app,
  auth,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "./firebase.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user.email);
    const uid = user.uid;
    // ...
  }
});

const btnLogout = document.getElementById("logout");
btnLogout.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      window.location.href = "./Login.html";
    })
    .catch((error) => {
      // An error happened.
      console.error(error);
    });
});
