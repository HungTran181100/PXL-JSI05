import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANqhq6YAgtLcPxk110IMW4kZHFZlDeFDs",
  authDomain: "pxl-jsi05-demo.firebaseapp.com",
  projectId: "pxl-jsi05-demo",
  storageBucket: "pxl-jsi05-demo.appspot.com",
  messagingSenderId: "231382838574",
  appId: "1:231382838574:web:f5453a825a5ba3d62c5ebf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let body = document.getElementById("body").value;

  try {
    const docRef = await addDoc(collection(db, "PXL-JSI05"), {
      title: title,
      body: body,
    });
    console.log("Submit success!");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

const output = document.getElementById("output");
const querySnapshot = await getDocs(collection(db, "PXL-JSI05"));
querySnapshot.forEach((doc) => {
  output.innerHTML += `
        <h2>${doc.data().title}</h2>
        <p>${doc.data().body}</p>
    `;
});
