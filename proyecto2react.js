import React, { useState } from "react";

function App() {

  const [numero, setNumero] = useState("");
  const [texto, setTexto] = useState("");

  const [errorNumero, setErrorNumero] = useState("");
  const [errorTexto, setErrorTexto] = useState("");

  const manejarNumero = (e) => {
    const valor = e.target.value;

    if (isNaN(valor)) {
      setErrorNumero("Dato erróneo, ingrese un número");
    } else {
      setErrorNumero("");
      setNumero(valor);
    }
  };

  const manejarTexto = (e) => {
    const valor = e.target.value;

    if (valor.length < 5) {
      setErrorTexto("Debe ingresar mínimo 5 caracteres");
    } else {
      setErrorTexto("");
      setTexto(valor);
    }
  };

  const aceptar = () => {

    console.log("Maria Celeste Paz Barbosa");

    setNumero("");
    setTexto("");

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Proyecto 2</h1>

      <div>

        <input
          type="text"
          placeholder="Ingrese número"
          value={numero}
          onChange={manejarNumero}
        />

        <p style={{ color: "red" }}>
          {errorNumero}
        </p>

      </div>

      <div>

        <input
          type="text"
          placeholder="Ingrese texto"
          value={texto}
          onChange={manejarTexto}
        />

        <p style={{ color: "red" }}>
          {errorTexto}
        </p>

      </div>

      <button onClick={aceptar}>
        Aceptar
      </button>

    </div>

  );

}

export default App;