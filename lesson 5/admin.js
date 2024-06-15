import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import {
  onAuthStateChanged,
  auth,
  firebaseConfig,
  signOut,
} from "./firebase.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.12.1/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "./Login.html";
  }
});

const form = document.getElementById("formTitle");

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
    getData();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
});

const output = document.getElementById("showTitle");

async function getData() {
  output.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "PXL-JSI05"));
  querySnapshot.forEach((doc) => {
    output.innerHTML += `
        <h2>${doc.data().title}</h2>
        <p>${doc.data().body}</p>
        <button onclick="deleteData('${doc.id}')">Delete</button>
    `;
  });
}

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

window.deleteData = async function (id) {
  try {
    await deleteDoc(doc(db, "PXL-JSI05", id));
    getData();
    console.log("Delete Success");
  } catch (error) {
    console.error(error);
  }
};

getData();
