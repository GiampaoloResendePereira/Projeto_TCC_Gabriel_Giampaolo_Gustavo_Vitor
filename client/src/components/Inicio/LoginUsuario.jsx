// src/pages/LoginAdmin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from '../../assets/img/logo.png'; // Certifique-se de que o caminho para a logo está correto
import styles from '../../styles/LoginUsuario.css';
import { Link } from "react-router-dom";


const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();


  //verificando se o valor da variável para direcionar a tela correta
  function verificar(UsuaLogin) {
    //fazendo a tratativa em propos
    if (UsuaLogin === "admin") {
      navigate("/administrador");
    } else if (UsuaLogin === "cliente") {
      navigate("/cliente");

    } else {
      alert("credenciais incorretas")
    }

  }

  //colocar o evento handlelogin dentro de logintipo
  const handleLogin = (e) => {
    e.preventDefault();
    let UsuaLogin = "";

    if (email === "admin@gmail.com" && senha === "admin123") {
       UsuaLogin = "admin";
       verificar(UsuaLogin);
      // chamando function para direcionar o usuário.
    } else if (email === "cliente@gmail.com" && senha === "cliente123") {
       UsuaLogin = "cliente"
       verificar(UsuaLogin);
    } else if (email === "motoboy@gmail.com" && senha === "motoboy123") {
      //verificar();
    } else {
      alert("Credenciais incorretas para Login.");
    }


  };

  return (
    <div className="login-container">
      <div className="login_form">
        <div className={styles.login_form}>
          <img src={logo} alt="Logo" className="login-logo" />
          <h4 className="login-title">Login</h4>
        </div>
        <form onSubmit={handleLogin} className="login-inputs">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="login-input"
          />
          <div>
          
            <Link className="btn btn-danger mt-2" to="/cadastro_client">Cadastrar</Link>
          </div>
          <Button variant="danger" type="submit" className="mt-4" >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
