"use client";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export function addDream(auth, dream) {
  let userId = auth.user.uid;
  let colRef = collection(db, userId);
  let docRef = doc(colRef, "dreams", new Date().toISOString());

  setDoc(docRef, { dream }, { merge: true });
  return;
}

export function deleteDream(auth) {
  let userId = auth.user.uid;
  let colRef = collection(db, userId);
  let docRef = doc(colRef, "dreams", uuid);

  updateDoc(docRef, { dream: deleteField() });
  return;
}

export async function getAllDreams(auth) {
  let userId = auth.user.uid;
  let colRef = collection(db, userId);
  let docRef = doc(colRef, "dreams");
  let docSnap = await getDocFromServer(docRef);

  if (docSnap.data() == null) {
    return "";
  }

  let fields = Object.keys(docSnap.data());
  if (fields.length == 0) {
    return "";
  }

  let string = "";
  string += fields[0].dream;
  for (let i = 1; i < fields.length; i++) {
    string += ",";
    string += fields[i].dream;
  }
  return string;
}
