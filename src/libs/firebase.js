import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {

  // Galeria VitorVilela***
  // apiKey: "AIzaSyBrY1fRaxThXYYfXiCNP0FRkvQXkInqxEg",
  // authDomain: "vrvitorvilela.firebaseapp.com",
  // projectId: "vrvitorvilela",
  // storageBucket: "vrvitorvilela.appspot.com",
  // messagingSenderId: "610792541375",
  // appId: "1:610792541375:web:7a18eb48472c42a70cca0a",
  // measurementId: "G-2R70SM0Z4K"

  //Galeria React***
  apiKey: "AIzaSyACf3R945C3q3IEOAmbPg2DFGEVrKNFKyA",
  authDomain: "galeriareact-ddfd6.firebaseapp.com",
  projectId: "galeriareact-ddfd6",
  storageBucket: "galeriareact-ddfd6.appspot.com",
  messagingSenderId: "1025024009614",
  appId: "1:1025024009614:web:4d63a28a6e34b26859f0df",
  measurementId: "G-5D69T1CCV6"
  };

  
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);