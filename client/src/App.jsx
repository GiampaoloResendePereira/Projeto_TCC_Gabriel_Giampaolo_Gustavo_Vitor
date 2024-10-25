import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoAdicional from './components/pages/calculoFrete/InfoAdicional';
import PedidosCadastrados from './components/pages/PedidosCadastrados/PedidosCadastrados';
import TelaCliente from './components/pages/telaCliente/TelaCliente';
import TelaSuporte from './components/pages/telaSuporte/TelaSuporte';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaCliente />} />
                <Route path="/pedidos_cadastrados" element={<PedidosCadastrados />} />
                <Route path="/cadastro_produtos" element={<InfoAdicional/>} />
                <Route path="/tela_suporte" element={<TelaSuporte />} />
            </Routes>
        </Router>
    );
}

export default App;
