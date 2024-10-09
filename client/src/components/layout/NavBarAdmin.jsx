import React from 'react'
import styles from './NavBarAdmin.module.css'

function NavBarAdmin() {
  return (
    <div className = {styles.black}>
      <nav className={`${styles.elemntNavbar} container`}>
        <span>Inicio</span>
        <span>Gerenciamento de entregas</span>
        <span>Relatórios</span>
        <span>Configurações</span>
      </nav>
    </div>
  )
}

export default NavBarAdmin