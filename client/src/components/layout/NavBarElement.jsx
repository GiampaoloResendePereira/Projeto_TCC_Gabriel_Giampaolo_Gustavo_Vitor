import React from 'react'

import styles from './NavBar.module.css';

function NavBar() {
  return (
    <div className = {styles.black}>
      <nav className={`${styles.elemntNavbar} container`}>
        <span>Meus pedidos</span>
        <span>Notificações</span>
        <span>Suporte</span>
        <span>Sair</span>
      </nav>
    </div>
  )
}

export default NavBar
