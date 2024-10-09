import React from 'react'

import styles from './NavBarClient.module.css';

function NavBarClient() {
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

export default NavBarClient
