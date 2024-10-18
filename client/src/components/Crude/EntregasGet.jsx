
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function EntregasGet(tipo, onDeleteSucess) {
    const [entregas, setEntregas] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            CarregarEntregas();
        }, 300);
    }, []);

    // await faz a execução de uma função async pausar, para esperar pelo retorno da Promise
    async function CarregarEntregas() {
        try {
            const resposta = await fetch('http://localhost:5000/entregas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'apllication/json'
                },
            })
            if (!resposta) {
                throw new Error('Error ao buscar entregas');
            }

        } catch (error) {
            console.log('Erro ao buscar aulas', error);

        }

    }

    async function deletarEntrega(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/entregas${id}`, {
                method: 'DELETE',
                headers: {
                    'Contente-type': 'aplication/json'
                }
            });
            if (!resposta.ok) {
                const error = await resposta.json();
                throw new Error('Error ao Deletar o Usuário', error);
            }
            else {
                setEntregas(entregas.filter(entrega => entrega.id !== id))
                onDeleteSucess();
            }

        } catch (error) {

        }

    }
    return (
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Cliente</th>
                        <th>Motoboy</th>
                        <th>Status</th>
                        <th>Data Agendada</th>
                        <th>Data Entrega</th>
                        {tipo === 'edit' && <th>Ações</th>}
                        <tbody>
                            {entregas.map((entrega) => (
                                <tr key={entrega.id}>
                                    <td className=''>{entrega.cliente}</td>
                                    <td>{entrega.status}</td>
                                    <td>{entrega.data_agendamento}</td>
                                    <td>{entrega.data_entrega}</td>
                                    {tipo === 'edit' && (
                                        <td className='bg-light'>
                                            <Link to={`/form_entregas/${entrega.id}`} className='btn btn-warning' >Editar</Link>
                                            <button className='btn btn-danger ms-2' onClick={() => deletarEntrega(entrega.id)}>Deletar</button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </tr>
                </thead>

            </table>
        </div>
    )
}

export default EntregasGet