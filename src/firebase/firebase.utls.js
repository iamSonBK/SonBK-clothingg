import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAATXLpQQQJeuqa73hPSpwvFes1CH6WNgo",
    authDomain: "crwn-db-7c1c7.firebaseapp.com",
    databaseURL: "https://crwn-db-7c1c7.firebaseio.com",
    projectId: "crwn-db-7c1c7",
    storageBucket: "crwn-db-7c1c7.appspot.com",
    messagingSenderId: "785011782024",
    appId: "1:785011782024:web:6447db05d2f6f02f3b4a3d",
    measurementId: "G-FHTVCLV05K"
  }

  export const createUserProfileDocument = async(userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }catch(error){
        console.log('error creating user', error.message);
        
      }
    }    
    return userRef;  
  } 
  firebase.initializeApp(config);
  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => (auth.signInWithPopup(provider))

  export default firebase;