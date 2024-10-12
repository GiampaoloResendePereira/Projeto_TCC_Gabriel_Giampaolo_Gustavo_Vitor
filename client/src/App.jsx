import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<InfoAdicional/>} />
  
      </Routes>
    </Router>
  );
}

export default App;
