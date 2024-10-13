import React from 'react';
import { createRoot } from 'react-dom/client';
import './InfoAdicional.css';
import NavbarInfoAdd from '../../layout/NavbarInfoAdd';

function InfoAdicional() {
    return (
        <div className="container justify-content-center col-sm-12 col-md-6 col-lg-3">
            <NavbarInfoAdd/><br/>
            <h2>CEP</h2>
            <form action="">
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="logradouroRemetente">Logradouro</label>
                        <input type="text" id="logradouroRemetente" name="logradouroRemetente" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="bairroRemetente">Bairro</label>
                        <input type="text" id="bairroRemetente" name="bairroRemetente" className="info-form" required />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="numeroRemetente">Número</label>
                        <input type="text" id="numeroRemetente" name="numeroRemetente" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="complementoRemetente">Complemento (opcional)</label>
                        <input type="text" id="complementoRemetente" name="complementoRemetente" className="info-form" />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="nomeRemetente">Nome do remetente</label>
                        <input type="text" id="nomeRemetente" name="nomeRemetente" className="info-form" required />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="celularRemetente">Celular</label>
                        <input type="tel" id="celularRemetente" name="celularRemetente" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="cpfCnpjRemetente">CPF ou CNPJ</label>
                        <input type="text" id="cpfCnpjRemetente" name="cpfCnpjRemetente" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="emailRemetente">Email</label>
                        <input type="email" id="emailRemetente" name="emailRemetente" className="info-form" required />
                    </div>
                </div>

                <h2>CEP(destinatário)</h2>
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="logradouroDestinatario">Logradouro</label>
                        <input type="text" id="logradouroDestinatario" name="logradouroDestinatario" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="bairroDestinatario">Bairro</label>
                        <input type="text" id="bairroDestinatario" name="bairroDestinatario" className="info-form" required />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="numeroDestinatario">Número</label>
                        <input type="text" id="numeroDestinatario" name="numeroDestinatario" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="complementoDestinatario">Complemento (opcional)</label>
                        <input type="text" id="complementoDestinatario" name="complementoDestinatario" className="info-form" />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="instrucoes">Instruções</label>
                        <input type="text" id="instrucoes" name="instrucoes" className="info-form" required />
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <label className="form-label" htmlFor="nomeDestinatario">Nome do destinatário</label>
                        <input type="text" id="nomeDestinatario" name="nomeDestinatario" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="celularDestinatario">Celular</label>
                        <input type="tel" id="celularDestinatario" name="celularDestinatario" className="info-form" required />
                    </div>
                    <div className="col">
                        <label className="form-label" htmlFor="cpfCnpjDestinatario">CPF ou CNPJ</label>
                        <input type="text" id="cpfCnpjDestinatario" name="cpfCnpjDestinatario" className="info-form" required />
                    </div>
                </div>

                <button type="submit" className="btn-pedir">Pedir</button>
            </form>
        </div>
    );
}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<InfoAdicional />);

export default InfoAdicional;
