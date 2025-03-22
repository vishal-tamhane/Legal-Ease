import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  getDoc 
} from "firebase/firestore"; // ✅ Import Firestore functions

const firebaseConfig = {
    apiKey: "AIzaSyAbAj1UgMo4M7sQVCU9i9-B-5aaBnv4GU0",
  authDomain: "we-hack-project.firebaseapp.com",
  projectId: "we-hack-project",
  storageBucket: "we-hack-project.firebasestorage.app",
  messagingSenderId: "68521404991",
  appId: "1:68521404991:web:ef73b67c2177260993668a",
  measurementId: "G-NZDJLC3557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // ✅ Export Firestore instance

// Authentication functions
export const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

// ✅ Function to get user role from Firestore
export const getUserRole = async (userId) => {
  try {
    const userDocRef = doc(db, "users", userId);
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return userDoc.data().role; // Assuming Firestore has a "role" field
    } else {
      console.error("User not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};
