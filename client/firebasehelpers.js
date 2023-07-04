import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function addDream(auth, dream) {
  // check if auth is not null
  if (!auth) {
    throw new Error("Not authenticated");
  }

  try {
    const docRef = await addDoc(
      collection(db, `users/${auth.uid}/dreams`),
      dream
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAllDreams() {
  try {
    const q = query(collection(db, `dreams`));
    const querySnapshot = await getDocs(q);
    let dreams = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      // Include the document ID with the rest of the document data
      dreams.push({ id: doc.id, ...doc.data() });
    });
    return dreams;
  } catch (e) {
    console.error("Error getting documents: ", e);
  }
}
