import { useState } from "react";
import "./App.css";

export default function App() {
  const [smell, setSmell] = useState(6);

  return (
    <div className="page">
      <div className="content">
        <h1 className="title">☝️ How Smelly You Are ☝️</h1>
        <p className="subtitle">Click the button to see how smelly you are.</p>

        <div className="panel">
          <div className="stat">Smelliness : {smell}</div>
          <button className="btn" onClick={() => setSmell(Math.floor(Math.random() * 11))}>
            Click me
          </button>
        </div>

        <div className="footer">Powered by Aikon 😎</div>
      </div>
    </div>
  );
}
