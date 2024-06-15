import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { onAuthStateChanged, auth, firebaseConfig } from "./firebase.js";
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const postQuery = query(collection(db, "PXL-JSI05"));

const output = document.getElementById("showTitle");

onSnapshot(postQuery, (snapshot) => {
  output.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const postId = doc.id;

    output.innerHTML += `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        <button onclick="deleteData('${doc.id}')">Delete</button>
        <a href="details.html?id=${postId}">Read more</a>
    `;
  });
});

window.deleteData = async function (id) {
  try {
    await deleteDoc(doc(db, "PXL-JSI05", id));

    console.log("Delete Success");
  } catch (error) {
    console.error(error);
  }
};
