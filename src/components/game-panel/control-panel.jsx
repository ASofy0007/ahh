import React from "react";
import "./control-panel.css";

function ControlPanel() {
  return (
    <body>
      <button type="button" className="inicio">
        {" "}
        Iniciar Jogo{" "}
      </button>

      <div className="nivel">
        <form className="form">
          <fieldset className="form-group">
            <label>Nível:</label>
            <select id="eNiveis" defaultValue="0">
              <option defaultValue value="0">
                Selecionar
              </option>
              <option value="1">Facil</option>
              <option value="2">Medio</option>
              <option value="3">Dificil</option>
            </select>
          </fieldset>
        </form>
      </div>

      <div className="gInfo">
        <dl>
          <dt>Tempo de Jogo:</dt>
          <dd id="gameTime">0</dd>
        </dl>
        <dl>
          <dt>Pontuação:</dt>
          <dd id="points">0</dd>
        </dl>
      </div>

      <div id="tabelaSopa" className="Facil"></div>
      <div id="tabelaSopa" className="Medio"></div>
      <div id="tabelaSopa" className="Dificil"></div>

      <button id="bTop">TOP 10</button>
    </body>
  );
}
export default ControlPanel;
