
import React, { useState } from "react";
import "../style.css";

import { useTarefas } from "./crud/useTarefas";
import { excluirTarefa } from "./crud/excluirTarefa";
import { adicionarTarefa } from "./crud/adicionarTarefa";

function App() {

    const [modalOpen, setModalOpen] = useState(false);
    const [form, setForm] = useState({ titulo: "", conteudo: "", data: new Date().toISOString().split("T")[0], hora: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) });
    const { tarefas, loading, error } = useTarefas();

    // Forçar recarregar tarefas após exclusão
    const [reload, setReload] = useState(0);
    const { tarefas: tarefasList, loading: loadingTarefas, error: errorTarefas } = useTarefas(reload);

    const handleExcluir = async (id) => {
        await excluirTarefa(id);
        setReload(r => r + 1);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await adicionarTarefa(form);
        setForm({ titulo: "", conteudo: "", data: "", hora: "" });
        setModalOpen(false);
        setReload(r => r + 1);
    };

    return (
        <>
            <header>
                <h1>Tarefas</h1>
                <button onClick={() => setModalOpen(true)}>Nova Tarefa</button>
            </header>
            <main>
                {loading && <p>Carregando tarefas...</p>}
                {error && <p>Erro ao carregar tarefas.</p>}
                {tarefas && tarefas.length === 0 && !loading && <p>Nenhuma tarefa encontrada.</p>}
                {tarefasList && tarefasList.map((tarefa) => (
                    <div className="card" key={tarefa.id}>
                        <h2>{tarefa.titulo}</h2>
                        <hr />
                        <p>{tarefa.conteudo}</p>
                        <p style={{ textAlign: "right" }}>{new Date(tarefa.data).toLocaleDateString()} {tarefa.hora}</p>
                        <div style={{ marginTop: 8, textAlign: "right" }}><button onClick={() => handleExcluir(tarefa.id)}>Excluir</button></div>
                    </div>
                ))}
            </main>
            <footer>
                <h2>By wellifabio</h2>
            </footer>
            {modalOpen && (
                <section id="modalNovo" className="modal">
                    <div className="janela">
                        <h2>Nova Tarefa</h2>
                        <form id="formNovaTarefa" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="titulo">Título:</label>
                                <input type="text" id="titulo" name="titulo" value={form.titulo} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="conteudo">Conteúdo:</label>
                                <textarea id="conteudo" name="conteudo" value={form.conteudo} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="data">Data:</label>
                                <input type="date" id="data" name="data" value={form.data} onChange={handleChange} required />
                            </div>
                            <div>
                                <label htmlFor="hora">Hora:</label>
                                <input type="time" id="hora" name="hora" value={form.hora} onChange={handleChange} required />
                            </div>
                            <button type="submit">Cadastrar</button>
                            <button type="button" onClick={() => setModalOpen(false)}>Fechar</button>
                        </form>
                    </div>
                </section>
            )}
        </>
    );
}

export default App;
