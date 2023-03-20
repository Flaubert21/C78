import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
  apiKey: "AIzaSyA4sXunmA7FB2B6yHZY_xj6Ywio1J0w7M8",
  authDomain: "c-77-ea169.firebaseapp.com",
  projectId: "c-77-ea169",
  storageBucket: "c-77-ea169.appspot.com",
  messagingSenderId: "1044656032782",
  appId: "1:1044656032782:web:c43256f20d7791ac07c05f"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
