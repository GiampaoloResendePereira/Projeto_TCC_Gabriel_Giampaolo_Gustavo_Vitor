import { useEffect, useState } from 'react';
import styles from './TabelaEntregas.module.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap

function TabelaEntregas({ tipo, onDeleteSuccess }) {
    const [cadastro, setCadastro] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            carregarEntregas();
        }, 300);
    }, []);

    async function carregarEntregas() {
        try {
            const resposta = await fetch('http://localhost:5000/entregas', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!resposta) {
                throw new Error('Erro ao buscar cadastro');
            }

            const consulta = await resposta.json();
            setCadastro(consulta);
        } catch (error) {
            console.log('Erro ao buscar cadastro', error);
        }
    }

    async function deletarCadastro(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/entregas/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!resposta.ok) {
                const error = await resposta.json();
                throw new Error('Erro ao Deletar Usuário', error);
            } else {
                setCadastro(cadastro.filter(dados => dados.id !== id));
                onDeleteSuccess();
            }
        } catch (error) {
            console.log('Erro ao Deletar Usuário', error);
        }
    }

    return (
        <div className={`${styles.tabela} ${tipo === 'edit' ? styles.edit : ''}`}>
            <div className={styles.tableClient}>
            <table className= {styles.tabelaClient}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome Cliente</th>
                        <th>Motoboy</th>
                        <th>Status</th>
                        {/* A coluna de ações sempre é exibida temporariamente para depuração */}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {cadastro.map((dados) => (
                        <tr key={dados.id}>
                            <td>{dados.id}</td>
                            <td>{dados.cliente}</td>
                            <td>{dados.motoboy}</td>
                            <td>{dados.status}</td>
                            {/* Os botões de edição e exclusão são sempre exibidos temporariamente para depuração */}
                            <td className='bg-light'> 
                                <Link to={`/editar_entregas/${dados.id}`} className='btn btn-warning'>Editar</Link>
                                <button className='btn btn-danger ms-2' onClick={() => deletarCadastro(dados.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default TabelaEntregas;
