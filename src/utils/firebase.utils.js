import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth"
import {
    doc,
    getDoc,
    setDoc,
    getFirestore,
    collection,
    writeBatch,
} from "firebase/firestore"


// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlFjsiJZbyS7ihXhGWpMqME9u-Ffb0Dpk",
    authDomain: "crwn-db-48e6a.firebaseapp.com",
    projectId: "crwn-db-48e6a",
    storageBucket: "crwn-db-48e6a.appspot.com",
    messagingSenderId: "522978145161",
    appId: "1:522978145161:web:e4e77de7c25fcc55022758"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account",
    'login_hint': 'user@example',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

const db = getFirestore(firebaseApp);

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.map((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef);
    });

}

export const createUserDocumentFromAuth = async (userAuth, otherInformation = {}) => {
    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (userSnapshot.exists()) return userDocRef;

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...otherInformation
        });
    } catch (err) {
        console.log(`failed to create a user`, err.message);
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async ({ email, password }) => {
    if (!email || !password) {
        console.log('failed to register a user');
        return;
    }

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async ({ email, password }) => {
    if (!email || !password) {
        console.log('failed to sign in user');
        return;
    }

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangeListner = async (callback) => onAuthStateChanged(auth, callback);