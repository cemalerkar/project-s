import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDXKUfBfQSTJV9TbQm90pmpRgtcwb5CNQ0",
  authDomain: "project-s-4f084.firebaseapp.com",
  projectId: "project-s-4f084",
  storageBucket: "project-s-4f084.appspot.com",
  messagingSenderId: "448209741285",
  appId: "1:448209741285:web:2183b48c9b40224b3afb0c",
  measurementId: "G-FVXG9GDR1F",
  databaseURL:
    "https://project-s-4f084-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const database = getDatabase(app);

const registerButton = document.getElementById("register-btn");
const loginButton = document.getElementById("login-btn");

registerButton.onclick = function () {
  const email = document.querySelector("#register-mail").value;
  const password = document.querySelector("#register-pass").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Account Successfully Created!");
      location.reload();
    })
    .catch((error) => {
      alert("Lütfen bilgilerinizi kontrol ediniz.");
    });
};

const addDataButton = document.getElementById("addData-button");
addDataButton.onclick = function () {
  const dataname = document.querySelector("#name").value;

  localStorage.setItem("name", dataname);
  const user = auth.currentUser;
  const userId = localStorage.getItem("uid");
  const db = getDatabase();
  set(ref(db, "users/" + userId), {
    name: dataname,
  });
  reload10s();
};
function reload10s() {
  setTimeout(() => {
    location.reload();
  }, 10000);
}
loginButton.onclick = function () {
  const email = document.querySelector("#login-mail").value;
  const password = document.querySelector("#login-pass").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Succesfully Logged In!");
      localStorage.setItem("uid", user.uid);

      const db = getDatabase();
      const starCountRef = ref(db, "users/" + user.uid);
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val().name;
        console.log(data);
        localStorage.setItem("name", data);
      });

      reload10s();
    })
    .catch((error) => {
      alert(error.code);
    });
};

const logoutButton = document.getElementById("navbar-logout");
logoutButton.onclick = function () {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      localStorage.setItem("uid", "");
      window.open("project-s/login.html", "_self");
    })
    .catch((error) => {
      // An error happened.
    });
};

var provider = new GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

var registerWithGoogle = document.querySelector("#reg-goog");
var loginWithGoogle = document.querySelector("#log-goog");

loginWithGoogle.onclick = function () {
  signInGoogle();
};
registerWithGoogle.onclick = function () {
  signInGoogle();
};
function signInGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      const mail = result.user.email;
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

const Rcontainer = document.getElementById("container");
const container = document.getElementById("login-ct");
const notice = document.getElementById("notice");
const adData = document.getElementById("addData");
const navbarRegister = document.getElementById("navr");
const navbarLogin = document.getElementById("navl");
const navbarName = document.getElementById("navbar-name");
const navbarLogout = document.getElementById("navbar-logout");

if (localStorage.getItem("uid") == "" || localStorage.getItem("uid") === null) {
  localStorage.setItem("email", "");
  localStorage.setItem("name", "");
  const auth = getAuth();
  signOut(auth)
    .then(() => {})
    .catch((error) => {});
} else {
  const user = auth.currentUser;
  const userId = localStorage.getItem("uid");
  container.style.display = "none";
  notice.style.display = "none";
  navbarLogin.remove();
  navbarRegister.remove();
  adData.style.display = "";
  navbarName.style.display = "";
  navbarLogout.style.display = "";
  if (localStorage.getItem("name") === "") {
    navbarName.innerHTML = "Unknown User";
  } else {
    navbarName.innerHTML = localStorage.getItem("name");
    adData.style.display = "none";
    Rcontainer.style.display = "none";
  }
}
