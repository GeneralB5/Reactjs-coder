import {Timestamp, addDoc, collection, doc, documentId, getDoc, getDocs, getFirestore, query, setDoc, where, writeBatch} from "firebase/firestore";


import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBx6TyYuqnE2VoWqlQL6aMhgL-pUuT6-Jc",
  authDomain: "reactjs-proyectofinal.firebaseapp.com",
  projectId: "reactjs-proyectofinal",
  storageBucket: "reactjs-proyectofinal.appspot.com",
  messagingSenderId: "209754525812",
  appId: "1:209754525812:web:bd783d1e3d0926cc58c121"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getMode= async()=>{
    const md =  await getDoc(doc(db,"modo","mods"));
    const datamd = md.get("modo");
    return datamd;
}

const setModeDark= async()=>{
   const ba = writeBatch(db);
    const md =  await getDoc(doc(db,"modo","mods"));
    let x = 0;
    ba.update(md.ref,{modo:`dark`})
    await ba.commit()
}
const setModeLight= async()=>{
    const ba = writeBatch(db);
     const md =  await getDoc(doc(db,"modo","mods"));
     let x = 0;
     ba.update(md.ref,{modo:`Light`})
     await ba.commit()
 }
export {getMode,setModeDark,setModeLight}