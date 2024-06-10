import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACf3R945C3q3IEOAmbPg2DFGEVrKNFKyA",
  authDomain: "galeriareact-ddfd6.firebaseapp.com",
  projectId: "galeriareact-ddfd6",
  storageBucket: "galeriareact-ddfd6.appspot.com",
  messagingSenderId: "1025024009614",
  appId: "1:1025024009614:web:4d63a28a6e34b26859f0df",
  measurementId: "G-5D69T1CCV6"
  };

  
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp)

const BancoImage = "ImagensPublic";

export { storage, db, BancoImage };