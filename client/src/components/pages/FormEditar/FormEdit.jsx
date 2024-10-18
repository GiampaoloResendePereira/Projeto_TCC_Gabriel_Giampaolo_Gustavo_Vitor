import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EntregasGet from '../../Crude/EntregasGet';

function FormAula({ titulo, txtBtn, handleSubmit, id, tipo }) {
    const navigate = useNavigate();
    const [codigo, setCodigo] = useState('');
    const [cliente, setCliente] = useState('');
    const [motoboy, setMotoboy] = useState('');
    const [status, setStatus] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [dataEntrega, setdataFim] = useState('');

    useEffect(() => {
        if (id) {
            baixarEntrega(id);
        }
    }, []);
 
    async function baixarEntrega(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/entregas/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const respostaJSON = await resposta.json();
            if (!resposta.ok) {
                console.debug('Erro ao baixar os dados', respostaJSON);
            } else {
                setCodigo(respostaJSON.codigo);
                setCliente(respostaJSON.cliente);
                setMotoboy(respostaJSON.motoboy);
                setStatus(respostaJSON.status);
                console.log(respostaJSON);
            }
        } catch (error) {
            console.debug('Erro ao baixar aula', error);
        }
    }

    function submit(e) {
        e.preventDefault();
        //Criando objeto que será encaminhado para o POST da AP
        const infoEntregas = {
            codigo: codigo,
            cliente: cliente,
            motoboy: motoboy,
            status: status,
            chave: null,
        };
        handleSubmit(infoEntregas, id);
        navigate(`/gerenciamento_entregas/${tipo}`);
    }
    return (
        <div className="container justify-content-center col-sm-12 col-md-6 col-lg-3">
            <h1 className="text-center">{titulo}</h1>
            <form onSubmit={submit}>

                <label className="form-label" htmlFor="">
                    Código:
                </label>
                <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                />
                <label className="form-label" htmlFor="">
                    Cliente:
                </label>
                <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    value={cliente}
                    onChange={(e) => setCliente(e.target.value)}
                />
                <label className="form-label" htmlFor="">
                    Motoboy:
                </label>
                <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    value={motoboy}
                    onChange={(e) => setMotoboy(e.target.value)}
                />
                <label className="form-label" htmlFor="">
                    Status:
                </label>
                <input
                    className="form-control"
                    type="text"
                    name=""
                    id=""
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                />
                <Link className="btn btn-danger mt-2" to="/gerenciamento_entregas">
                    Cancelar
                </Link>
                <button className="btn btn-success mt-2 float-end" type="submit">{/*  */}
                    {txtBtn}
                </button>
            </form>
        </div>
       
    );
}

export default FormAula;