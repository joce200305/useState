import { useState } from "react";

const State = () => {
  const [texto, setTexto] = useState("");
  const [fondo, setColorFondo] = useState("#ffffff");

  const styles = `
    body {
      background-color: ${fondo};
      margin: 0;
      min-height: 100vh;
      transition: background-color 0.3s ease;
    }
  `;
  return (
    <>
      <style>{styles}</style>

      <div style={{ padding: "20px" }}>
        <textarea
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe aquí..."
          style={{
            width: "100%",
            minHeight: "100px",
            padding: "10px",
            margin: "15px 0",
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        />
        {texto && <p style={{ fontWeight: "bold" }}>{texto}</p>}

        <div style={{ marginTop: "20px" }}>
          <label>Color de fondo: </label>
          <input
            type="color"
            value={fondo}
            onChange={(e) => setColorFondo(e.target.value)}
            style={{ width: "50px", height: "30px", cursor: "pointer" }}
          />
          <span
            style={{
              marginLeft: "10px",
              fontFamily: "monospace",
              backgroundColor: "rgba(0,0,0,0.1)",
              padding: "5px 10px",
            }}
          >
            {fondo}
          </span>
        </div>
      </div>
    </>
  );
};

export default State;
