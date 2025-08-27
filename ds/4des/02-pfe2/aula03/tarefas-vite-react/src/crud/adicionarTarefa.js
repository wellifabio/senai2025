import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

export async function adicionarTarefa({ titulo, conteudo, data, hora }) {
  const app = getApp();
  const db = getFirestore(app);
  // Garante que a data seja salva como string yyyy-mm-dd (sem conversão de fuso)
  const dataStr = typeof data === 'string' ? data : new Date(data).toISOString().split('T')[0];
  await addDoc(collection(db, "tarefas"), { titulo, conteudo, data: dataStr, hora });
}
