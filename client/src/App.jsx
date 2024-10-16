import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import InfoAdicional from './components/pages/calculoFrete/InfoAdicional';
import PedidosCadastrados from './components/pages/PedidosCadastrados/PedidosCadastrados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InfoAdicional/>} />
        <Route path="/pedidos_cadastradas" element={<PedidosCadastrados />} />
      </Routes>
    </Router>
  );
}

export default App;
