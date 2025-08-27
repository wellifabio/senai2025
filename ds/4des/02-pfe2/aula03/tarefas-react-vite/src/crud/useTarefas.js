import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getApp } from "firebase/app";

export function useTarefas(reload = 0) {
  const [tarefas, setTarefas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTarefas() {
      try {
        const app = getApp();
        const db = getFirestore(app);
        const tarefasRef = collection(db, "tarefas");
        const snapshot = await getDocs(tarefasRef);
        const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTarefas(lista);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTarefas();
  }, [reload]);

  return { tarefas, loading, error };
}
