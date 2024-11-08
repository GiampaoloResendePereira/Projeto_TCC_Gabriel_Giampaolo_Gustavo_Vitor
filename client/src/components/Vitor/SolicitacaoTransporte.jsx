import React, { useState } from 'react';
import styles from '../../styles/SolicitacaoTransporte.css';

function SolicitacaoFrete() {
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
  const [erroCep, setErroCep] = useState(false);

  // Função para validar CEP (formato #####-###)
  const validarCep = (cep) => {
    const regexCep = /^[0-9]{5}-[0-9]{3}$/;
    return regexCep.test(cep);
  };

  // Função para calcular frete
  const calcularFrete = () => {
    // Validação dos CEPs
    if (!validarCep(cepOrigem)) {
      setErroCep('CEP de origem inválido. Formato correto: #####-###.');
      return;
    }

    if (!validarCep(cepDestino)) {
      setErroCep('CEP de destino inválido. Formato correto: #####-###.');
      return;
    }

    // Validação dos outros campos
    if (largura && altura && comprimento && peso) {
      setPrecoFrete(150); // Exemplo de valor calculado
      setConfirmandoFrete(true);
      setErroCep(''); // Limpa a mensagem de erro, se houver
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
    <div  classNamme ={styles.black} style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Solicitação de Frete</h2>
      {/* Formulário Inicial */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' }}>
        <div>
          <label>Digite CEP de origem:</label>
          <input
            type="text"
            value={cepOrigem}
            onChange={(e) => setCepOrigem(e.target.value)}
            placeholder="Ex: 12345-678"
          />
        </div>
        
        <div>
          <label>Digite CEP do destinatário:</label>
          <input
            type="text"
            value={cepDestino}
            onChange={(e) => setCepDestino(e.target.value)}
            placeholder="Ex: 12345-678"
          />
        </div>
        {erroCep && <p style={{ color: 'red' }}>{erroCep}</p>}
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
        <div style={{ backgroundColor: '', color: 'white', padding: '0px', marginTop: '0px', textAlign: 'center'}}>
          <p>Preço do Frete: R$ {precoFrete}</p>
          <p>Deseja solicitar frete?</p>
          <button onClick={confirmarFrete} className='btn2'>Sim, Solicitar Frete</button>
        </div>
      )}

      {/* Formulário Completo de Solicitação */}
      {solicitacaoEnviada && (
        <div style={{ marginTop: '20px' }}>
          <h3>Dados do Remetente</h3>
          <label>Logradouro:</label>
          <input type="text" />
          <label>Bairro:</label>
          <input type="text" />
          <label>Número (opcional):</label>
          <input type="text" />
          <label>Complemento (opcional):</label>
          <input type="text" />
          <label>Nome do Remetente:</label>
          <input type="text" />
          <label>Celular:</label>
          <input type="text" />
          <label>CPF ou CNPJ:</label>
          <input type="text" />
          <label>Email:</label>
          <input type="email" />

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
          <button className='btn2'>Confirmar Frete</button>
          <button className='btn2'>Imprimir para Motoboy</button>
        </div>
      )}

      {/* Mensagem de Confirmação Final */}
      {solicitacaoEnviada && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          <p>Solicitação enviada com sucesso!</p>
          <button onClick={() => window.location.reload()} className='btn2'>Voltar para o início</button>
        </div>
      )}
    </div>
  );
}

export default SolicitacaoFrete;
