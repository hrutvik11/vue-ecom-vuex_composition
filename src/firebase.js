import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAgPkIkQgia-PHqE6fezLtJvZh8JxAx6KI",
  authDomain: "vue-test-c9608.firebaseapp.com",
  databaseURL:
    "https://vue-test-c9608-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vue-test-c9608",
  storageBucket: "vue-test-c9608.appspot.com",
  messagingSenderId: "604702342509",
  appId: "1:604702342509:web:88dddf519f3f1c3f79ae64",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db };
