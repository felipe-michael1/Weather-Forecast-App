import { useState, useEffect } from "react";
import type LoginView from "../pages/Register";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState("");

  useEffect(() => {
    async function carregarUsuarios() {
      const res = await fetch(`${API_URL}/usuarios/`);
      const data = await res.json();
      setUsuarios(data);
    }

    carregarUsuarios();
  }, []);

  async function adicionarUsuario(e) {
    e.preventDefault();

    const res = await fetch(`${API_URL}/novo_usuario/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome }),
    });

    const novoUsuario = await res.json();
    setUsuarios((prev) => [...prev, novoUsuario]);
    setNome("");
  }

  return (
    <LoginView
      usuarios={usuarios}
      nome={nome}
      setNome={setNome}
      adicionarUsuario={adicionarUsuario}
    />
  );
}

export default Login;
