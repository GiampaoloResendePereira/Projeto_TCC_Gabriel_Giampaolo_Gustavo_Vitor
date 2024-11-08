import { useEffect, useState } from 'react';
 import styles from './TabelaClient.module.css'
// import Loading from '../layout/Loading';
//import { Link } from 'react-router-dom';



function TabelaCliente({ tipo, onDeleteSuccess }) {
    const [cadastro, setCadastro] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            carregarCadastro();
        }, 300);
    }, []);

    async function carregarCadastro() {
        try {
            const resposta = await fetch('http://localhost:5000/client', {
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
            // console.log(consulta);
        } catch (error) {
            console.log('Erro ao buscar aulas', error);
        }
    }

    async function deletarCadastro(id) {
        try {
            const resposta = await fetch(`http://localhost:5000/client/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });
            if (!resposta.ok) {
                const error = await resposta.json();
                throw new Error('Erro ao Deletar Usuário', error);
            }
            else {
                //alert('Aula deletada');
                setCadastro(cadastro.filter(dados => dados.id !== id))
                onDeleteSuccess();
            }
        } catch (error) {
            //throw new Error ('Erro ao Deletar Usuário', error);
        }
    }
    return (
        <div className={`${styles.tabela} ${tipo === 'edit' ? styles.edit : ''}`}>
            <table className='tabelaAulas'>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome Cliente</th>
                        <th>Telefone</th>
                        <th>Contato</th>
                        <th>Cep</th>
                        <th>Rua</th>
                        <th>Bairro</th>
                        <th>Cidade</th>
                        <th>Estado</th>
                        {tipo === 'edit' && <th>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {cadastro.map((dados) => (
                        <tr key={dados.id}>
                             <td className={styles.fim}></td>
                            <td>{dados.nomeClient}</td>
                            <td>{dados.telefone}</td>
                            <td>{dados.contato}</td>
                            <td>{dados.cep}</td>
                            <td>{dados.rua}</td>
                            <td>{dados.numeroResidencia}</td>
                            <td>{dados.bairro}</td>
                            <td>{dados.cidade}</td>
                            <td>{dados.estado}</td>
                            {tipo === 'edit' && (
                                <td className='bg-light'>
                                    {/* <Link to={`/editar_aula/${dados.id}`} className='btn btn-warning'>Editar</Link> */}
                                    <button className='btn btn-danger ms-2' onClick={() => deletarCadastro(dados.id)}>Deletar</button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaCliente;
