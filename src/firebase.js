
import { initializeApp } from "firebase/app";
import { getFirestore,query,getDocs,collection,where,addDoc} from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export const submitTestimonialFirebase = async (payload) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "Testimonials"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    console.log(user)
    console.log(payload)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "Testimonials"), {
        uid: user.uid,
        description: payload.description,
        role: payload.role,
        userImage: user.photoURL,
        name:payload.name
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export {db, auth};