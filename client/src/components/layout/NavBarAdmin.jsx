import React from 'react'
import styles from './NavBarAdmin.module.css'

function NavBarAdmin() {
  return (
    <div className={styles.black}>
      <nav className={`${styles.elemntNavbar} container`}>
        <ul>
          <li>Início</li>
          <li className='navbar-brand'>Gerenciamento entregas</li>
          <li>Relatórios</li>
        </ul>
        <div>
          <ul className='navbar-nav mx-auto'>
            <li className='nav-link' to='/relatorio'></li>
          </ul>
        </div>

        {/* <span>Gerenciamento de entregas</span>
        <span>Relatórios</span>
        <span>Configurações</span> */}
      </nav>
    </div>
  )
}

export default NavBarAdmin