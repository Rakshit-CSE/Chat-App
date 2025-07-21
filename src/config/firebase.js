import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from 'firebase/firestore';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: 'AIzaSyAyb0n-97ZJq_PT-6K_p1nrRuosqoqjRYE',
  authDomain: 'chatapp-614d1.firebaseapp.com',
  projectId: 'chatapp-614d1',
  storageBucket: 'chatapp-614d1.firebasestorage.app',
  messagingSenderId: '438178158093',
  appId: '1:438178158093:web:258168d2ce51255cf02744',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await setDoc(doc(db, 'users', user.uid), {
      id: user.uid,
      username: username.toLowerCase(),
      email,
      name: '',
      avatar: '',
      bio: 'Hey, There I am using Chat App',
      lastSeen: Date.now(),
    });
    await setDoc(doc(db, 'chats', user.uid), {
      chatsData: [],
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
    1;
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

const resetPass = async (email) => {
  if (!email) {
    toast.error('Enter your email');
    return null;
  }
  try {
    const userRef = collection(db, 'users');
    const q = query(userRef, where('email', '==', email));
    const querySnap = await getDocs(q);
    if (!querySnap.empty) {
      await sendPasswordResetEmail(auth, email);
      toast.success('Reset Email Sent');
    } else {
      toast.error("Email doesn't exists");
    }
  } catch (error) {
    console.error(error);
    toast.error(error.message);
  }
};

export { signup, login, logout, resetPass, auth, db };
