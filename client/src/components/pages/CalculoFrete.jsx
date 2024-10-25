import React from 'react'
import NavBarClient from '../layout/NavBarClient'
import styles from '../pages/CalculoFrete.module.css'

function CalculoFrete() {
  return (
    <>
      <NavBarClient />
      <div className='frete'>
      <form action="">
        <div className={`${styles.calculoFrete}`}>
          <div className={`${styles.cepOrigem}`}>
            <label  htmlFor="">Digite o CEP de origem</label>
            <input type="text" />
            </div>
            <br />
            <div className={`${styles.cepDestinatario}`}>
            <label htmlFor="">Digite o CEP do destinatário</label>
            <input type="text" />
            </div>
        </div>
          <div className='informativo'>
            <h6><strong>Tamanho e peso do pacote</strong></h6>
            <p>O pacote pode ter até 30kg e até 100cm em cada lado.</p>
            <p> A soma dos lados não deve ultrapassar 200cm.</p>
          </div>
          <div className='inputs'>
            <label htmlFor="">Lagura  cm</label>
            <input type="text" />
            <label htmlFor="">Altrura  cm</label>
            <input type="text" />
            <br />
            <label htmlFor="">Comprimento  cm</label>
            <input type="text" />
            <label htmlFor="">Peso  kg</label>
            <input type="text" />
          </div>
          <div className="calculo_form">
            <button type="submit" class="btn btn-outline-danger">CALCULAR</button>
          </div>
        </form>
      </div>
    </>


  )
}

export default CalculoFrete
