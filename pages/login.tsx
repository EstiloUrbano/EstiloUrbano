import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) alert(error.message);
    else alert("Login exitoso!");
  }

  async function handleRegister() {
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert(error.message);
    else alert("Cuenta creada, revisa tu email!");
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login / Registro</h1>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegister}>Registrar</button>
      </div>
    </div>
  );
}
