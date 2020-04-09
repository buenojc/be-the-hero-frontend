import React from "react";
import "./styles.css";
import { FiLogIn } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import hero from "../../assets/heroes.png";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero" />
        <form>
          <h1>Faça seu Logon</h1>
          <input placeholder="Sua ID" />
          <button type="submit">Entrar</button>
          <FiLogIn size={16} color="#e02041" />
          <a href="/register">Não tenho cadastro</a>
        </form>
      </section>
      <img src={hero} alt="Heroes" />
    </div>
  );
}
