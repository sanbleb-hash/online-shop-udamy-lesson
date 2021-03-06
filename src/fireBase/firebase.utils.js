import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfElXAmHMtgBRpbPJBddxWqLu5H1kTLwQ",
    authDomain: "crown-e-shop-c7df7.firebaseapp.com",
    projectId: "crown-e-shop-c7df7",
    storageBucket: "crown-e-shop-c7df7.appspot.com",
    messagingSenderId: "55055478215",
    appId: "1:55055478215:web:d956d8cc09d23b36f23de2"
  };

  export const createUserProfileDocument =async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {

      const { displayName, email } = userAuth;
       const createdAt = new Date();

       try {
         await userRef.set({
           displayName,
           email,
           createdAt, 
           ...additionalData
         })         
       } catch (error) {
        
        console.log('unable creating user', error.message);
        
       };
      };
      return userRef;

  }

 firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
 
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;
