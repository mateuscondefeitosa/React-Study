import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-4Vz-FM2Qul-vHuqNtMs5BiOHzKLqYO0",
    authDomain: "crwn-clothing-project-db-9f849.firebaseapp.com",
    projectId: "crwn-clothing-project-db-9f849",
    storageBucket: "crwn-clothing-project-db-9f849.appspot.com",
    messagingSenderId: "943954327177",
    appId: "1:943954327177:web:18cf665eee71dbe961b858"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
  
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
}); 


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)



