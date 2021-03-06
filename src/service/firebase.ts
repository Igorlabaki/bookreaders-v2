import { initializeApp,getApp,getApps,FirebaseApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

let app:FirebaseApp

const firebaseConfig = {
    apiKey:             "AIzaSyAxSVh0LIcrsg0JTsq2p3fhzqn1sNfZwbM",
    authDomain:         "bookreaders-v2.firebaseapp.com",
    projectId:          "bookreaders-v2",
    storageBucket:      "bookreaders-v2.appspot.com",
    messagingSenderId:  "575456866527",
    appId:              "1:575456866527:web:415fd61813486061c4396a",
    measurementId:      "G-C7K5X9HQTB"
};  

// Initialize Firebase
if(getApps().length){
    app = getApp()
}else{
    app = initializeApp(firebaseConfig)
}

export default app;

export const db         = getFirestore(app)
export const storage    = getStorage(app)