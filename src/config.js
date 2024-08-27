import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCYr7968pR264m7xrMWGiWbyHJIwewEhF4",
  authDomain: "react-test-c7ef4.firebaseapp.com",
  databaseURL: "https://react-test-c7ef4-default-rtdb.firebaseio.com/",
  projectId: "react-test-c7ef4",
  storageBucket: "react-test-c7ef4.appspot.com",
  messagingSenderId: "941205612863",
  appId: "1:941205612863:web:cc608b1f743c4f4d8b0b8a"
};

const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);

export default app;