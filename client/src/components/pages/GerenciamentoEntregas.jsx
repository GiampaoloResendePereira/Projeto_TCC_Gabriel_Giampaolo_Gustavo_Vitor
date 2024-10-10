import React from 'react'
import styles from './GerenciamentoEntregas.css'
import NavBarAdmin from '../layout/NavBarAdmin'

function Gerenciamento_entregas() {
  return (

    <>
      <NavBarAdmin />

      <div className='LayoutEntregas'>
        <div className='form-select'>
          <div>Filtro de pesquisa
            <form action="">
              <div>Status
                <input type="radio" id='option1' name='group1' value='Option1' />
                <label for='option1'>Todos</label>
                <input type="radio" id='option2' name='group1' value='Option1' />
                <label for='option2'>Agendados</label>
                <input type='radio' id='option3' name='group1' value='Option1' />
                <label for='option3'>Em andamento</label>
                <input type='radio' id='option4' name='group1' value='Option1' />
                <label for='option4'>Finalizados</label>
              </div>
            </form>
            {/* <div className='date'> */}
          </div>
        </div>
        <div>
          <div className='container'>
            <div className='blackTable' >
              <table className='tituloPesquisa'>
                <thead>
                  <span>id</span>
                  <span>Cliente</span>
                  <span>Motoboy</span>
                  <span>Status</span>
                  <span>Data Agendada</span>
                  <span>Data Entrega</span>
                  <span class ="bg-light">
                    <a class="btn btn-warning" href='/editar_entregas'>Editar</a>
                  </span>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Gerenciamento_entregas