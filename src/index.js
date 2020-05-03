import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sobre from './pages/sobre/Sobre';
import Livros from './pages/livros/Livros';
import Autores from './pages/autores/Autores';
import NotFound from './pages/not-found/NotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home} />

        <Route path='/sobre' component={Sobre} />

        <Route path='/livros' component={Livros} />

        <Route path='/autores' component={Autores} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
