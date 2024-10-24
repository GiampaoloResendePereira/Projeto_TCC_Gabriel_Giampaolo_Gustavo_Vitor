
import CalculoFrete from './components/pages/CalculoFrete';
import Dashboard from './components/pages/Dashboard';
import FormEdit from './components/pages/FormEditar/FormEdit';
import GerenciamentoEntregas from './components/pages/GerenciamentoEntregas';
import Relatorios from './components/pages/Relatorios';
import Home from './components/pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/pages/Login';


function App() {
  return (
   
    <Router>
      <Routes> 
        <Route path ='/' element={<Home/>}/>
        <Route path ='/gerenciamento_entregas' element={<GerenciamentoEntregas/>}/>
        <Route path ='/calculo_frete' element={<CalculoFrete/>}/>
        <Route path ='/form_entregas' element={<FormEdit/>}/>
        <Route path ='/dashboard_entregas' element={<Dashboard/>}/>
        <Route path ='/relatorios' element={<Relatorios/>}/>
        <Route path ='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
