import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import AdminHome from './pages/Admin/AdminHome';
import ClientHome from './pages/Client/ClientHome';
import MotoboyHome from './pages/Motoboy/MotoboyHome';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/admin" component={AdminHome} />
      <Route path="/client" component={ClientHome} />
      <Route path="/motoboy" component={MotoboyHome} />
      {/* Adicione outras rotas conforme necessário */}
    </Switch>
  </Router>
);

export default Routes;
