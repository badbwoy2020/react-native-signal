import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_vvmsJ77wAosTotaKqevBrAPNAjo3Yv0",
  authDomain: "signal-clone-yt-3e82e.firebaseapp.com",
  projectId: "signal-clone-yt-3e82e",
  storageBucket: "signal-clone-yt-3e82e.appspot.com",
  messagingSenderId: "197656521337",
  appId: "1:197656521337:web:d038d1abe8cb2b857dc2a8",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
