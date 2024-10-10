import { useState } from "react"
import React from 'react'

function cadastrar({}){
    const [entre, setEntreg] = useState([])

    fetch("http://localhost:5000/entregas",{
        method:"GET",  
        headers: {
            'Content-Type': 'apllication/json'
        }
    })
    
}

function EditEntregas() {
    return (
        <div className='container'>
            <div className="container justify-content-center col-sm-12 col-md-6 col-lg-3">
                <form>
                    <label className="form-label" for >Nome Cliente</label>
                    <input className="form-control" type="text" ></input>
                    <label className="form-label">Nome motoboy</label>
                    <input className="form-control" type="text"></input>
                    <div className="status">Status<br />
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label className="form-check-label" for="inlineRadio1">Agendado</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                            <label className="form-check-label" for="inlineRadio2">Em andamento</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="opition3" ></input>
                            <label className="form-check-label" for="inlineRadio2">Finalizado</label>
                        </div>
                    </div>
                    <br />
                    <label className="form-label" for >Data Agendamento</label>
                    <input className="form-control" type="date"></input>
                    <label className="form-label" for >Data Entrega</label>
                    <input className="form-control" type="date"></input>
                    <td class="bg-light">
                        <a class="btn btn-danger mt2" href="/gerenciamento_entregas">Voltar</a>
                        <button class="btn btn-success mt-2 float-end" type='submit'>Editar</button>
                    </td>
                </form>
            </div>
        </div>
    )
}

export default EditEntregas