import React, { useState } from 'react';
import styles from './styles/SolicitacaoFrete.module.css'
import { useNavigate } from 'react-router-dom';


function SolicitacaoFrete({id, handleSubmit}) {
  // Estados para os campos iniciais
  const [cepOrigem, setCepOrigem] = useState('');
  const [cepDestino, setCepDestino] = useState('');
  const [largura, setLargura] = useState('');
  const [altura, setAltura] = useState('');
  const [comprimento, setComprimento] = useState('');
  const [peso, setPeso] = useState('');

  // Estados para cálculo e detalhes adicionais
  const [precoFrete, setPrecoFrete] = useState(null);
  const [confirmandoFrete, setConfirmandoFrete] = useState(false);
  const [solicitacaoEnviada, setSolicitacaoEnviada] = useState(false);


  // State para dados do destinatário e do remetente
  const navigate = useNavigate();
  const [nomeRemetente, setNomeRemetente] = useState('');
  const [cpfRemetente, setCpfRemetente] = useState('');
  const [cepRemetente, setCepRemetente] = useState('');
  const [logradouroRemetente, setLogardouroRemetente] = useState('');
  const [numeroResidenciaRemetente, setNumeroResidenciaRemetente] = useState('');
  const [complementoRemetente, setComplementoRemetente] = useState('');
  const [bairroRemetente, setBairroRemetente] = useState('');
  const [cidadeRemetente, setCidadeRemetente] = useState('');
  const [estadoRemetente, setEstadoRemetente] = useState('');
  const [contatoRemetente, setContatoRemetente] = useState('');
  const [telefoneRemetente, setTelefoneRemetente] = useState('');
  const [emailRemetente, setEmailRemetente] = useState('');


  //função para enviar dados do formulario
  function submit(e) {
    e.preventDefalt();

    const formRemetente = {
      nome: nomeRemetente,
      cpf: cpfRemetente,
      cep: cepRemetente,
      logradouro: logradouroRemetente,
      numeroResidencia: numeroResidenciaRemetente,
      complemento: complementoRemetente,
      bairro: bairroRemetente,
      cidade: cidadeRemetente,
      estado: estadoRemetente,
      contato: contatoRemetente,
      telefone: telefoneRemetente,
      email: emailRemetente,
      chave: null,
    };
  
    //verifica se a função handleSubmit foi passada corretamente
  if(typeof handleSubmit === 'function'){ 
    handleSubmit(formRemetente, id);//enviar dados do formulario
  }else{
    console.erro("erro ao enviar o formulário")
  }
  navigate(`/gerenciamento-entregas/${id}`);
}


  // Função para calcular frete
  const calcularFrete = () => {
    // Aqui você incluiria a lógica para calcular o valor do frete
    // e validar os campos como CEPs, dimensões e peso.
    if (cepOrigem && cepDestino && largura && altura && comprimento && peso) {
      setPrecoFrete(150); // Exemplo de valor calculado
      setConfirmandoFrete(true);
    } else {
      alert('Preencha todos os campos para calcular o frete.');
    }
  };

  // Função para confirmar solicitação de frete
  const confirmarFrete = () => {
    // Aqui você pode adicionar lógica para enviar os dados
    setSolicitacaoEnviada(true);
    setConfirmandoFrete(false);
  };

  return (
    <div className={styles.color}>
      <div className={`${styles.estilo} container`}>
        <div className={styles.titulo}>
          <h1>Solicitação de Frete</h1>
        </div>
        {/* Formulário Inicial */}
        <div className={styles.estilo_form}>
          <div>
            <label>Digite CEP de origem:</label>
            <input type="text" value={cepOrigem} onChange={(e) => setCepOrigem(e.target.value)} />
          </div>
          <div>
            <label>Digite CEP do destinatário:</label>
            <input type="text" value={cepDestino} onChange={(e) => setCepDestino(e.target.value)} />
          </div>
          <div>
            <h4>Tamanho e peso do pacote</h4>
            <p>O pacote pode ter até 30 kg e até 100 cm em cada lado. A soma dos lados não deve ultrapassar 200 cm.</p>
            <label>Largura (cm):</label>
            <input type="number" value={largura} onChange={(e) => setLargura(e.target.value)} />
            <label>Altura (cm):</label>
            <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
            <label>Comprimento (cm):</label>
            <input type="number" value={comprimento} onChange={(e) => setComprimento(e.target.value)} />
            <label>Peso (kg):</label>
            <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
          </div>
          <br />
          <button onClick={calcularFrete} className='btn'>Calcular Frete</button>
        </div>

        {/* Resultado do Cálculo do Frete */}
        {precoFrete && confirmandoFrete && (
          <div style={{ backgroundColor: 'red', color: 'white', padding: '20px', marginTop: '20px' }}>
            <p>Preço do Frete: R$ {precoFrete}</p>
            <p>Deseja solicitar frete?</p>
            <button onClick={confirmarFrete} className='btn2'>Sim, Solicitar Frete</button>
          </div>
        )}


        {/* Formulário Completo de Solicitação */}
        {solicitacaoEnviada && (
          <div className={styles.estiloRemetente}>
            <h3>Dados do Remetente</h3>

            <form  onSubmit={submit}>
              <label className='form-label'>
                Nome Remetente:
              </label>
              <input
                className='form-control'
                type='text'
                id='nomeRemetente'
                value={nomeRemetente}
                onChange={(e) => setNomeRemetente(e.target.value)}
              />
              <label className='form-control'>
                CPF:
              </label>
              <input
                className='form-control'
                type="text"
                id='cpf'
                value={cpfRemetente}
                onChange={(e) => setCpfRemetente(e.target.value)}
              />
              <label className='form-label'>
                CEP:
              </label>
              <input
                className='form-control'
                type="text"
                id="cep"
                value={cepRemetente}
                onChange={(e) => setCepRemetente(e.target.value)}
              />
              <label className='form-label'>
                Logradouro:
              </label>
              <input
                className='form-control'
                type="text"
                id='logradouro'
                value={logradouroRemetente}
                onChange={(e) => setLogardouroRemetente(e.target.value)} //onChange 

              />
              <label className='form-label'>
                Número Residência:
              </label>
              <input
                className='form-control'
                type="text"
                id="numero_residenciaRemetente"
                value={numeroResidenciaRemetente}
                onChange={(e) => setNumeroResidenciaRemetente(e.target.value)}
              />
              <label className='form-label'>
                Complemento::
              </label>
              <input
                className='form-control'
                type="text"
                id="complemento"
                value={complementoRemetente}
                onChange={(e) => setComplementoRemetente(e.target.value)}
              />
              <label className='form-label'>
                Bairro:
              </label>
              <input
                className='form-control'
                type="text"
                id="bairro"
                value={bairroRemetente}
                onChange={(e) => setBairroRemetente(e.target.value)}
              />
              <label className='form-label'>
                Cidade:
              </label>
              <input
                className='form-control'
                type="text"
                id="cidadeRemetente"
                value={cidadeRemetente}
                onChange={(e) => setCidadeRemetente(e.target.value)}
              />
              <label className='form-label'>
                Estado:
              </label>
              <input className='form-control'
                type="text"
                id='estadoRemtente'
                value={estadoRemetente}
                onChange={(e) => setEstadoRemetente(e.target.value)}
              />
              <label className='form-label'>
                Contato:
              </label>
              <input className='form-control'
                type="text"
                id='contatoRemtente'
                value={contatoRemetente}
                onChange={(e) => setContatoRemetente(e.target.value)}
              />
              <label className='form-label'>
                Telefone:
              </label>
              <input className="form-control"
                type="text"
                id='telefoneRemtente'
                value={telefoneRemetente}
                onChange={(e) => setTelefoneRemetente(e.target.value)}
              />
              <label className='form-label'>
                Email:
              </label>
              <input className="form-control"
                type="text"
                id='emailRemetente'
                value={emailRemetente}
                onChange={(e) => setEmailRemetente(e.target.value)}
              />
            </form>
            <form>
              <h3>Dados do Destinatário</h3>
              <label>Logradouro:</label>
              <input type="text" />
              <label>Bairro:</label>
              <input type="text" />
              <label>Número (opcional):</label>
              <input type="text" />
              <label>Complemento (opcional):</label>
              <input type="text" />
              <label>Instruções (opcional):</label>
              <input type="text" />
              <label>Nome do Destinatário:</label>
              <input type="text" />
              <label>Celular:</label>
              <input type="text" />
              <label>CPF ou CNPJ:</label>
              <input type="text" />
            

            <h4>Tamanho e Peso do Pacote</h4>
            <p>O pacote pode ter até 30 kg e até 100 cm em cada lado. A soma dos lados não deve ultrapassar 200 cm.</p>
            <label>Largura (cm):</label>
            <input type="number" value={largura} readOnly />
            <label>Altura (cm):</label>
            <input type="number" value={altura} readOnly />
            <label>Comprimento (cm):</label>
            <input type="number" value={comprimento} readOnly />
            <label>Peso (kg):</label>
            <input type="number" value={peso} readOnly />

            <h4>Valor do Frete: R$ {precoFrete}</h4>
            <button type='submit'>Confirmar Frete</button>
            <button>Imprimir para Motoboy</button>
            </form>
          </div>
        )}

        {/* Mensagem de Confirmação Final */}
        {solicitacaoEnviada && (
          <div style={{ marginTop: '20px', color: 'green' }}>
            <p>Solicitação enviada com sucesso!</p>
            <button onClick={() => window.location.reload()}>Voltar para o início</button>
          </div>
        )}
      </div>
    </div >

  );
}

export default SolicitacaoFrete;
