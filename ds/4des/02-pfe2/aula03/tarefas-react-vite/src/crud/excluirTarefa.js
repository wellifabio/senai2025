import { getFirestore, doc, deleteDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

export async function excluirTarefa(id) {
  const app = getApp();
  const db = getFirestore(app);
  await deleteDoc(doc(db, "tarefas", id));
}
