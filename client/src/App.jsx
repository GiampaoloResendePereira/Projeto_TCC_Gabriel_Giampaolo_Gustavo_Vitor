import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import InfoAdicional from './components/pages/calculoFrete/InfoAdicional';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/informacoes_adicionais' element={<InfoAdicional/>} />
      </Routes>
    </Router>
  );
}

export default App;
