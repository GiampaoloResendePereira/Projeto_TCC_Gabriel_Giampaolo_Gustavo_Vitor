import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import InfoAdicional from './components/pages/calculoFrete/InfoAdicional';
import AulasCadastradas from './components/pages/AulasCadastradas/AulasCadastradas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/informacoes_adicionais' element={<InfoAdicional/>} />
        <Route path="/aulas_cadastradas" element={<AulasCadastradas />} />
      </Routes>
    </Router>
  );
}

export default App;
