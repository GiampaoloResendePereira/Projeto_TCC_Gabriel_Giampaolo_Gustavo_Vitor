import React from 'react'
import styles from './Login.module.css'

function Login() {
  return (
    <body className={styles.body}>
      <div className={styles.black} >
        <div className={`${styles.boxLogion} container`}>
          <h4>Login</h4>
          <form action="">
            <div>
              <label htmlFor="">Nome:</label>
              <input type="text" />
              <label htmlFor="">Email:</label>
              <input type="text" />
              <label htmlFor="">CPF:</label>
              <input type="text" />
              <label htmlFor="">Senha:</label>
              <input type="password" />
            </div>
            <div className='login_form-content-form-actions'>
              <button type='submit'>CANCELAR</button>
              <button type='subimit'> LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  )
}

export default Login