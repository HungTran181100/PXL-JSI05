import { app } from "./firebase.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const db = getFirestore(app);

const querySnapshot = await getDocs(collection(db, "PXL-JSI05"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.data().body}`);
});
