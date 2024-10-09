
import CalculoFrete from './components/pages/CalculoFrete';
import GerenciamentoEntregas from './components/pages/GerenciamentoEntregas';
import Home from './components/pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
   
    <Router>
      <Routes> 
        <Route path ='/' element={<Home/>}/>
        <Route path ='/gerenciamento_entregas' element={<GerenciamentoEntregas/>}/>
        <Route path ='/calculo_frete' element={<CalculoFrete/>}/>
      </Routes>
    </Router>
  );
}

export default App;
