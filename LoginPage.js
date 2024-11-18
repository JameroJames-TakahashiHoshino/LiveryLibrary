import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAxYIXL_LvS8hMSWnG5nA5Saz6zis9Rg90",
  authDomain: "login-1a552.firebaseapp.com",
  projectId: "login-1a552",
  storageBucket: "login-1a552.appspot.com",
  messagingSenderId: "420126657642",
  appId: "1:420126657642:web:d6d4e3825ed3a7cfd5ce13"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
auth.languageCode = 'en';



// Google Authentication
const googleProvider = new GoogleAuthProvider();
const googleLogin = document.getElementById("google-buttonlogin");
googleLogin.addEventListener("click", function() {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user);
      window.location.href = ""; // Add the correct redirect URL here
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Google login error:", errorCode, errorMessage);
    });
});

// Facebook Authentication
const facebookProvider = new FacebookAuthProvider();

async function facebookAuthClicked() {
  try {
    const user = await FacebookAuth();
    console.log(user);
    // Add code to handle successful login (e.g., redirect)
  } catch (error) {
    console.error("Error during Facebook authentication:", error);
  }
}

async function FacebookAuth() {
  const fbAuth = await signInWithPopup(auth, facebookProvider);
  return fbAuth.user;
}

// Add event listener for Facebook login button
document.getElementById("facebook-buttonlogin").addEventListener("click", facebookAuthClicked);