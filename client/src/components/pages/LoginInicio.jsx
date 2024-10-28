import React from 'react';
import styles from './Login.module.css';

function LoginInicio() {
  return (
    <div className={styles.body}>
      <div className='boxBlack'></div>
      <div className={styles.black}>
        <div className={`${styles.boxLogin} container`}>
          <form className={`${styles.formLogin}`} action="">
            <div>
              <h4>Login</h4>
              <label htmlFor="">Nome:</label>
              <input class='form-control'type="text" />
              <label htmlFor="">Email:</label>
              <input class='form-control' type="text" />
              <label htmlFor="">CPF:</label>
              <input class='form-control' type="text" />
              <label htmlFor="">Senha:</label>
              <input class='form-control' type="password" />
            </div>
            <br />
            <div className="login_form">
              <button type="submit" class="btn btn-outline-danger">CANCELAR</button>
              <button type="submit" className='btn btn-primary'>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default  LoginInicio;
