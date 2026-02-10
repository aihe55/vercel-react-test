import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1>🚀 React on Vercel</h1>
      <p>If you see this, everything is wired correctly.</p>

      <div className="card">
        <p><strong>Domain:</strong> akon-ai.com</p>
        <p><strong>Clicks:</strong> {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      <small>Powered by React + Vite</small>
    </main>
  );
}
