import React from 'react'
import styles from './GerenciamentoEntregas.css'
import EntregasGet from '../Crude/EntregasGet'
import FormEdit from './FormEditar/FormEdit'


function Gerenciamento_entregas() {

  return (

    <>
     
      <div class='container'>
        <div className='form'>
          <div>Filtro de pesquisa
            <form>
              <h6>Status</h6>
              <div>
                <input type="radio" id='option1' name='group1' value='Option1' />
                <label for='option1'>Todos</label>
                <input type="radio" id='option2' name='group1' value='Option1' />
                <label for='option2'>Agendados</label>
                <input type='radio' id='option3' name='group1' value='Option1' />
                <label for='option3'>Em andamento</label>
                <input type='radio' id='option4' name='group1' value='Option1' />
                <label for='option4'>Finalizados</label>
              </div>
              <div>
                <label class="form-label"> Data Inicio</label>
                <input class="form-control" type="date" />
                <label class="form-label"> Data Fim</label>
                <input class="form-control" type="date" />
                <label class="form-label">Motoboy</label>
                <input class="form-control" type="text" />
                <label class="form-label">Cliente</label>
                <input class="form-control" type="text" />
              </div>
            </form>
          </div>
        </div>
        <div class="form">
          <div className={styles.blackTable}>
            <table className='tituloPesquisa'>
              <thead class='title'>
                <th>Código</th>
                <th>Cliente</th>
                <th>Motoboy</th>
                <th>Status</th>
                <th>Data Agendada</th>
                <th>Data Entrega</th>
                <th>Ações</th>
              </thead>
              <div class="btnAcoes">
                <th class="bg-light">
                  <a class="btn btn-warning" href='/form_entregas'>Editar</a>
                </th>
              </div>
            </table>
          </div>
        </div>
        <EntregasGet/>
      </div>

    </>
  )
}

export default Gerenciamento_entregas