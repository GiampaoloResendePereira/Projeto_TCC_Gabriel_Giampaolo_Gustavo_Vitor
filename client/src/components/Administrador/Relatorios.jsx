import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './Relatorio.css'; // Importe o arquivo de estilos

const Relatorio = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [feedback, setFeedback] = useState('');
  const [formato, setFormato] = useState('pdf');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formato === 'pdf') {
      gerarPDF();
    } else if (formato === 'text') {
      gerarTexto();
    }
    
    setFeedback('Relatório salvo na área de trabalho com sucesso!');
    
    // Limpar campos do formulário
    setTitulo('');
    setDescricao('');
    setData('');
  };

  const gerarPDF = () => {
    const doc = new jsPDF();
    doc.text(`Título do Relatório: ${titulo}`, 10, 10);
    doc.text(`Descrição: ${descricao}`, 10, 20);
    doc.text(`Data: ${data}`, 10, 30);
    doc.save('Relatorio.pdf');
  };

  const gerarTexto = () => {
    const texto = `Título do Relatório: ${titulo}\nDescrição: ${descricao}\nData: ${data}`;
    const blob = new Blob([texto], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Relatorio.txt';
    link.click();
  };

  return (
    <div className="container mt-5">
      <h2>Enviar Relatório</h2>
      {feedback && <div className="alert alert-success" role="alert">{feedback}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titulo" className="form-label">Título do Relatório:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">Descrição:</label>
          <textarea
            className="form-control"
            id="descricao"
            rows="4"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="data" className="form-label">Data:</label>
          <input
            type="date"
            className="form-control"
            id="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="formato" className="form-label">Formato do Relatório:</label>
          <select
            className="form-select"
            id="formato"
            value={formato}
            onChange={(e) => setFormato(e.target.value)}
          >
            <option value="pdf">PDF</option>
            <option value="text">Texto</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Salvar Relatório</button>
      </form>
    </div>
  );
};

export default Relatorio;
