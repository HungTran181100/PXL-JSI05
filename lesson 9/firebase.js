import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyANqhq6YAgtLcPxk110IMW4kZHFZlDeFDs",
  authDomain: "pxl-jsi05-demo.firebaseapp.com",
  projectId: "pxl-jsi05-demo",
  storageBucket: "pxl-jsi05-demo.appspot.com",
  messagingSenderId: "231382838574",
  appId: "1:231382838574:web:f5453a825a5ba3d62c5ebf",
};

const app = initializeApp(firebaseConfig);

export { app };
