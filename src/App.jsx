import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="container">
      <h1>☝️ How Smelly You Are ☝️</h1>
      <p>Click the button to see how smelly you are.</p>

      <div className="card">
        <p><strong>Smelliness :</strong> {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      <small>Powered by Aikon 😎</small>
    </main>
  );
}
