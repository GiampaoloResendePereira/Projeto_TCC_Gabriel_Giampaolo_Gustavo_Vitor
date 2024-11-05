import React from 'react'
import NavBarClient from '../layout/NavBarClient'
import styles from '../pages/CalculoFrete.module.css'
import NavBarNavigation from '../layout/NavBarAdmin'

function CalculoFrete() {
  return (
    <>
      <div className={styles.calculo}>
        <form className={styles.frete} action="">
          <div className={`${styles.calculoFrete}`}>
            <div className={`${styles.cepOrigem}`}>
              <label htmlFor="">Digite o CEP de origem</label>
              <input type="text" />
            </div>
            <br />
            <div className={`${styles.cepDestinatario}`}>
              <label htmlFor="">Digite o CEP do destinatário</label>
              <input type="text" />
            </div>
          </div>
          <div >
            <div className={`${styles.informativo} container`}>
              <h6><strong>Tamanho e peso do pacote</strong></h6>
              <p>O pacote pode ter até 30kg e até 100cm em cada lado.
               A soma dos lados não deve ultrapassar 200cm.</p>
            </div>
            <div className='container'>
              <div className={styles.calculoInputs}>
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
            </div>
          </div>
        </form>
        <div className={styles.container}>
          <div className={styles.entregasCalculo}>
            <h3>Entregas em 3 dias</h3>
            <button type="submit" class=" btn btn-outline-light">Selecionar</button>
          </div>
          <div className={styles.entregasCalculo}>
            <h3>Entregas em 5 horas</h3>
            <button class=" btn btn-outline-light">Selecionar</button>
          </div>
        </div>
      </div>
    </>


  )
}

export default CalculoFrete
