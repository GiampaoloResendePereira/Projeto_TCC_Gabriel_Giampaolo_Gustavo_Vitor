import React from 'react';
import './TelaSuporte.css';
import suporte from '../../assets/img/suporte.png';
import { useNavigate } from 'react-router-dom'; 


const TelaSuporte = () => {
    const navigate = useNavigate(); 

    return (
        <div className="suporte">
            {/* Navbar */}
            <div className="navbar">
                <button className="back-arrow" onClick={() => navigate('/TelaCliente')}>
                    &#8592;
                </button>
                <h1>Suporte</h1>
            </div>

            <div className="container">
                {/* Área para a imagem */}
                <div className="support-image">
                    <img src={suporte} alt="suporte" />
                </div>

                {/* Campo para resumir o problema */}
                <input type="text" placeholder="Resuma o problema em uma palavra" required />

                {/* Caixa de texto para detalhar o problema */}
                <textarea rows="6" placeholder="Descreva o problema detalhadamente" required></textarea>

                {/* Botão de Envio */}
                <button type="submit">Enviar</button>
            </div>
        </div>
    );
};

export default TelaSuporte;
