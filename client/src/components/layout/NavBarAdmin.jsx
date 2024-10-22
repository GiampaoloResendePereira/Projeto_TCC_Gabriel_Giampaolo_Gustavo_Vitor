import React from 'react'
import styles from './NavBarAdmin.module.css'

function NavBarAdmin() {
  return (
    <div className='navbar-adm'>
      <div className={styles.red}>
        <div className={styles.admin}>
          <span>Administrador</span>
        </div>
      </div>
      <div className={styles.black}>
        <nav className={`${styles.elementNavbar} container`}>
          <ul>
            <li><a href='/dashboard_entregas'>Dashboard</a></li>
            <li className='navbar-brand'>
              <a href='/gerenciamento_entregas'>Gerenciamento entregas</a></li>
            <li><a href="/relatorios">Relatórios</a></li>
          </ul>
          <div>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-link' to='/relatorio'></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavBarAdmin
