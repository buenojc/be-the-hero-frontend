import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói que possa
            resolver isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>
        <form>
          <input placeholder="Titulo do Caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <div className="button-group">
            <Link className="cancel-btn" to="/profile">
              Cancelar
            </Link>
            <button type="submit" className="button">
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
