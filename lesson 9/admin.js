import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  doc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";

const db = getFirestore(app);

const postTitle = document.getElementById("postTitle");
const postQuery = query(collection(db, "PXL-JSI05"));
const output = document.getElementById("output");

onSnapshot(postQuery, (snapshot) => {
  output.innerHTML = "";
  snapshot.forEach((doc) => {
    const post = doc.data();
    const postId = doc.id;

    output.innerHTML += `
        <h2>${post.title}</h2>
        <img src="${post.image}" alt="">
        <p>${post.body}</p>
        <button onclick="deleteData('${doc.id}')">Delete</button>
        <button onclick="editData('${doc.id}')">Edit</button>
    `;
  });
});

window.editData = async function (id) {
  try {
    const newTitle = prompt("Nhập vào title mới");
    const newBody = prompt("Nhập vào body mới");
    await updateDoc(doc(db, "PXL-JSI05", id), {
      title: newTitle,
      body: newBody,
    });
    console.log("Edit Success");
  } catch (error) {
    console.error(error);
  }
};

window.deleteData = async function (id) {
  try {
    await deleteDoc(doc(db, "PXL-JSI05", id));
    console.log("Delete Success");
  } catch (error) {
    console.error(error);
  }
};

postTitle.addEventListener("submit", async (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;
  const img = document.getElementById("img").files[0];

  if (title.length == 0 || body.length == 0) {
    console.log("Enter title or body");
  } else {
    const storage = getStorage();
    const imgPath = "Titles/" + new Date().valueOf();
    const storageRef = ref(storage, imgPath);

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, img).then(async (snapshot) => {
      console.log("Uploaded a blob or file!");
      const url = await getDownloadURL(storageRef);
      try {
        const docRef = await addDoc(collection(db, "PXL-JSI05"), {
          title: title,
          body: body,
          image: url,
        });

        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  }
});
